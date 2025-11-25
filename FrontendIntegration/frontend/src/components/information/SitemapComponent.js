import React, { use, useEffect, useState } from 'react';
import sitemap from "../../json/information/sitemap.json";
import { jsonToDiv } from '../../util/makeComponentUtil';

const SitemapComponent = () => {
  return (
    <div>
      dd
      { jsonToDiv(sitemap)}

      {/* 버전 1 */}
      {/* {keysData && keysData.map(key => (
        <div>
          {test[key]?.items?.map((item, idx) => (
            <div key={idx}>{item}
              <div>{item.title}
                {makeDiv(test[key]?.items)}
              </div>
            </div>
          ))}</div>
      ))} */}

    </div>)
}

export default SitemapComponent;
