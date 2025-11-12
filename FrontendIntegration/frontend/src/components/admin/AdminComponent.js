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

const AdminComponent = () => {
  // useState 정의
  const [selectAttendance, setSelectAttendance] = useState("none");

  const excludeColumns = (columns,excludeArray) => {
      return Object.keys(columns)
        .filter(key => !excludeArray.includes(key))
        .reduce((acc,key)=>{
        acc[key] = columns[key];
        return acc},{});
    }

  return (
    <div>
      <AdminSelectedContext.Provider
        value={{ selectId:selectAttendance, setSelectId: setSelectAttendance }}
      >
        <AdminLayout
          config={
            {
              ...AttendanceApi.config, 
              formData : excludeColumns(AttendanceApi.config.columns,AttendanceApi.config.excludeKeys)
            }
          }
          select={{selectId,setSelectId}}
        />
      </AdminSelectedContext.Provider>
    </div>
  );
};

export default AdminComponent;
