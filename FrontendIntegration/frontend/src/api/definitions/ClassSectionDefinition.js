export const ClassSectionDef = {
  key: "section",
  primaryKey: "sectionId",
  tableEng: "ClassSection",
  tableName: "분반내역",
  allColumns: {
    Columns: {
      sectionId: "분반 내역 아이디",
      sectionName: "분반명",
      maxCapacity: "정원",
      currentCount: "현재 수강 신청 인원수",
    },
    createColumns: {
      offeringId: "개설강의 id",
      sectionName: "분반명",
      maxCapacity: "정원",
    },
    responseColumns: {
      sectionId: "분반 내역 아이디",
      sectionName: "분반명",
      maxCapacity: "정원",
      availableSeats: "남은정원",
      isFull: "마감여부",
      enrollmentRate: "수강률",
      currentCount: "현재 수강 신청 인원수",
      offeringId: "개설강의 id",
      courseName: "강의명",
      year: "개설년도",
      semester: "개설학기",
      professorName: "담당교수",
    },
    updateColumns: {
      offeringId: "개설강의 id",
      sectionName: "분반명",
      maxCapacity: "정원",
    },
  },

  excludeList: ["courseOffering"],
  color: "bg-pupple-100",
};
