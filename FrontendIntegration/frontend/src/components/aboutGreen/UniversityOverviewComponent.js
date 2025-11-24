import React, { useEffect, useState } from "react";
import bob from "../../json/aboutGreen/green_status.json";

const UniversityOverviewComponent = () => {
  const [lunch, setLunch] = useState(bob);
  useEffect(() => {
    setLunch(bob);
    console.log(bob);
  }, []);

  //   const test = (data, keys) => {
  //   return (
  //     <div>
  //       {keys.map((key, index) => {
  //         const value = data[key];
  //         return (
  //           <div key={index}>
  //             {key} : {value}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
  // };
  const test = (x, vvv) => {
    return (
      <>
        {vvv.map((i) => {
          const value = x[i];

          // 배열 처리
          if (Array.isArray(value)) {
            return (
              <div key={i}>
                {value.map((item, idx) =>
                  typeof item === "object" && item !== null ? (
                    <div key={`${i}-${idx}`}>
                      {test(item, Object.keys(item))}
                    </div>
                  ) : (
                    <div key={`${i}-${idx}`} className="p-4">
                      {String(item)}
                    </div>
                  )
                )}
              </div>
            );
          }

          // 객체 처리 (중첩된 경우)
          if (value && typeof value === "object") {
            return <div key={i}>{test(value, Object.keys(value))}</div>;
          }

          // 기본 값 처리
          return (
            <div key={i} className="p-4">
              {String(value)}
            </div>
          );
        })}
      </>
    );
  };

  const rr = (data2) => {
    return (
      <div>
        {data2.map((i, idx) => (
          <div key={idx} className="p-2">
            {i}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="p-4">
      <div>{lunch.pageTitle}</div>
      <div>{lunch.lastUpdated}</div>

      {lunch &&
        lunch.sections.map((i, idx) => (
          <div key={idx} className="p-2">
            {i.sectionTitle}

            <div>
              {i.headers &&
                i.headers.map((t, tx) => (
                  <div key={tx} className="p-3">
                    {t}
                  </div>
                ))}
            </div>

            <div>
              {i.data &&
                i.data.map((x, xt) => {
                  var vvv = Object.keys(x);

                  return test(x, vvv);
                  // <div>
                  //   {vvv.map((key) =>
                  //     !Array.isArray(x[key]) ? (
                  //       <div key={xt} className="p-4">
                  //         <div>{x[key]}</div>
                  //       </div>
                  //     ) : (
                  //       <>{Array.isArray(x[key])}</>
                  //     )
                  //   )}
                  // </div>
                })}
            </div>
          </div>
        ))}
    </div>
  );
};

export default UniversityOverviewComponent;

// {a? (B) : ()<></>}
{
  /* <div>{x.campus}</div>
                      <div>{x.subCampus}</div>
                      <div>{x.details}</div>
                      <div>{x.address}</div>
                      <div>{x.master}</div>
                      <div>{x.doctor}</div>
                      <div>{x.total}</div>
                      <div>{x.bachelor}</div>
                      <div>{x.hosting}</div>
                      <div>{x.dispatch}</div>
                      <div>{x.category}</div> */
}
