export const DepartmentDef = {
    key: "department",
    primaryKey: "departmentId",
    tableEng: "Department",
    tableName: "학과",
    allColumns: {
        columns: {
            departmentId: "학과아이디",
            deptName: "학과이름",
            courses: "코스목록",
        },
        createColumns: {
            departmentId: "학과아이디",
            deptName: "학과이름",
            courses: "코스목록",
        },
        responseColumns: {
            departmentId: "학과아이디",
            deptName: "학과이름",
            courses: "코스목록",
        },
        updateColumns: {
            departmentId: "학과아이디",
            deptName: "학과이름",
            courses: "코스목록",
        },
    },
    excludeList: ["courses"],
    color: "bg-yellow-200",
}