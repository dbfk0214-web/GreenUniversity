import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { typeEnum } from "../api/commonApi";
import AdminSelectedContext from "../components/admin/AdminSelectContext";
import { createButton } from "../util/button";

const AdminLayout = ({ config }) => {
  // 데이터 가져오기
  const { tableInfo, columns, funcs, formData, type, buttonDataList } = config;
  const { readAll, readOne, writeOne, deleteOne, updateOne } = funcs;

  // 리덕스
  const { selectId, setSelectId } = useContext(AdminSelectedContext);

  // useState 사용
  const [readData, setReadData] = useState([]);
  const [findReadOne, setFindReadOne] = useState({});
  const [form, setForm] = useState(formData || {});

  // 갱신용 useState
  const [layoutEnum, setLayoutEnum] = useState(type || null);
  const [selectedColumn, setSelectedColumn] = useState([]);

  // 출력될 버튼 모음
  const [buttons, setButton] = useState([]);

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
    // 버튼 생성
    if (buttonDataList && buttonDataList.length > 0) {
      for (var buttonData of buttonDataList) {
        const { label, style, action, enumType } = buttonData;

        // 불가피하게 action이 없는 경우를 대비합니다.
        setButton(prev => [
          ...prev
          , createButton({
            label,
            style,
            onClick: () => {
              setLayoutEnum(enumType);
              if (action) action();
            }
          })]);
      }
    }
  }, []);


  useEffect(() => {
    // 실행 조건
    if (!selectId) return;

    console.log(layoutEnum);
    if (layoutEnum === typeEnum.readOne) {
      // 데이터가 리스트 형태여서 0번을 가져오기로함

      readOne(selectId)
        .then((item) => {
          if (item && item.length > 0) {
            setFindReadOne(item[0]);
          } else {
            setFindReadOne(item);
          }
        })
    }
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

      <div className="flex flex-wrap mb-6">
        {buttons.map((Component, index, arr) => (
          <div key={index} className={`flex justify-center flex-1 basis-1/${arr.length}`}>
            {Component}
          </div>
        ))}
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
            : <>
              <h3
                className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">
                {tableInfo.tableName}:{tableInfo.tableEng}</h3>

              {/* 컬럼 헤더 */}
              <div className="flex font-semibold border-b pb-1 mb-2">
                {selectedColumn && selectedColumn.map((key) => (
                  <div key={key} className="flex-1">{key}:{columns[key]}</div>
                ))}
              </div>

              {/* 
              데이터 목록 
              keys[0]번이 id키라는 가정하에 진행됨. 추후 작업 필요함
              */}

              {typeof readData === "object" && readData.map((data, index) => {
                var keys = Object.keys(columns);
                var mainKey = keys[0];
                return (<div key={index} className="flex border-b py-1">
                  {keys.map((key) => (
                    <div key={key} className="flex-1"
                      onClick={() => {
                        setLayoutEnum(typeEnum.readOne);
                        setSelectId(data[mainKey]);
                      }}
                    >{data[key]}</div>
                  ))}
                </div>)
              }
              )}</>}
        </div>
      )}

      {/* enum값이 readone 경우, 하나 읽기 모드 */}
      {layoutEnum === typeEnum.readOne && (
        <div>
          <h3 className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">{tableInfo.tableName}:{tableInfo.tableEng}</h3>
          {findReadOne &&
            <div>
              {/* 컬럼 헤더 */}
              <div className="flex font-semibold border-b pb-1 mb-2">
                {/* 타이틀 */}
                {selectedColumn && selectedColumn.map((key) => (
                  <div key={key} className="flex-1">{key}:{columns[key]}</div>
                ))
                }
              </div>
              {/* 내용 */}
              <div className="flex border-b py-1 items-center">
                {selectedColumn.map(key => (
                  <div key={key} className="flex-1">
                    {findReadOne[key]}
                  </div>
                ))}

                <div className="flex gap-2 ms-auto">
                  {createButton({
                    label: "수정하기",
                    enumType: typeEnum.update,
                    style: "bg-yellow-400 hover:bg-yellow-500",
                    onClick: () => {
                      setLayoutEnum(typeEnum.update);
                    }
                  })}
                  {createButton({
                    label: "삭제하기",
                    enumType: typeEnum.delete,
                    style: "bg-red-300 hover:bg-red-700",
                    onClick: () => {
                      setLayoutEnum(typeEnum.delete);
                    }
                  })}
                </div>
              </div>
            </div>
          }
        </div>
      )
      }

      {/* enum값이 search 경우, search모드 */}
      {
        layoutEnum === typeEnum.search && (
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
                  console.log("조회요청");
                }}
              >
                조회
              </button>

            </div>

            {findReadOne ? (<p className="text-sm text-gray-600">텍스트 : {JSON.stringify(findReadOne)} </p>) : <></>}
          </div>
        )
      }

      {/* enum값이 delete 경우, 삭제모드 */}
      {
        layoutEnum === typeEnum.delete && (
          <div>
            <h3>{tableInfo.tableName} : {tableInfo.tableEng} 삭제 모드</h3>
            <div>
              {findReadOne ?
                // 삭제할 데이터가 있을 경우
                (<>
                  <div className="flex font-semibold border-b pb-1 mb-2">
                    {selectedColumn && selectedColumn.map((key) => (
                      <div key={key} className="flex-1">{key} : {columns[key]}</div>
                    ))}
                  </div>
                  <div className="flex border-b py-1 items-center">
                    {selectedColumn.map(key => (
                      <div key={key} className="flex-1">{findReadOne[key]}</div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    {createButton({
                      label: "진짜삭제",
                      enumType: typeEnum.loading,
                      style: "bg-green-300 hover:bg-green-500",
                      onClick: () => {
                        setLayoutEnum(typeEnum.loading);
                        deleteOne(findReadOne);
                      }
                    })}
                  </div>

                </>) :
                // 삭제할 데이터가 없을 경우
                <></>}
            </div>
          </div>
        )
      }

      {/* enum값이 update 경우, 업데이트모드 */}
      {layoutEnum === typeEnum.update && (
        <div>
          <h1>update모드</h1>
          {selectedColumn && findReadOne && (
            <form>
              {selectedColumn.map((column, index) => (
                <div key={column} className="mb-4">
                  <label className="font-medium block mb-1">
                    {column}
                  </label>
                  <input
                    type="text"
                    className="p-2 border rounded w-full"
                    defaultValue={findReadOne[column]}
                    readOnly={index === 0}
                  />
                </div>
              ))}
              <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                제출
              </button>
            </form>
          )}
        </div>
      )}
    </div >
  );
};

export default AdminLayout;
