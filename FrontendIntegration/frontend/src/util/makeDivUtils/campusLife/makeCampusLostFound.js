import { makeDefaultTableBody } from "../makeCommon";

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
