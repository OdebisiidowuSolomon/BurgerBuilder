import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-f4321.firebaseio.com/",
});

export default instance;
