import React from "react";
import LostFoundBoard from "../../json/campusLife/lost_found_board.json";
import { makeLostFoundTable } from "../../util/makeDivUtils/campusLife/makeCampusLostFound";
import { makeDefaultTabA } from "../../util/makeDivUtils/makeCommonLayout";

const LostFoundBoardComponent = () => {
  const columns = ["id", "title", "date", "commentCount", "location"];

  return (
    <div>
      <div>{makeDefaultTabA(["전체보기", "분실", "습득"])}</div>
      <div>{makeLostFoundTable(LostFoundBoard, columns)}</div>
    </div>
  );
};

export default LostFoundBoardComponent;
