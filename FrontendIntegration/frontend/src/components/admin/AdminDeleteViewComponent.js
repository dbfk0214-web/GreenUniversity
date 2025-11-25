import React from 'react';

const AdminDeleteViewComponent = ({
  tableInfo,
  findReadOne,
  selectedColumn,
  columns,
  createButton,
  typeEnum,
  changeViewMode,
  deleteOne,
}) => {
  return (
    <div>
      <h3>
        {tableInfo?.tableName} : {tableInfo?.tableEng} 삭제 모드
      </h3>
      
      {findReadOne ? (
        // 삭제할 데이터가 있을 경우: 데이터 표시 및 삭제 버튼
        <>
          {/* 컬럼 헤더 */}
          <div className="flex font-semibold border-b pb-1 mb-2">
            {selectedColumn &&
              selectedColumn.map((key) => (
                <div key={key} className="flex-1">
                  {key} : {columns?.[key]}
                </div>
              ))}
          </div>
          
          {/* 삭제 대상 데이터 행 */}
          <div className="flex border-b py-1 items-center">
            {selectedColumn &&
              selectedColumn.map((key) => (
                <div key={key} className="flex-1">
                  {findReadOne[key]}
                </div>
              ))}
          </div>
          
          {/* 삭제 버튼 */}
          <div className="flex justify-center mt-6">
            {createButton({
              label: "진짜삭제",
              enumType: typeEnum?.loading, // typeEnum이 객체임을 가정
              style: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded", // Tailwind CSS 스타일 조정 (삭제는 보통 빨간색)
              onClick: () => {
                changeViewMode(typeEnum?.loading);
                // 기본 키(primaryKey)를 전달하여 삭제 실행
                deleteOne(findReadOne[tableInfo.primaryKey]);
              },
            })}
          </div>
        </>
      ) : (
        // 삭제할 데이터가 없을 경우 (예: 초기 상태 또는 검색 실패 시)
        <div className="text-center p-4 text-gray-500">
            삭제할 데이터를 선택해주세요.
        </div>
      )}
    </div>
  );
};

export default AdminDeleteViewComponent;