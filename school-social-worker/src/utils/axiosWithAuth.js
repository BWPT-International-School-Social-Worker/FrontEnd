import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: {/*fancy url*/},
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};
