import axios from "axios";

const firebase = axios.create({
  baseURL: "https://system-login-4c440-default-rtdb.firebaseio.com/",
});

export default firebase;
