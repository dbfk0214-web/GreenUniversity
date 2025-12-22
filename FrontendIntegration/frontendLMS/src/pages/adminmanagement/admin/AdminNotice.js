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
  // 입력값 변경 핸들러
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 공지 생성 API

    const createNotice = async () => {
  const result = NoticeApi.config.funcs.writeOne(form).then(result => {
    alert("공지가 등록되었습니다.")
    console.log("공지 등록 성공",result);
  });
    }


  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-sm font-medium">제목</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="공지 제목"
          className="w-full border rounded-md p-2 mt-1"
        />
      </div>
      <div>
        <label className="text-sm font-medium">내용</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="공지 내용"
          className="w-full border rounded-md p-2 h-28 mt-1"
        />
      </div>
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
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="text-sm font-medium">시작일</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
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
