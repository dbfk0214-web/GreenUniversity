import React from 'react';
import { createButton } from '../../util/button';

const AdminFormComponent = ({
  title,
  showResetButton = false,
  formColumn,
  form,
  formData,
  extrahButtonList = [],
  setForm,
  setSelectData,
  changeHandler,
  onSubmit,
  setModalOpen,
  setTargetColumn,
  readOnlyFirstField = false
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      {showResetButton && createButton({
        label: "리셋",
        style: "bg-yellow-400 hover:bg-yellow-500",
        size: "20%",
        onClick: () => {
          setSelectData({});
          setForm(formData);
        }
      })}

      {formColumn && form ? (
        <form onSubmit={onSubmit} className="space-y-4">
          {formColumn.map((column, index) => {
            const relatedButtons = extrahButtonList.filter(item => item.tableName === column);

            return (
              <div key={index} className="space-y-1">
                {relatedButtons.length > 0 ? (
                  <>
                    {relatedButtons.map((item, btnIndex) => (
                      <div key={btnIndex}>
                        <div className="flex items-center gap-2 mb-1">
                          <label className="font-medium text-gray-700 block">
                            {column}
                          </label>
                          <button
                            type="button"
                            className="p-2 bg-green-300 rounded hover:bg-green-700 text-white flex-1"
                            onClick={() => {
                              setModalOpen(true);
                              setTargetColumn(column);
                            }}
                          >
                            필요한 데이터 불러오기
                          </button>
                        </div>

                        <div className="container mx-auto mt-8 px-4 py-10 bg-purple-300 rounded-lg shadow-md">
                          <div className="space-y-6">
                            {Object.keys(item.columns)
                              .filter(key => key !== item.tableName)
                              .map(key => (
                                <div key={key} className="bg-white rounded-md shadow p-4">
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    {key}
                                  </label>
                                  <input
                                    type="text"
                                    name={key}
                                    value={form?.[item.tableName]?.[key] ?? ""}
                                    readOnly
                                    className="w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                                  />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    <label className="font-medium text-gray-700 block">
                      {column}
                    </label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      name={column}
                      value={form[column] || ""}
                      onChange={changeHandler}
                      readOnly={readOnlyFirstField && index === 0}
                      required
                    />
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            제출
          </button>
        </form>
      ) : (
        <h1>데이터가 없습니다.</h1>
      )}
    </div>
  );
};

export default AdminFormComponent;