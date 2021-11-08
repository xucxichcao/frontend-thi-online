import axios from "axios";

export default axios.create({
  baseURL: "https://backend-thi-online.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
