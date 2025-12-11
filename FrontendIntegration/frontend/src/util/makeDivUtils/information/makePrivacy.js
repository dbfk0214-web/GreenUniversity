import { makeDefaultHeader } from "../aboutGreen/makeGreenCommon";
import { makeDefaultNumberComment } from "../makeCommonMedia";
import { makeDefaultTableBody } from "../makeCommonTable";
import { makeDefaultNumberCommentB } from "./makeInformationCommon";

const makePrivacyTableA = (
  titles = [],
  headers = [],
  rows = [],
  columns = [],
  idx = 0
) => {
  return (
    <>
      <div>
        {/* 타이틀 */}
        <div>{makeDefaultNumberComment(titles, idx)}</div>
        <table>
          {/* 테이블 Head */}
          <thead>{makeDefaultHeader(headers)}</thead>
          {/* 테이블 Body */}
          <tbody>{makeDefaultTableBody(rows, columns)}</tbody>
        </table>
      </div>
    </>
  );
};

const makePrivacyTable = (
  titles = [],
  headers = [],
  rows = [],
  columns = [],
  idx = 0
) => {
  return (
    <>
      <div>
        {/* 타이틀 */}
        <div>{makeDefaultNumberCommentB(titles, idx)}</div>
        <table>
          {/* 테이블 Head */}
          <thead>{makeDefaultHeader(headers)}</thead>
          {/* 테이블 Body */}
          <tbody>{makeDefaultTableBody(rows, columns)}</tbody>
        </table>
      </div>
    </>
  );
};

export { makePrivacyTableA, makePrivacyTable };
