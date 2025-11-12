import React, { useEffect, useState } from "react";
import dd from "../../json/green_spirit.json";

const GreenVisionComponent = () => {
  const [data, setData] = useState(dd);
  // useEffect(() => {
  //   setData(dd);
  //   console.log(data);
  // }, []);
  // console.log(data);

  const mm = (data) => {
    return (
      <div className="p-4 bg-gray-50">
        {data &&
          data.map((i, idx) => (
            <div key={idx} className="p-2 mb-2 rounded-none">
              {i}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div>
      <div>{data.pageTitle}</div>
      <div>
        {data &&
          data.sections.map((t, tt) => (
            <div key={tt} className="p-2">
              <div>
                <div>{t.title}</div>
                <div>{t.description}</div>
              </div>
            </div>
          ))}
      </div>
      <div>
        {data &&
          data.diagram.items.map((i, idx) => (
            <div key={idx} className="p-4">
              <div>
                <div>{i.label}</div>
                <div>{i.value}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GreenVisionComponent;
