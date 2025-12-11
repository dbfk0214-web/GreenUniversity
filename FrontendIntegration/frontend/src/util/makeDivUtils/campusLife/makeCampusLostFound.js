import { makeDefaultTableBody } from "../makeCommonTable";

const makeLostFoundTable = (rows = [], columns = []) => {
  return (
    <>
      <table>
        <tbody>{makeDefaultTableBody(rows, columns)}</tbody>
      </table>
    </>
  );
};

export { makeLostFoundTable };
