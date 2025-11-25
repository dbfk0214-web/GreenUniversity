import React from 'react';

const AdminDetailViewComponent = ({
  tableInfo,
  findReadOne,
  selectedColumn,
  columns,
  createButton,
  typeEnum,
  changeViewMode,
}) => {
  return (
    <div>
      {/* 테이블 제목 */}
      <h3 className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">
        {tableInfo?.tableName}:{tableInfo?.tableEng}
      </h3>
      
      {findReadOne &&
        <div>
          {/* 컬럼 헤더 */}
          <div className="flex font-semibold border-b pb-1 mb-2">
            {/* 타이틀 */}
            {selectedColumn && selectedColumn.map((key) => (
              <div key={key} className="flex-1">
                {key}:{columns?.[key]}
              </div>
            ))}
          </div>
          
          {/* 내용 및 액션 버튼 */}
          <div className="flex border-b py-1 items-center">
            {/* 데이터 표시 */}
            {selectedColumn && selectedColumn.map(key => (
              <div key={key} className="flex-1">
                {findReadOne[key]}
              </div>
            ))}

            {/* 수정/삭제 버튼 그룹 */}
            <div className="flex gap-2 ms-auto">
              {/* 수정 버튼 */}
              {createButton({
                label: "수정하기",
                enumType: typeEnum?.update,
                style: "bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded",
                onClick: () => {
                  changeViewMode(typeEnum?.update);
                }
              })}
              {/* 삭제 버튼 */}
              {createButton({
                label: "삭제하기",
                enumType: typeEnum?.delete,
                style: "bg-red-400 hover:bg-red-600 text-white py-1 px-3 rounded",
                onClick: () => {
                  changeViewMode(typeEnum?.delete);
                }
              })}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default AdminDetailViewComponent;