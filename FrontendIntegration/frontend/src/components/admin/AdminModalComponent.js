import React from 'react';

const AdminModalComponent = ({
  // 상태 값 (State)
  isModalOpen,
  selectId,
  findData,
  findColumns,
  tableInfo,
  extrahButtonList,
  targetColumn,
  
  // 상태 변경 함수 (Setters)
  setModalOpen,
  setFindData,
  setFindColumns,
  
  // 로직 함수 (Functions)
  selectCheckbox,
  changeSelectId,
  createButton, // 버튼 생성 유틸리티 함수
}) => {

  // 모달이 닫혀있으면 렌더링하지 않음
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 흐린 배경 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={() => setModalOpen(false)}
      ></div>

      {/* 모달 박스 */}
      <div className="relative bg-white rounded-xl p-6 shadow-xl z-50 w-[90%] max-h-[80vh] overflow-y-auto">
        
        {/* 헤더 */}
        <div className="flex items-center justify-between mt-4">
          <h2 className="text-xl font-bold text-center flex-1">
            모달창
          </h2>
        </div>

        {/* 상단 액션 버튼들 */}
        <div className="flex gap-2 justify-center my-4">
          <button
            className="w-[10%] p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => {
              selectCheckbox(selectId);
              setModalOpen(false);
            }}
          >
            선택하기
          </button>
          <button
            className="w-[10%] p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setFindData([])}
          >
            리셋
          </button>
          <button
            className="w-[10%] p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setModalOpen(false)}
          >
            닫기
          </button>
        </div>

        {/* 동적 버튼 리스트 */}
        <div className="flex flex-wrap gap-2 mb-4 justify-end">
          {extrahButtonList
            .filter((btnData) => btnData.tableName === targetColumn)
            .map((btnData, index) => (
              <div key={index} className="flex-1">
                {createButton({
                  label: btnData.label,
                  style: btnData.style,
                  onClick: () => {
                    if (btnData.action) {
                      btnData.action().then((result) => {
                        const data = [];
                        result.forEach((d) => {
                          const temp = {};
                          Object.keys(btnData.columns).forEach((key) => {
                            if (key !== null && d[key] !== null)
                              temp[key] = d[key];
                          });
                          if (Object.keys(temp).length > 0) {
                            data.push(temp);
                          }
                        });
                        setFindColumns(btnData.columns);
                        setFindData(data.filter((item) => item !== null));
                      });
                    }
                  },
                })}
              </div>
            ))}
        </div>

        {/* 데이터 테이블 (데이터가 있을 경우만 표시) */}
        {findData && findData.length > 0 && findColumns && (
          <div>
            {/* 테이블 제목 */}
            <h3 className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">
              {tableInfo?.tableName}:{tableInfo?.tableEng}
            </h3>

            {/* 컬럼 헤더 */}
            <div className="flex font-semibold border-b pb-1 mb-2">
              <div className="flex-none px-2">선택</div>
              {Object.keys(findColumns).map((key) => (
                <div key={key} className="flex-1">
                  {key}:{findColumns[key]}
                </div>
              ))}
            </div>

            {/* 데이터 행 */}
            {findData.map((data, index) => (
              <div key={index} className="flex border-b py-1 items-center">
                <div className="flex-none px-2">
                  <input
                    type="checkbox"
                    onChange={() => changeSelectId(index)}
                    // 필요하다면 checked 속성도 추가 고려
                    // checked={selectId === index} 
                  />
                </div>
                {Object.keys(findColumns).map((key) => (
                  <div key={key} className="flex-1">
                    {data[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModalComponent;