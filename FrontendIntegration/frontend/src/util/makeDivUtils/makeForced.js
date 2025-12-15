// util/makeDivUtils/makeForced.js
import { makeCommonHeading } from "./makeCommonText";
import { makeCommonLabel, makeCommonImage } from "./makeCommonMedia";

/* =========================
   Main Section (Hero)
========================= */
const makeMainSection = (title = [], description = "", imageUrl = "") => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0b2a3d]">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-[280px] object-cover opacity-80"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />

        {/* title */}
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          {Array.isArray(title) && (
            <>
              {makeCommonHeading(
                title[0],
                2,
                "inline-block bg-blue-600 px-4 py-1 text-white w-fit"
              )}
              {makeCommonHeading(title[1], 3, "text-yellow-300 mt-3")}
            </>
          )}
        </div>
      </div>

      {/* description */}
      <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed">
        {makeCommonLabel(description)}
      </div>
    </div>
  );
};

/* =========================
   Timeline Item
========================= */
const makeTimelineItem = (item = {}, align = "left") => {
  const { date, description, imageUrl } = item;

  return (
    <div
      className={`inline-block bg-white shadow-md rounded-lg p-4 max-w-md ${
        align === "left" ? "text-right" : "text-left"
      }`}
    >
      {makeCommonLabel(date, "text-blue-600 font-semibold")}
      {makeCommonHeading(description, 3, "mt-2 text-gray-800")}
      {imageUrl && makeCommonImage(imageUrl, "", "mt-3 rounded")}
    </div>
  );
};

/* =========================
   Timeline
========================= */
const makeTimeLine = (leftRow = [], rightRow = []) => {
  const length = Math.max(leftRow.length, rightRow.length);

  return (
    <div className="relative mt-32">
      {/* center line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[4px] h-full bg-blue-700 rounded" />

      <div className="flex flex-col gap-32">
        {Array.from({ length }, (_, idx) => (
          <div key={idx} className="relative grid grid-cols-2 gap-16">
            {/* left */}
            <div className="flex justify-end pr-10">
              {leftRow[idx] && makeTimelineItem(leftRow[idx], "left")}
            </div>

            {/* right */}
            <div className="flex justify-start pl-10">
              {rightRow[idx] && makeTimelineItem(rightRow[idx], "right")}
            </div>

            {/* dot */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4">
              <div className="w-4 h-4 bg-blue-700 rounded-full border-4 border-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const makeCampusTableA = (headers = [], rows = [], columns = []) => {
  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="border border-gray-300 p-2 bg-gray-100">
              {h}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rIdx) => (
          <tr key={rIdx}>
            {columns.map((col, cIdx) => {
              const cell = row[col];

              if (typeof cell === "object") {
                if (cell.rowspan === 0 || cell.colspan === 0) return null;

                return (
                  <td
                    key={cIdx}
                    rowSpan={cell.rowspan}
                    colSpan={cell.colspan}
                    className="border border-gray-300 p-2"
                  >
                    {cell.value}
                  </td>
                );
              }

              return (
                <td key={cIdx} className="border border-gray-300 p-2">
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const makeCampusTableB = (
  rows = [],
  columns = [],
  resultRows = [],
  count = 3
) => {
  const tableRows = [];

  rows.forEach((row, idx) => {
    // 일반 row
    tableRows.push(
      <tr key={`row-${idx}`}>
        {columns.map((col, cIdx) => {
          const cell = row[col];

          if (typeof cell === "object") {
            if (cell.rowspan === 0) return null;

            return (
              <td
                key={cIdx}
                rowSpan={cell.rowspan}
                className="border border-gray-300 p-2"
              >
                {cell.value}
              </td>
            );
          }

          return (
            <td key={cIdx} className="border border-gray-300 p-2">
              {cell}
            </td>
          );
        })}
      </tr>
    );

    // 결과 row
    if (idx % count === count - 1 && resultRows.length > 0) {
      const result = resultRows[Math.floor(idx / count)];
      tableRows.push(
        <tr key={`result-${idx}`}>
          <td
            colSpan={columns.length}
            className="border border-gray-300 p-2 bg-gray-50"
          >
            {result?.keyword} / {result?.count}
          </td>
        </tr>
      );
    }
  });

  return (
    <table className="w-full border border-gray-300">
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export { makeMainSection, makeTimeLine, makeCampusTableA, makeCampusTableB };
