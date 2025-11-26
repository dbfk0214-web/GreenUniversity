export const BoardDef = {
    key: "board",
    primaryKey: "boardId",
    tableEng: "Board",
    tableName: "게시판종류",
    allColumns: {
        columns: {
            boardId: "게시판번호",
            boardName: "게시판종류",
            posts: "게시판글",
        },
        createColumns: {
            boardId: "게시판번호",
            boardName: "게시판종류",
            posts: "게시판글",
        },
        responseColumns: {
            boardId: "게시판번호",
            boardName: "게시판종류",
            posts: "게시판글",
        },
        updateColumns: {
            boardId: "게시판번호",
            boardName: "게시판종류",
            posts: "게시판글",
        },
    },

    excludeList: ["posts"],
    color: "bg-gray-200",
}