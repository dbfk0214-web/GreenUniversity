import React, { useEffect, useState } from 'react';
import sitemap from "../../json/sitemap.json";

const SitemapComponent = () => {
  const [test,setTest] = useState({});
  useEffect(() => {
    setTest(sitemap);
  },[])
  return (
    <div>
      {test ? 
      test.aboutGreen.map((data,idx) => 
        (
          <div key={idx}>{data}</div>
        )
      ) : <></>}
    </div>
  )
}

export default SitemapComponent;
