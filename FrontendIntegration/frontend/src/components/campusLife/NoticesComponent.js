import React from "react";
import Notice from "../../json/campusLife/notice.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const NoticesComponent = () => {
  return (
    <div>
      NoticeComponent
      {Notice && recursiveRender(Notice)}
    </div>
  );
};

export default NoticesComponent;
