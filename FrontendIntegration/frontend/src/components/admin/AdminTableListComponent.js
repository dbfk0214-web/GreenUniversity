import React from 'react';
import { typeEnum } from '../../api/commonApi';
import { createButton } from '../../util/button';

const AdminTableListComponent = ({
  tableInfo,
  columns,  // 이제 객체를 받음
  selectedColumn,  // 키 배열
  readData,
  changeViewMode,
  changeSelectId,
  primaryKey
}) => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">
        {tableInfo.tableName}:{tableInfo.tableEng}
      </h3>

      {/* 컬럼 헤더 */}
      <div className="flex font-semibold border-b pb-1 mb-2">
        {selectedColumn && selectedColumn.map((key) => (
          <div key={key} className="flex-1">{key}:{columns[key]}</div>
        ))}
      </div>

      {/* 데이터 목록 */}
      {Array.isArray(readData) && readData.map((data, index) => {
        return (
          <div key={index} className="flex border-b py-1">
            {selectedColumn.map((key) => (  // selectedColumn 사용
              <div key={key} className="flex-1">
                {data[key]}
              </div>
            ))}
            {createButton({
              label: "한건조회",
              style: "bg-red-300 hover:bg-red-700",
              size: "10%",
              onClick: () => {
                changeViewMode(typeEnum.readOne);
                changeSelectId(data[primaryKey]);
                console.log(data[primaryKey]);
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AdminTableListComponent;