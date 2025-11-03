import React from "react";

const ApplyCoursePage = () => {
  return (
    <div>
      <table border="3">
        <caption>강의목록</caption>
        <thead>
          <tr>
            <th>강의ID</th>
            <th>개설학과</th>
            <th>교수번호</th>
            <th>교수명</th>
            <th>강의명</th>
            <th>학점</th>
            <th>잔여/정원</th>
            <th>수강신청</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a01</td>
            <td>컴퓨터</td>
            <td>p00001</td>
            <td>김가가</td>
            <td>운영체제</td>
            <td>3</td>
            <td>27/45</td>
            <td>
              <button>수강신청</button>
              <button>예비신청</button>
              <button>수강취소</button>
            </td>
          </tr>
          <tr>
            <td>a02</td>
            <td>컴퓨터</td>
            <td>p00002</td>
            <td>김나나</td>
            <td>컴퓨터 네트워크</td>
            <td>2</td>
            <td>45/50</td>
            <td>
              <button>수강신청</button>
              <button>예비신청</button>
              <button>수강취소</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApplyCoursePage;
