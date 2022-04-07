import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b30fd.cloudfunctions.net/api",
  // "http://localhost:5001/clone-b30fd/us-central1/api", // the api (cloud function) url
});

export default instance;
