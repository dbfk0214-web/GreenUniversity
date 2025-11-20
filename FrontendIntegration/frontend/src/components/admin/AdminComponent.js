import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import AttendanceApi from "../../api/AttendanceApi";
import BoardApi from "../../api/BoardApi";
import CommentApi from "../../api/CommentApi";
import CourseApi from "../../api/CourseApi";
import CourseOfferingApi from "../../api/CourseOfferingApi";
import DepartmentApi from "../../api/DepartmentApi";
import GradeApi from "../../api/GradeApi";
import NoticeApi from "../../api/NoticeApi";
import PostApi from "../../api/PostApi";
import ReviewApi from "../../api/ReviewApi";
import TimeTableApi from "../../api/TimeTableApi";
import userApi from "../../api/userApi";
import EnrollmentApi from "../../api/EnrollmentApi";

import AdminSelectedContext from "./AdminSelectContext";
import { excludeColumns } from "../../api/commonApi";


const AdminComponent = () => {
  // useState 정의
  const [selectAttendance, setSelectAttendance] = useState("none");
  const [selectBoard, setSelectBoard] = useState("none");
  const [setlectComment, setSetlectComment] = useState("none");
  const [selectCourse, setSelectCourse] = useState("none");
  const [selectCourseOffering, setSelectCourseOffering] = useState("none");
  const [selectDepartment, setSelectDepartment] = useState("none");
  const [selectEnrollment, setSelectEnrollment] = useState("none");
  const [selectGrade, setSelectGrade] = useState("none");
  const [selectNotice, setSelectNotice] = useState("none");
  const [selectPost, setSelectPost] = useState("none");
  const [selectReview, setSelectReview] = useState("none");
  const [selectTimeTable, setSelectTimeTable] = useState("none");
  const [selectUser, setSelectUser] = useState("none");



  return (
    <div>
      {/* --소개글-- */}
      <h1 className="text-2xl font-bold mb-6">
        개발 편의를 위한 자동화 페이지
      </h1>
      <h2>
        프론트엔드와 백엔드 통신을 해야할 때, 실제로 해보는 장소입니다.
        양식에 맞게, 데이터를 세팅하면, 연동이 됩니다.
      </h2>

      {/* --Attendance-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectAttendance, setSelectId: setSelectAttendance }}
      >
        <AdminLayout
          config={{
            ...AttendanceApi.config,
            formData: AttendanceApi.config.columns,
            columns: excludeColumns(AttendanceApi.config.columns, AttendanceApi.config.excludeList),
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Board-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectBoard, setSelectId: setSelectBoard }}
      >
        <AdminLayout
          config={{
            ...BoardApi.config,
            columns: excludeColumns(BoardApi.config.columns, BoardApi.config.excludeList),
            formData: excludeColumns(BoardApi.config.columns, BoardApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Comment-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: setlectComment, setSelectId: setSetlectComment }}
      >
        <AdminLayout
          config={{
            ...CommentApi.config,
            columns: excludeColumns(CommentApi.config.columns, CommentApi.config.excludeList),
            formData: excludeColumns(CommentApi.config.columns, CommentApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Course-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectCourse, setSelectId: setSelectCourse }}
      >
        <AdminLayout
          config={{
            ...CourseApi.config,
            columns: excludeColumns(CourseApi.config.columns, CourseApi.config.excludeList),
            formData: excludeColumns(CourseApi.config.columns, CourseApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --CourseOffering-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectCourseOffering, setSelectId: setSelectCourseOffering }}
      >
        <AdminLayout
          config={{
            ...CourseOfferingApi.config,
            columns: excludeColumns(CourseOfferingApi.config.columns, CourseOfferingApi.config.excludeList),
            formData: excludeColumns(CourseOfferingApi.config.columns, CourseOfferingApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Department-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectDepartment, setSelectId: setSelectDepartment }}
      >
        <AdminLayout
          config={{
            ...DepartmentApi.config,
            columns: excludeColumns(DepartmentApi.config.columns, DepartmentApi.config.excludeList),
            formData: excludeColumns(DepartmentApi.config.columns, DepartmentApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Enrollment-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectEnrollment, setSelectId: setSelectEnrollment }}
      >
        <AdminLayout
          config={{
            ...EnrollmentApi.config,
            columns: excludeColumns(EnrollmentApi.config.columns, EnrollmentApi.config.excludeList),
            formData: excludeColumns(EnrollmentApi.config.columns, EnrollmentApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Grade-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectGrade, setSelectId: setSelectGrade }}
      >
        <AdminLayout
          config={{
            ...GradeApi.config,
            columns: excludeColumns(GradeApi.config.columns, GradeApi.config.excludeList),
            formData: excludeColumns(GradeApi.config.columns, GradeApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Notice-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectNotice, setSelectId: setSelectNotice }}
      >
        <AdminLayout
          config={{
            ...NoticeApi.config,
            columns: excludeColumns(NoticeApi.config.columns, NoticeApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>


      {/* --Post-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectPost, setSelectId: setSelectPost }}
      >
        <AdminLayout
          config={{
            ...PostApi.config,
            columns: excludeColumns(PostApi.config.columns, PostApi.config.excludeList),
            formData: excludeColumns(PostApi.config.columns, PostApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --Review-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectReview, setSelectId: setSelectReview }}
      >
        <AdminLayout
          config={{
            ...ReviewApi.config,
            columns: excludeColumns(ReviewApi.config.columns, ReviewApi.config.excludeList),
            formData: excludeColumns(ReviewApi.config.columns, ReviewApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --TimeTable-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectTimeTable, setSelectId: setSelectTimeTable }}
      >
        <AdminLayout
          config={{
            ...TimeTableApi.config,
            columns: excludeColumns(TimeTableApi.config.columns, TimeTableApi.config.excludeList),
            formData: excludeColumns(TimeTableApi.config.columns, TimeTableApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>

      {/* --User-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectUser, setSelectId: setSelectUser }}
      >
        <AdminLayout
          config={{
            ...userApi.config,
            columns: excludeColumns(userApi.config.columns, userApi.config.excludeList),
            formData: excludeColumns(userApi.config.columns, userApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>
    </div>
  );
};

export default AdminComponent;
