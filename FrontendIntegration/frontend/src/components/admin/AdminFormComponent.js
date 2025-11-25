import React from 'react';

const AdminFormComponent = ({
  formColumn, // 키 배열
  form,
  formData, // 컬럼 객체 (한글 라벨용)
  extrahButtonList,
  setForm,
  setSelectData,
  changeHandler,
  onSubmit,
  setModalOpen,
  setTargetColumn,
  title,
  showResetButton,
  readOnlyFirstField
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        {formColumn && formColumn.map((key, index) => {
          const isFirstField = index === 0;
          const shouldBeReadOnly = readOnlyFirstField && isFirstField;

          return (
            <div key={key} className="flex flex-col">
              <label className="font-semibold mb-1">
                {key}: {formData[key]}
              </label>
              <input
                type="text"
                name={key}
                value={form[key] || ''}
                onChange={changeHandler}
                readOnly={shouldBeReadOnly}
                className={`p-2 border rounded ${
                  shouldBeReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
              />
            </div>
          );
        })}

        {/* 모달 버튼들 */}
        {extrahButtonList && extrahButtonList.length > 0 && (
          <div className="space-y-2">
            {extrahButtonList.map((btnData, index) => (
              <button
                key={index}
                type="button"
                className={`w-full p-2 rounded ${btnData.style || 'bg-gray-500 hover:bg-gray-600'} text-white`}
                onClick={() => {
                  setModalOpen(true);
                  setTargetColumn(btnData.tableName);
                }}
              >
                {btnData.label}
              </button>
            ))}
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold"
        >
          제출
        </button>

        {/* 리셋 버튼 (Write 모드에만 표시) */}
        {showResetButton && (
          <button
            type="button"
            onClick={() => {
              setForm({});
              setSelectData({});
            }}
            className="w-full mt-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded font-semibold"
          >
            초기화
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminFormComponent;