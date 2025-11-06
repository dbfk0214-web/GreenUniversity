import axios from "axios";
import { API_SERVER_HOST } from "./commonApi";
const host = `${API_SERVER_HOST}/board`;

export const readBoard = async() => {
    console.log("readBoard를 받았따")

    const res = await axios.get(`${host}/board`)
    return res.data;
}