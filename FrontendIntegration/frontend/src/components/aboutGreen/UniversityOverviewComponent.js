import React, { useEffect, useState } from "react";
import GreenStauts from "../../json/aboutGreen/green_status.json";
import {
  makeCampusTableA,
  makeCampusTableB,
} from "../../util/makeDivUtils/aboutGreen/makeGreenOverview";
import {
  makeDefaultTableA,
  makeDefaultComment,
  makeDefaultTableB,
} from "../../util/makeDivUtils/aboutGreen/makeGreenCommon";
import { makeSectionTitle } from "../../util/makeDivUtils/makeCommon";

const UniversityOverviewComponent = () => {
  return (
    <div>
      <div>
        {GreenStauts && (
          <>
            {/* 첫번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("대학구성")}</div>
              <div>
                {makeCampusTableA(
                  GreenStauts.대학구성.headers,
                  GreenStauts.대학구성.data,
                  GreenStauts.대학구성.columns
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.대학구성.comment)}</div>
            </div>

            <br />
            {/* 두번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("재학생 수 (외국인 재학생수)")}</div>
              <div>
                {makeCampusTableB(
                  GreenStauts.재학생수.data,
                  GreenStauts.재학생수.columns,
                  GreenStauts.재학생수.resultData,
                  3
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.재학생수.comment)}</div>
            </div>

            <br />
            {/* 세번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("국제교류현황")}</div>
              <div>
                {makeDefaultTableA(
                  GreenStauts.국제교류현황.headers,
                  GreenStauts.국제교류현황.data,
                  GreenStauts.국제교류현황.columns
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.국제교류현황.comment)}</div>
            </div>

            <br />
            {/* 네번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("교원현황 (외국인 교원수)")}</div>
              <div>
                {makeCampusTableB(
                  GreenStauts.교원현황.data,
                  GreenStauts.교원현황.columns,
                  GreenStauts.교원현황.resultData,
                  6
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.교원현황.comment)}</div>
            </div>

            <br />
            {/* 다섯번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("직원현황")}</div>
              <div>
                {makeDefaultTableB(
                  GreenStauts.직원현황.headers,
                  GreenStauts.직원현황.data,
                  GreenStauts.직원현황.columns
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.직원현황.comment)}</div>
            </div>

            <br />
            {/* 여섯번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("부설연구기관 현황")}</div>
              <div>
                {makeCampusTableB(
                  GreenStauts.부설연구기관현황.data,
                  GreenStauts.부설연구기관현황.columns,
                  GreenStauts.부설연구기관현황.resultData,
                  4 - 1 // 칼럼과 합쳐져야 하므로 1을 뺌
                )}
              </div>
            </div>

            <br />
            {/* 일곱번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("장학금현황")}</div>
              <div>
                {makeDefaultTableA(
                  [],
                  GreenStauts.장학금현황.data,
                  GreenStauts.장학금현황.columns
                )}
              </div>
              <div>{makeDefaultComment(GreenStauts.장학금현황.comment)}</div>
            </div>

            <br />
            {/* 여덟번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("개설 강좌수(2025-1학기, 정규과목)")}</div>
              <div>
                {makeCampusTableB(
                  GreenStauts.개설강좌수.data,
                  GreenStauts.개설강좌수.columns,
                  [],
                  999 // 실행이 안되도록 큰 값을 부여
                )}
              </div>
            </div>

            <br />
            {/* 아홉번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("기숙사 현황")}</div>
              <div>
                {makeDefaultTableA(
                  GreenStauts.기숙사현황.headers,
                  GreenStauts.기숙사현황.data,
                  GreenStauts.기숙사현황.columns
                )}
              </div>
            </div>

            <br />
            {/* 열번째 표 생성 */}
            <div>
              <div>{makeSectionTitle("개설 강좌수(2025-1학기, 정규과목)")}</div>
              <div>
                {makeCampusTableB(
                  GreenStauts.학위수여자수.data,
                  GreenStauts.학위수여자수.columns,
                  GreenStauts.학위수여자수.resultData,
                  5 // 실행이 안되도록 큰 값을 부여
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UniversityOverviewComponent;
