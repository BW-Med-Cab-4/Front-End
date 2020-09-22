import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `${token}`,
    },
    baseURL: "https://med-cab-user.herokuapp.com/",
  });
};

export default axiosWithAuth;
