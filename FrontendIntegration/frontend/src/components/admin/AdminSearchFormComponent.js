import React from 'react'

const AdminSearchFormComponent = ({
  onSubmit,
  selectedColumn,
  tableInfo
}) => {
  return (
    <div>
      <h1>search모드</h1>
      {selectedColumn && (
        <form onSubmit={onSubmit}>
          <h1 className="text-xl font-semibold">
            {tableInfo?.tableName}:{tableInfo?.tableEng}
          </h1>
          <select name="selectKeyword" className="p-2 border rounded" required>
            <option value="">선택해주세요</option>
            {selectedColumn.map(column => (
              <option
                key={column}
                value={column}>
                {column}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="searchText"
            className="flex-grow p-2 border rounded"
            required
          />
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            제출
          </button>
        </form>
      )}
    </div>
  )
}

export default AdminSearchFormComponent