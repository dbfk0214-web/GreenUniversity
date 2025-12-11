import { makeLostFoundTable } from "../campusLife/makeCampusLostFound";
import { makeAccordionUI, makeDefaultTabA } from "../makeCommon";

const makeAcodignTable = (tabs = [], rows = [], columns = []) => {
  return (
    <>
      <div>{makeDefaultTabA(tabs)}</div>
      <div>
        {rows.map((row) => makeAccordionUI(row, columns, row.comments))}
      </div>
    </>
  );
};

export { makeAcodignTable };
