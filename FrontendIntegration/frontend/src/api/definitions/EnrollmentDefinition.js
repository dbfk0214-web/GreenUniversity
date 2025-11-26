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
            userId: "유저 식별 코드",
            offeringId: "강의 개설 id",
            enrollDate: "강의 개설 날짜",
        },
        responseColumns: {
            enrollmentId: "수강 내역 아이디",
            enrollDate: "강의 개설 날짜",
            userId: "유저식별ID",
        },
        updateColumns: {
            enrollDate: "해당 날짜"
        },
    },

    excludeList: ["courseOffering", "user", "grades", "attendances", "reviews"],
    color: "bg-grey-600",
}