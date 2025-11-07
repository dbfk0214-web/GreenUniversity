import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
const host = `${API_SERVER_HOST}/community`;

export const readComment = async(cid) => {
    console.log("readcomment를 받았따",cid)

    const res = await axios.get(`comment/read/${cid}`)
    return res.data;
}

export const getListComment = async() => {
    console.log("getListComment 를 받았따")
    var url = `${host}/comment/list`
    console.log('url:',url)
    const res = await axios.get(url)
    console.log("db에서 가져온 데이터 ," ,res)
    return res;
}