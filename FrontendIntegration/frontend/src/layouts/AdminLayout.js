import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { typeEnum } from "../api/commonApi";
import AdminSelectedContext from "../components/admin/AdminSelectContext";

const AdminLayout = ({ config }) => {
  // 데이터 가져오기
  const { tableInfo, columns, funcs, formData, type } = config;
  const { readAll, readOne, writeOne, deleteOne, updateOne } = funcs;

  // 리덕스
  const { selectId, setSelectId } = useContext(AdminSelectedContext);

  // useState 사용
  const [readData, setReadData] = useState([]);
  const [findReadOne, setFindReadOne] = useState({}); // 읽은 내용 저장
  const [form, setForm] = useState(formData);

  // 갱신용 useState
  const [layoutEnum, setLayoutEnum] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

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
    setLayoutEnum(type);

    if (typeof columns === "object") {
      var columnKey = Object.keys(columns);
      if (columnKey.length > 0) {
        setSelectedColumn(columnKey);
      }
    }

  }, []);

  useEffect(() => {
    console.log("layoutEnum이 변동되었습니다.", layoutEnum);
  }, [layoutEnum]);

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
            readAll();
            setLayoutEnum(typeEnum.read);
          }}
          className="w-1/6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          모두읽기
        </button>
        <button
          onClick={() => {
            setLayoutEnum(typeEnum.oneRead);
            // readOne(selectId)
            //   .then((item) => {
            //     setFindReadOne(item);
            //     // setOpenOne(true);
            //   })
            //   .catch((error) => console.error(error));
          }}
          className="w-1/6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
        >
          1개 읽기
        </button>
        <button
          onClick={() => {
            deleteOne();
            setLayoutEnum(typeEnum.delete);
          }}
          className="w-1/6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
        >
          삭제
        </button>
        <button
          onClick={() => {
            writeOne();
            setLayoutEnum(typeEnum.write);
          }}
          className="w-1/6 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          추가
        </button>
        <button
          onClick={() => {
            updateOne();
            setLayoutEnum(typeEnum.update);
          }}
          className="w-1/6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition"
        >
          수정
        </button>
      </div>

      {/* enum값이 write 경우, 추가모드 */}
      {layoutEnum === typeEnum.write && (
        <div>
          <h1>write모드</h1>
          {selectedColumn && (<form>
            {selectedColumn.map(column => <>
            <label className="font-medium">
              {column}
            </label>
            <input type="text" className="p-2 border rounded" />
            <button type="submit">제출</button>
            </>)}
          </form>)}

        </div>
      )}

      {/* enum값이 read 경우, findAll모드 */}
      {layoutEnum === typeEnum.read && (
        <div>
          {readData && readData.length === 0 ?
            <div>데이터가 없습니다. </div>
            : <><h3
              className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md"
            >
              {tableInfo.tableName}:{tableInfo.tableEng}</h3>

              {/* 컬럼 헤더 */}
              <div className="flex font-semibold border-b pb-1 mb-2">
                {selectedColumn && selectedColumn.map((key) => (
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

      {/* enum값이 oneRead 경우, oneRead모드 */}
      {layoutEnum === typeEnum.oneRead && (
        <div className="p-4 space-y-4">
          <div className="flex space-x-2">
            {selectedColumn && (
              <>
                <h1 className="text-xl font-semibold">
                  {tableInfo.tableName}:{tableInfo.tableEng}
                </h1>
                <select name="columns" className="p-2 border rounded">
                  <option value="none">선택해주세요</option>
                  {selectedColumn.map(column => (<option key={column} value={column}>{column}</option>))}
                </select>
              </>)}
            <input
              type="text"
              className="flex-grow p-2 border rounded"
            />
            <button
              className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                readOne(selectId)
                  .then((item) => {
                    if (item)
                      setFindReadOne(item);
                  })
              }}
            >
              조회
            </button>

          </div>

          {findReadOne ? (<p className="text-sm text-gray-600">텍스트 : {JSON.stringify(findReadOne)} </p>) : <></>}
        </div>
      )}

      {/* enum값이 delete 경우, 삭제모드 */}
      {layoutEnum === typeEnum.delete && (
        <div>
          <h1>delete모드</h1>
        </div>
      )}

      {/* enum값이 update 경우, 업데이트모드 */}
      {layoutEnum === typeEnum.update && (
        <div>
          <h1>update모드</h1>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
