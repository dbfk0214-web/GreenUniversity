// src/components/ChatbotWidget.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

/** 간단 봇 응답 (더미) */
const botReply = async (text) => {
  // 여기에 실제 API 연동(axios/fetch) 붙이면 됨
  await new Promise((r) => setTimeout(r, 450));
  return `“${text}”에 대한 답변이 필요하군요! \n샘플 응답이에요. 실제 API를 연결해보세요.`;
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: "안녕하세요! 무엇을 도와드릴까요? 😊" },
  ]);
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  /** 패널 열릴 때 포커스 이동 */
  useEffect(() => {
    if (open) {
      // 약간의 delay로 애니메이션 후 포커스
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  /** 바깥 클릭 닫기 */
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  /** ESC 닫기 */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /** 스크롤 하단 고정 */
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 999999, behavior: "smooth" });
  }, [messages, open]);

  /** 전송 */
  const send = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // bot 타이핑 표시
    const typingId = Date.now() + 1;
    setMessages((prev) => [...prev, { id: typingId, role: "bot-typing", text: "..." }]);

    const answer = await botReply(text);
    setMessages((prev) =>
      prev
        .filter((m) => m.id !== typingId)
        .concat({ id: Date.now() + 2, role: "bot", text: answer })
    );
  };

  /** Enter 전송 (Shift+Enter 줄바꿈) */
  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  /** 메시지 버블 */
  const Bubble = useMemo(
    () =>
      function Bubble({ role, children }) {
        const isUser = role === "user";
        const isTyping = role === "bot-typing";
        const base =
          "max-w-[80%] whitespace-pre-wrap leading-relaxed px-3 py-2 rounded-2xl shadow-sm";
        const cls = isUser
          ? "bg-sky-600 text-white rounded-br-md"
          : isTyping
          ? "bg-sky-50 text-sky-600 border border-sky-100"
          : "bg-white text-sky-900 border border-sky-100";
        return <div className={`${base} ${cls}`}>{children}</div>;
      },
    []
  );

  return (
    <>
      {/* FAB 버튼 */}
      <button
        onClick={() => setOpen(true)}
        aria-label="챗봇 열기"
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-white shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300 transition
        ${open ? "pointer-events-none opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        {/* 아이콘 */}
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
          <path d="M12 3C7.03 3 3 6.58 3 11c0 2.07.9 3.97 2.39 5.43-.12.91-.48 2.3-1.58 3.49-.19.2-.24.5-.13.76.11.26.37.43.65.43 1.87 0 3.33-.89 4.17-1.58.99.3 2.04.47 3.14.47 4.97 0 9-3.58 9-8s-4.03-8-9-8Z" />
        </svg>
        <span className="hidden sm:inline font-semibold">챗봇</span>
      </button>

      {/* 오버레이 (모바일에서 배경 어둡게) */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />

      {/* 패널 */}
      <section
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="챗봇"
        className={`fixed bottom-5 right-5 z-50 flex h-[68vh] w-[92vw] max-w-[420px] translate-y-4 scale-95 opacity-0
          flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl transition-all
          sm:h-[70vh]
          ${open ? "translate-y-0 scale-100 opacity-100" : ""}
        `}
      >
        {/* 헤더 */}
        <header className="flex items-center justify-between bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-full bg-white/20">
              <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
                <path d="M12 2a7 7 0 0 0-7 7v2a5 5 0 0 0 5 5h.28A3 3 0 0 1 13 19v1h2v-1a3 3 0 0 1 2.72-3H18a5 5 0 0 0 5-5V9a7 7 0 0 0-11-7Z" />
              </svg>
            </span>
            <h2 className="text-sm font-bold">캠퍼스 챗봇</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-white/90">
              온라인 • 응답 준비됨
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="닫기"
              className="rounded-xl px-2 py-1 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              ✕
            </button>
          </div>
        </header>

        {/* 메시지 영역 */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto bg-sky-50/40 px-3 py-4 space-y-3"
        >
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <Bubble role={m.role}>
                {m.role === "bot-typing" ? (
                  <span className="inline-flex items-center gap-1">
                    <i className="size-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <i className="size-1.5 rounded-full bg-sky-400 animate-pulse [animation-delay:120ms]" />
                    <i className="size-1.5 rounded-full bg-sky-400 animate-pulse [animation-delay:240ms]" />
                  </span>
                ) : (
                  m.text
                )}
              </Bubble>
            </div>
          ))}
        </div>

        {/* 입력 바 */}
        <form
          className="border-t border-sky-100 bg-white p-3"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="메시지를 입력하세요… (Enter: 전송 / Shift+Enter: 줄바꿈)"
              className="min-h-[44px] max-h-40 flex-1 resize-y rounded-2xl border border-sky-200 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 disabled:opacity-50"
              disabled={!input.trim()}
            >
              보내기
              <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                <path d="M2 21 23 12 2 3v7l15 2-15 2v7Z" />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
