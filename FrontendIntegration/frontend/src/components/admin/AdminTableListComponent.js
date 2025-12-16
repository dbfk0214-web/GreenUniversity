import React from "react";
import { typeEnum } from "../../api/commonApi";
import { createButton } from "../../util/button";

const AdminTableListComponent = ({
  tableInfo,
  columns,
  selectedColumn,
  readData,
  changeViewMode,
  changeSelectId,
  primaryKey,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-3xl font-bold mb-4 p-4 bg-blue-100 rounded-md shadow-md">
        {tableInfo.tableName}:{tableInfo.tableEng}
      </h3>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[1400px] w-full table-fixed border-collapse">
          {/* ===== HEADER ===== */}
          <thead>
            <tr className="bg-gray-100 border-b">
              {selectedColumn.map((key) => (
                <th
                  key={key}
                  className="px-3 py-2 text-sm font-semibold text-left
                             whitespace-nowrap overflow-hidden text-ellipsis"
                  title={`${key}: ${columns[key]}`}
                >
                  <span className="font-bold">{key}</span>
                  <span className="text-gray-500 ml-1">({columns[key]})</span>
                </th>
              ))}
              <th className="w-28 px-3 py-2"></th>
            </tr>
          </thead>

          {/* ===== BODY ===== */}
          <tbody>
            {Array.isArray(readData) &&
              readData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition">
                  {selectedColumn.map((key) => (
                    <td
                      key={key}
                      className="px-3 py-2 text-sm
                                 whitespace-nowrap overflow-hidden text-ellipsis"
                      title={String(row[key] ?? "")}
                    >
                      {row[key]}
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    {createButton({
                      label: "한건조회",
                      style: "bg-red-300 hover:bg-red-700",
                      size: "100%",
                      onClick: () => {
                        changeViewMode(typeEnum.readOne);
                        changeSelectId(row[primaryKey]);
                      },
                    })}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTableListComponent;
