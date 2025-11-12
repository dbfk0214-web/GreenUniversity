  import axios from "axios";
  import React, { use, useEffect, useState } from "react";
  import { typeEnum } from "../api/commonApi";

  const AdminLayout = ({ config,select }) => {
    // 데이터 가져오기
    const { columns, funcs, formData, type} = config;
    const {selectId, setSelectId} = select;

    const { readAll ,readOne, deleteOne, insert, update } = funcs;

    // useState 사용
    const [readData, setReadData] = useState([]);
    const [findReadOne, setFindReadOne] = useState({}); // 읽은 내용 저장
    const [form, setForm] = useState(formData);

    // 더미 데이터
    /* const [dummyData, setDummyData] = useState([
      {
        name: "홍길동",
        date: "2025-11-12",
        status: "출석",
        memo: "지각 없음",
      },
      {
        name: "김철수",
        date: "2025-11-12",
        status: "결석",
        memo: "사유서 제출 예정",
      },
      {
        name: "이영희",
        date: "2025-11-12",
        status: "지각",
        memo: "10분 늦음",
      },
    ]); */

  useEffect(() => {
    const getList = async () => {
      try {
        const data = await readAll();
        console.log(data);
        setReadData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getList();
  }, []);

    // 핸들러
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
      console.log(form);
    };

    return (
      <div className="container mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        {/* 버튼 마다 기능들이 매핑되어 있습니다. */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={() => {
              readOne(selectId)
                .then((item) => {
                  setFindReadOne(item);
                  // setOpenOne(true);
                })
                .catch((error) => console.error(error));
            }}
            className="w-1/5 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            1개 읽기
          </button>
          <button
            // onClick={() => deleteOne(id)}
            className="w-1/5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            삭제
          </button>
          <button
            // onClick={() => setOpenAdd(true)}
            className="w-1/5 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            추가
          </button>
          <button
            // onClick={() => update(id)}
            className="w-1/5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition"
          >
            수정
          </button>
        </div>

        {/* 데이터 읽기 type에 따라 변화가 발생합니다. */}
      {type === typeEnum.default && (
        <div>
          <h3 className="font-semibold mb-3">상세보기</h3>

          {/* 컬럼 헤더 */}
          <div className="flex font-semibold border-b pb-1 mb-2">
            {columns && Object.keys(columns).map((key) => (
              <div key={key} className="flex-1">{columns[key]}</div>
            ))}
          </div>

          {/* 데이터 목록 */}
          {readData && readData.map((data, index) => (
            <div key={index} className="flex border-b py-1">
              {Object.keys(columns).map((key) => (
                <div key={key} className="flex-1">{data[key]}</div>
              ))}
            </div>
          ))}
        </div>
      )}
      </div>
    );
  };

  export default AdminLayout;
