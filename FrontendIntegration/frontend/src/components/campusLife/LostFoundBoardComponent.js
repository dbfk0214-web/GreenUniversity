import React from "react";
import LostFoundBoard from "../../json/campusLife/lost_found_board.json";
import { recursiveRender } from "../../util/makeComponentUtil";

const LostFoundBoardComponent = () => {
  return (
    <div>
      LostFoundBoardComponent
      {LostFoundBoard && recursiveRender(LostFoundBoard)}
    </div>
  );
};

export default LostFoundBoardComponent;
