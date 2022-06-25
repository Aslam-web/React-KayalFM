import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData) => {
  // const response = await axios.post(`${API_URL}register`, userData);
  const response = await axios.post(API_URL + "register", userData);

    console.log("response:"+response);
  if (response.data) {
    const { user, message } = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    if(message) console.log(message);
  } else {
    console.log("Unable to create user. returned response:" + response.data);
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  console.log(response);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  login
};

export default authService;
