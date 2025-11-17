import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

import AttendanceApi from "../../api/AttendanceApi";
import BoardApi from "../../api/BoardApi";
import CommentApi from "../../api/CommentApi";
import CourseApi from "../../api/CourseApi";
import CourseOfferingApi from "../../api/CourseOfferingApi";
import GradeApi from "../../api/GradeApi";
import NoticeApi from "../../api/NoticeApi";
import PostApi from "../../api/PostApi";
import ReviewApi from "../../api/ReviewApi";
import ReviTimeTableApiewApi from "../../api/TimeTableApi";
import userApi from "../../api/userApi";

import AdminSelectedContext from "./AdminSelectContext";
import TimeTableApi from "../../api/TimeTableApi";

const AdminComponent = () => {
  // useState 정의
  const [selectAttendance, setSelectAttendance] = useState("none");
  const [selectBoard, setSelectBoard] = useState("none");
  const [setlectComment, setSetlectComment] = useState("none");
  const [selectCourse, setSelectCourse] = useState("none");
  const [selectCourseOffering, setSelectCourseOffering] = useState("none");
  const [selectGrade, setSelectGrade] = useState("none");
  const [selectNotice, setSelectNotice] = useState("none");
  const [selectPost, setSelectPost] = useState("none");
  const [selectReview, setSelectReview] = useState("none");
  const [selectTimeTable, setSelectTimeTable] = useState("none");
  const [selectUser, setSelectUser] = useState("none");


  const excludeColumns = (columns, excludeArray) => {
    return Object.keys(columns)
      .filter(key => !excludeArray.includes(key))
      .reduce((acc, key) => {
        acc[key] = columns[key];
        return acc
      }, {});
  }


  return (
    <div>
      {/* --Attendance-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectAttendance, setSelectId: setSelectAttendance }}
      >
        <AdminLayout
          config={AttendanceApi.config}
        />
      </AdminSelectedContext.Provider>

      {/* --Board-- */}
      <AdminSelectedContext.Provider
        value={{ selectId: selectBoard, setSelectId: setSelectBoard }}
      >
        <AdminLayout
          config={{
            ...BoardApi.config,
            columns: excludeColumns(BoardApi.config.columns, BoardApi.config.excludeList)
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
            columns: excludeColumns(CommentApi.config.columns, CommentApi.config.excludeList)
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
            columns: excludeColumns(CourseApi.config.columns, CourseApi.config.excludeList)
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
            columns: excludeColumns(CourseOfferingApi.config.columns, CourseOfferingApi.config.excludeList)
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
            columns: excludeColumns(GradeApi.config.columns, GradeApi.config.excludeList)
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
            columns: excludeColumns(PostApi.config.columns, PostApi.config.excludeList)
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
            columns: excludeColumns(ReviewApi.config.columns, ReviewApi.config.excludeList)
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
            columns: excludeColumns(TimeTableApi.config.columns, TimeTableApi.config.excludeList)
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
            columns: excludeColumns(userApi.config.columns, userApi.config.excludeList)
          }}
        />
      </AdminSelectedContext.Provider>
    </div>
  );
};

export default AdminComponent;
