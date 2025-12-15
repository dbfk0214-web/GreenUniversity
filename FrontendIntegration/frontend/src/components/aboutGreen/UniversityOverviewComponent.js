import React from "react";
import GreenStauts from "../../json/aboutGreen/green_status.json";
import {
  makeCampusTableA,
  makeCampusTableB,
} from "../../util/makeDivUtils/makeForced";
import { makeCommonTable } from "../../util/makeDivUtils/makeCommonTable";
import {
  makeCommonComment,
  makeCommonTitle,
} from "../../util/makeDivUtils/makeCommonText";

const UniversityOverviewComponent = () => {
  if (!GreenStauts) return null;

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20">
        {/* 1. 대학구성 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("대학구성")}</div>
          <div className="overflow-x-auto">
            {makeCampusTableA(
              GreenStauts.대학구성.headers,
              GreenStauts.대학구성.data,
              GreenStauts.대학구성.columns
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.대학구성.comment)}
          </div>
        </section>

        {/* 2. 재학생 수 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">
            {makeCommonTitle("재학생 수 (외국인 재학생수)")}
          </div>
          <div className="overflow-x-auto">
            {makeCampusTableB(
              GreenStauts.재학생수.data,
              GreenStauts.재학생수.columns,
              GreenStauts.재학생수.resultData,
              3
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.재학생수.comment)}
          </div>
        </section>

        {/* 3. 국제교류현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("국제교류현황")}</div>
          <div className="overflow-x-auto">
            {makeCampusTableA(
              GreenStauts.국제교류현황.headers,
              GreenStauts.국제교류현황.data,
              GreenStauts.국제교류현황.columns
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.국제교류현황.comment)}
          </div>
        </section>

        {/* 4. 교원현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">
            {makeCommonTitle("교원현황 (외국인 교원수)")}
          </div>
          <div className="overflow-x-auto">
            {makeCampusTableB(
              GreenStauts.교원현황.data,
              GreenStauts.교원현황.columns,
              GreenStauts.교원현황.resultData,
              6
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.교원현황.comment)}
          </div>
        </section>

        {/* 5. 직원현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("직원현황")}</div>
          <div className="overflow-x-auto">
            {makeCampusTableA(
              GreenStauts.직원현황.headers,
              GreenStauts.직원현황.data,
              GreenStauts.직원현황.columns
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.직원현황.comment)}
          </div>
        </section>

        {/* 6. 부설연구기관 현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">
            {makeCommonTitle("부설연구기관 현황")}
          </div>
          <div className="overflow-x-auto">
            {makeCampusTableB(
              GreenStauts.부설연구기관현황.data,
              GreenStauts.부설연구기관현황.columns,
              GreenStauts.부설연구기관현황.resultData,
              3
            )}
          </div>
        </section>

        {/* 7. 장학금현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("장학금현황")}</div>
          <div className="overflow-x-auto">
            {makeCommonTable(
              [],
              GreenStauts.장학금현황.data,
              GreenStauts.장학금현황.columns
            )}
          </div>
          <div className="text-sm text-gray-500">
            {makeCommonComment(GreenStauts.장학금현황.comment)}
          </div>
        </section>

        {/* 8. 개설 강좌수 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">
            {makeCommonTitle("개설 강좌수 (2025-1학기, 정규과목)")}
          </div>
          <div className="overflow-x-auto">
            {makeCampusTableB(
              GreenStauts.개설강좌수.data,
              GreenStauts.개설강좌수.columns,
              [],
              999
            )}
          </div>
        </section>

        {/* 9. 기숙사 현황 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("기숙사 현황")}</div>
          <div className="overflow-x-auto">
            {makeCommonTable(
              GreenStauts.기숙사현황.headers,
              GreenStauts.기숙사현황.data,
              GreenStauts.기숙사현황.columns
            )}
          </div>
        </section>

        {/* 10. 학위수여자수 */}
        <section className="bg-white rounded-xl shadow-sm p-8 space-y-6">
          <div className="border-b pb-4">{makeCommonTitle("학위수여자수")}</div>
          <div className="overflow-x-auto">
            {makeCampusTableB(
              GreenStauts.학위수여자수.data,
              GreenStauts.학위수여자수.columns,
              GreenStauts.학위수여자수.resultData,
              5
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UniversityOverviewComponent;
