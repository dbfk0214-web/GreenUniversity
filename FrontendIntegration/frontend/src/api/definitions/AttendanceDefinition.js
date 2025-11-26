export const AttendanceDef = {
    key: "attendance",
    primaryKey: "attendanceId",
    tableEng: "Attendance",
    tableName: "출석",
    allColumns: {
        columns: {
            attendanceId: "이름",
            localDateTime: "출석일",
            status: "상태",
            enrollment: "수강내역",
        },
        createColumns: {
            attendanceId: "이름",
            localDateTime: "출석일",
            status: "상태",
            enrollment: "수강내역",
        },
        responseColumns: {
            attendanceId: "이름",
            localDateTime: "출석일",
            status: "상태",
            enrollment: "수강내역",
        },
        updateColumns: {
            attendanceId: "이름",
            localDateTime: "출석일",
            status: "상태",
            enrollment: "수강내역",
        },
    },
    excludeList: ["enrollment"],
    color: "bg-gray-100",
}