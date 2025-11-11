import React, { use, useEffect, useState } from 'react';
import sitemap from "../../json/sitemap.json";

const SitemapComponent = () => {
  const [test,setTest] = useState(sitemap);
  const [keysData, setKeysData] = useState([]);
  useEffect(() => {
    setTest(sitemap);
    console.log(test);
    setKeysData(Object.keys(sitemap));
  },[])

const makeDiv = (data) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      {data?.map((da, idx) => (
        <div
          key={idx}
          className="p-2 mb-2 bg-white rounded hover:bg-gray-100 shadow-sm"
        >
          {da}
        </div>
      ))}
    </div>
  );
};


  return (
    <div>
      dd
      {keysData && keysData.map(key => (
        <div>
        {test[key]?.items?.map((item, idx) => (
        <div key={idx}>{item}
         <div>{item.title}
              {makeDiv(test[key]?.items)}
            </div>
            </div>
      ))}</div>
  
      ))}
      
    </div>)
}

export default SitemapComponent;
