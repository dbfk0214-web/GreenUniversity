import React, { use, useEffect, useState } from "react";
import Sitemap from "../../json/information/sitemap.json";
import { jsonToDiv } from "../../util/makeComponentUtil";
import { makeSitemap } from "../../util/makeDivUtils/information/makeSitemap";

const SitemapComponent = () => {
  const columns = [
    "aboutGreen",
    "campusLife",
    "admissionEducation",
    "academicSupport",
    "information",
    "extraServices",
  ];

  return (
    <div>
      <h1>사이트맵</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {Sitemap &&
          columns.map((column) => (
            <div style={{ border: "1px solid #ccc" }}>
              {makeSitemap(Sitemap[column].items, Sitemap[column].title)}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SitemapComponent;
