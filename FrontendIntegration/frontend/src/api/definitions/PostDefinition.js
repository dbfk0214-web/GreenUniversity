export const PostDef = {
    key: "post",
    primaryKey: "postId",
    tableEng: "Post",
    tableName: "게시글",
    allColumns: {
        columns: {
            postId: "게시글아이디",
            title: "제목",
            content: "내용",
            createAt: "작성일자",
            userDTO: "유저",
        },
        createColumns: {
            postId: "게시글아이디",
            title: "제목",
            content: "내용",
            createAt: "작성일자",
            userDTO: "유저",
        },
        responseColumns: {
            postId: "게시글아이디",
            title: "제목",
            content: "내용",
            createAt: "작성일자",
            userDTO: "유저",
        },
        updateColumns: {
            postId: "게시글아이디",
            title: "제목",
            content: "내용",
            createAt: "작성일자",
            userDTO: "유저",
        },
    },

    excludeList: ["userDTO"],
    color: "bg-lime-100",
}