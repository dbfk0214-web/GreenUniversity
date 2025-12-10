import { makeCampusTableA } from "../aboutGreen/makeGreenOverview";
import {
  makeDefaultButton,
  makeDefaultHeader,
  makeDefaultList,
  makeDefaultTableBody,
  makeH2Text,
} from "../makeCommon";

const makeGuideSection = (title, descriptions = [], label) => {
  return (
    <>
      <div>{title && makeH2Text(title)}</div>
      <div>{descriptions && makeDefaultList(descriptions)}</div>
      <div>{label && makeDefaultButton(label)}</div>
    </>
  );
};

const makeAcademicTableA = (rows = [], columns = []) => {
  return (
    <>
      <div>
        {makeDefaultHeader(columns)}
        {makeDefaultTableBody(rows, columns)}
      </div>
    </>
  );
};

const makeAcademicTableB = (headers = [], rows = [], columns = []) => {
  return <>{makeCampusTableA(headers, rows, columns)}</>;
};

export { makeGuideSection, makeAcademicTableA, makeAcademicTableB };
