// src/pages/adminmanagement/admin/AdminNotice.jsx

import React, { useState } from "react";
import axios from "axios";
import NoticeApi from "../../../api/NoticeApi";


export default function AdminNotice() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    target: "ALL",
    importance: "NORMAL",
    startDate: "",
    endDate: "",
  });

  // ✅ 날짜 제약 포함 handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      // 🔒 시작일 변경 시 종료일 검증
      if (name === "startDate" && prev.endDate && value > prev.endDate) {
        updated.endDate = "";
      }

      // 🔒 종료일 변경 시 시작일 검증
      if (name === "endDate" && prev.startDate && value < prev.startDate) {
        updated.startDate = "";
      }

      return updated;
    });
  };

  const createNotice = async () => {
    await NoticeApi.config.funcs.writeOne(form);
    alert("공지가 등록되었습니다.");
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 제목 */}
      <div>
        <label className="text-sm font-medium">제목</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>

      {/* 내용 */}
      <div>
        <label className="text-sm font-medium">내용</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border rounded-md p-2 h-28 mt-1"
        />
      </div>

      {/* 대상 */}
      <div>
        <label className="text-sm font-medium">대상</label>
        <select
          name="target"
          value={form.target}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mt-1"
        >
          <option value="ALL">전체</option>
          <option value="STUDENT">학생</option>
          <option value="PROFESSOR">교수</option>
        </select>
      </div>

      {/* 중요도 */}
      <div>
        <label className="text-sm font-medium">중요도</label>
        <select
          name="importance"
          value={form.importance}
          onChange={handleChange}
          className="w-full border rounded-md p-2 mt-1"
        >
          <option value="NORMAL">일반</option>
          <option value="HIGH">중요</option>
        </select>
      </div>

      {/* 📅 날짜 */}
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="text-sm font-medium">시작일</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            max={form.endDate || undefined}   // ✅ 종료일 이후 비활성화
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm font-medium">종료일</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            min={form.startDate || undefined} // ✅ 시작일 이전 비활성화
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>
      </div>

      <button
        onClick={createNotice}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
      >
        등록하기
      </button>
    </div>
  );
}

