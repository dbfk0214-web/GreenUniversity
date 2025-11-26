export const GradeDef = {
    key: "grade",
    primaryKey: "gradeId",
    tableEng: "Grade",
    tableName: "성적",
    allColumns: {
        columns: {
            gradeId: "성적아이디",
            gradeValue: "성적값",
            courseName: "강의이름",
            enrollment: "수강내역",
        },
        createColumns: {
            gradeId: "성적아이디",
            gradeValue: "성적값",
            courseName: "강의이름",
            enrollment: "수강내역",
        },
        responseColumns: {
            gradeId: "성적아이디",
            gradeValue: "성적값",
            courseName: "강의이름",
            enrollment: "수강내역",
        },
        updateColumns: {
            gradeId: "성적아이디",
            gradeValue: "성적값",
            courseName: "강의이름",
            enrollment: "수강내역",
        },
    },

    excludeList: ["enrollment", "courseName"],
    color: "bg-amber-100",
}