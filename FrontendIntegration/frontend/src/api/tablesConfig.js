export const tableDefinitions = {
    "attendance": {
        key: "attendance",
        tableEng: "Attendance",
        tableName: "출석",
        columns: {
            attendanceId: "이름",
            localDateTime: "출석일",
            status: "상태",
            enrollment: "수강내역"
        },

        excludeList: ["enrollment"],
        color: "bg-grey-100",
    },
    "board": {
        key: "board",
        tableEng: "Board",
        tableName: "게시판종류",
        columns: {
            boardId: "게시판번호",
            boardName: "게시판종류",
            posts: "게시판글",
        },

        excludeList: ["posts"],
        color: "bg-gray-200",
    },
    "comment": {
        key: "comment",
        tableEng: "Comment",
        tableName: "댓글",
        columns: {
            commentId: "댓글아이디",
            content: "댓글내용",
            createdAt: "일자",
            user: "유저",
            posts: "게시판글",
        },

        excludeList: ["user", "posts"],
        color: "bg-stone-100",
    },
    "course": {
        key: "course",
        tableEng: "Course",
        tableName: "강의종류",
        columns: {
            courseId: "강의과목코드",
            courseName: "과목명",
            description: "강의설명",
            credits: "학점",
            department: "학과",
            offerings: "하위강의들",
        },

        excludeList: ["department", "offerings"],
        color: "bg-neutral-200",
    },
    "courseOffering": {
        key: "courseOffering",
        tableEng: "CourseOffering",
        tableName: "개설강의",
        columns: {
            offeringId: "개설강의코드",
            professorName: "교수이림",
            courseName: "강의이름",
            year: "년도",
            semester: "학기",
            course: "강의정보",
            user: "유저",
            enrollments: "수강내역들",
            timeTables: "시간표들",
        },

        excludeList: ["course", "user", "enrollments", "timeTables"],
        color: "bg-yellow-100",
    },
    "department": {
        key: "department",
        tableEng: "Department",
        tableName: "학과",
        columns: {
            departmentId: "학과아이디",
            deptName: "학과이름",
            courses: "코스목록"
        },

        excludeList: ["courses"],
        color: "bg-yellow-200",
    },
    "enrollment": {
        key: "enrollment",
        tableEng: "Enrollment",
        tableName: "수강신청내역",
        columns: {
            enrollmentId: "수강 내역 아이디",
            enrollDate: "강의 개설 날짜",
            courseOffering: "강의 정보",
            user: "유저",
            grades: "성적들",
            attendances: "출석들",
            reviews: "리뷰들",
        },

        excludeList: ["courseOffering", "user", "grades", "attendances", "reviews"],
        color: "bg-grey-600",
    },
    "grade": {
        key: "grade",
        tableEng: "Grade",
        tableName: "성적",
        columns: {
            gradeId: "성적아이디",
            gradeValue: "성적값",
            courseName: "강의이름",
            enrollment: "수강내역",
        },

        excludeList: ["enrollment", "courseName"],
        color: "bg-amber-100",
    },
    "notice": {
        key: "notice",
        tableEng: "Notice",
        tableName: "공지사항",
        columns: {
            noticeId: "공지사항아이디",
            title: "제목",
            content: "내용",
            createdAt: "작성일자",
            userDTO: "유저",
        },

        excludeList: ["userDTO"],
        color: "bg-amber-100",
    },
    "post": {
        key: "post",
        tableEng: "Post",
        tableName: "게시글",
        columns: {
            postId: "게시글아이디",
            title: "제목",
            content: "내용",
            createAt: "작성일자",
            userDTO: "유저",
        },

        excludeList: ["userDTO"],
        color: "bg-lime-100",
    },
    "review": {
        key: "review",
        tableEng: "Review",
        tableName: "리뷰",
        columns: {
            reviewId: "리뷰아이디",
            rating: "평가점수",
            comment: "댓글내영",
            createAt: "작성일자",
            enrollmentDTO: "수강내역",
        },

        excludeList: ["enrollmentDTO"],
        color: "bg-green-100",
    },
    "timeTable": {
        key: "timeTable",
        tableEng: "TimeTable",
        tableName: "시간표",
        columns: {
            timetableId: "시간표아이디",
            dayOfWeek: "요일",
            startTime: "수업시작시간",
            endTime: "수업종료시간",
            location: "위치",
            courseOffering: "실제수업",
        },

        excludeList: ["courseOffering"],
        color: "bg-emerald-100",
    },
    "user": {
        key: "user",
        tableEng: "User",
        tableName: "유저",
        columns: {
            userId: "유저아이디",
            email: "이메일",
            password: "비밀번호",
            nickname: "닉네임",
            role: "역할",
            offerings: "수업내역",
            enrollments: "수강내역",
            comments: "댓글내역",
            posts: "게시글내역",
            notices: "공지내역",
        },

        excludeList: ["offerings", "enrollments", "comments", "posts", "notices"],
        color: "bg-teal-100",
    },
};