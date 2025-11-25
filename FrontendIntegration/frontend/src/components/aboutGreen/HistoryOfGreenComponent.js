import React, { useEffect, useState } from "react";
import his from "../../json/aboutGreen/green_history.json";

const HistoryOfGreenComponent = () => {
  const [data, setData] = useState(his);
  // const rr = { timeline: [leftColumn, rightColumn] };
  // const bbb = (a, b) => {
  //   return data[a][b];
  // };

  const star = (test) => {
    return (
      <div className="p-4 m-2 bg-slate-200">
        {test &&
          test.map((i, idx) => (
            <div key={idx} className="p-2">
              {i}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <div>{data.pageTitle}</div>
      <div>{data.mainSection.title}</div>
      <div>{data.mainSection.description}</div>
      <div>{data.mainSection.imageUrl}</div>
      <div>
        {data &&
          data.timeline.leftColumn.map((i, idx) => (
            <div key={idx} className="p-2">
              <div>
                <div>{i.date}</div>
                <div>{i.description}</div>
                <div>{i.imageUrl}</div>
              </div>
            </div>
          ))}
      </div>
      <div>
        {data &&
          data.timeline.rightColumn.map((i, idx) => (
            <div key={idx} className="p-2">
              <div>
                <div>{i.date}</div>
                <div>{i.description}</div>
                <div>{i.imageUrl}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HistoryOfGreenComponent;
