import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { typeEnum } from "../api/commonApi";
import AdminSelectedContext from "../components/admin/AdminSelectContext";

const AdminLayout = ({ config }) => {
  // 데이터 가져오기
  const { tableInfo, columns, funcs, formData, type } = config;
  const { readAll, readOne, deleteOne, insert, update } = funcs;

  const { selectId, setSelectId } = useContext(AdminSelectedContext);


  // useState 사용
  const [readData, setReadData] = useState([]);
  const [findReadOne, setFindReadOne] = useState({}); // 읽은 내용 저장
  const [form, setForm] = useState(formData);

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
            // readOne(selectId)
            //   .then((item) => {
            //     setFindReadOne(item);
            //     // setOpenOne(true);
            //   })
            //   .catch((error) => console.error(error));
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
          {readData && readData.length === 0 ?
            <div>데이터가 없습니다. </div>
            : <><h3
              className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md"
            >
              {tableInfo.tableName}:{tableInfo.tableEng}</h3>

              {/* 컬럼 헤더 */}
              <div className="flex font-semibold border-b pb-1 mb-2">
                {columns && Object.keys(columns).map((key) => (
                  <div key={key} className="flex-1">{key}:{columns[key]}</div>
                ))}
              </div>

              {/* 데이터 목록 */}
              {typeof readData === "object" && readData.map((data, index) => (
                <div key={index} className="flex border-b py-1">
                  {Object.keys(columns).map((key) => (
                    <div key={key} className="flex-1">{data[key]}</div>
                  ))}
                </div>
              ))}</>}
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
