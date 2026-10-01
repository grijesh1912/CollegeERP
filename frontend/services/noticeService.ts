import axios from "axios";

const API = "http://localhost:5000/api/notices";

export const getNotices = async () => {
  const response = await axios.get(API);
  return response.data;
};