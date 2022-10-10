import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData) => {
  // const response = await axios.post(`${API_URL}register`, userData);
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));

  } else {
    console.log("Unable to create user. returned response:" + response.data);
    alert("Unable to create user. returned response:" + response.data)
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log(response.data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response.data;
};

const authService = {
  register,
  login
};

export default authService;
