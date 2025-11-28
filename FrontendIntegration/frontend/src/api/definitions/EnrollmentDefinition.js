export const EnrollmentDef = {
    key: "enrollment",
    primaryKey: "enrollmentId",
    tableEng: "Enrollment",
    tableName: "수강신청내역",
    allColumns: {
        columns: {
            enrollmentId: "수강 내역 아이디",
            enrollDate: "강의 개설 날짜",
            courseOffering: "강의 정보",
            user: "유저",
            grades: "성적들",
            attendances: "출석들",
            reviews: "리뷰들",
        },
        createColumns: {
            enrollDate: "강의 개설 날짜",
            offeringId: "강의 개설 id",
            userId: "유저 식별 코드",
        },
        responseColumns: {
            enrollmentId: "수강 내역 아이디",
            enrollDate: "강의 개설 날짜",
            offeringId: "강의 개설 아이디",
            userId : "유저 아이디"
        },
        updateColumns: {
            enrollmentId: "수강 내역 아이디",
            enrollDate: "강의 개설 날짜",
            offeringId: "강의 개설 아이디",
            userId : "유저 아이디"
        },
    },

    excludeList: ["courseOffering", "user", "grades", "attendances", "reviews"],
    color: "bg-grey-600",
}