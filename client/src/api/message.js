import axios from "axios";

const SERVER_URL = "http://localhost:3050";

export const getMessage = async () => {
  return await axios.get(`${SERVER_URL}`);
};
