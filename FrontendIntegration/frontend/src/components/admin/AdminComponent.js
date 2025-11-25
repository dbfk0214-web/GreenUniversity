import React, { useState } from "react";
import { useSelector } from "react-redux";

import AdminLayout from "../../layouts/AdminLayout";

import AttendanceApi from "../../api/AttendanceApi";
import BoardApi from "../../api/BoardApi";
import CommentApi from "../../api/CommentApi";
import CourseApi from "../../api/CourseApi";
import CourseOfferingApi from "../../api/CourseOfferingApi";
import DepartmentApi from "../../api/DepartmentApi";
import EnrollmentApi from "../../api/EnrollmentApi";
import GradeApi from "../../api/GradeApi";
import NoticeApi from "../../api/NoticeApi";
import PostApi from "../../api/PostApi";
import ReviewApi from "../../api/ReviewApi";
import TimeTableApi from "../../api/TimeTableApi";
import userApi from "../../api/userApi";

import AdminSelectedContext from "./AdminSelectContext";

const AdminComponent = () => {
  const loginState = useSelector((state) => state.loginSlice);
  const userEmail = loginState.email;

  const handleCreateTimeTable = async (dto) => {
    // API 호출 시 userEmail 전달
    await TimeTableApi.config.funcs.writeOne(dto, userEmail);
  };

  const handleCreateReview = async (dto) => {
    await ReviewApi.config.funcs.writeOne(dto, userEmail);
  };

  const onSubmitReview = async (dto) => {
    // [중요] 실제로 어떤 데이터를 보내는지 확인
    console.log("실제 전송 데이터:", JSON.stringify(dto, null, 2));

    try {
      await ReviewApi.config.funcs.writeOne(dto, userEmail);
      alert("리뷰가 등록되었습니다.");
    } catch (err) {
      console.log("Error Response:", err.response);
      console.log("Error Data:", err.response?.data);
      console.log("Error Status:", err.response?.status);

      const errorData = err.response?.data;

      if (!errorData) {
        alert("서버와 연결할 수 없거나 알 수 없는 오류입니다.");
        return;
      }

      if (typeof errorData === "string") {
        alert(errorData);
      } else if (errorData.message) {
        alert(errorData.message);
      } else {
        alert("요청 처리 중 오류가 발생했습니다.");
      }

      console.error("Error Details:", err);
    }
  };

  // 상태 통합
  const [selectedIds, setSelectedIds] = useState({
    attendance: "none",
    board: "none",
    comment: "none",
    course: "none",
    courseOffering: "none",
    department: "none",
    enrollment: "none",
    grade: "none",
    notice: "none",
    post: "none",
    review: "none",
    timeTable: "none",
    user: "none",
  });

  const setSelectId = (tableKey, id) => {
    setSelectedIds((prev) => ({ ...prev, [tableKey]: id }));
  };

  const tableApis = {
    attendance: AttendanceApi,
    board: BoardApi,
    comment: CommentApi,
    course: CourseApi,
    courseOffering: CourseOfferingApi,
    department: DepartmentApi,
    enrollment: EnrollmentApi,
    grade: GradeApi,
    notice: NoticeApi,
    post: PostApi,
    review: ReviewApi,
    timeTable: TimeTableApi,
    user: userApi,
  };

  return (
    <div>
      {/* --소개글-- */}
      <h1 className="text-2xl font-bold mb-6">
        개발 편의를 위한 자동화 페이지
      </h1>
      <h2>
        프론트엔드와 백엔드 통신을 해야할 때, 실제로 해보는 장소입니다. 양식에
        맞게, 데이터를 세팅하면, 연동이 됩니다.
      </h2>

      <AdminSelectedContext.Provider value={{ selectedIds, setSelectId }}>
        {Object.keys(tableApis).map((key) => (
          <AdminLayout key={key} config={tableApis[key].config} />
        ))}
      </AdminSelectedContext.Provider>
    </div>
  );
};

export default AdminComponent;
