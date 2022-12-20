import axios from "axios";
const API_URL = "/auth";

const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  return response.data;
};

const adminUpdate = async (data) => {
  const response = await axios.post(`${API_URL}/adminUpdateProfile `, data);
  return response.data;
};
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login `, userData);
  if (response.data.success) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("users", JSON.stringify(response.data));
  }
  return response.data;
};
const getUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/getUser `, config);
  if (response.data.success) {
    console.log(response.data);
    localStorage.setItem("users", JSON.stringify(response.data));
  }
  return response.data;
};
const verifyUser = async (data) => {
  console.log(data.value);
  const response = await axios.post(
    `${API_URL}/verify/seller/${data.id} `,
    data.value
  );
  if (response.data.success) {
    console.log(response.data);
    localStorage.setItem("users", JSON.stringify(response.data));
  }
  return response.data;
};

const changePassword = async (userData) => {
  const response = await axios.post(`${API_URL}/changePassword `, userData);
  return response.data;
};
const updateProfile = async (userData) => {
  const response = await axios.post(`${API_URL}/updateProfile `, userData);
  if (response.data.success) {
    console.log(response.data);
    localStorage.setItem("users", JSON.stringify(response.data));
  }
  return response.data;
  
};
const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/getAllUsers`);
  return response.data;
};
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("users");
};

const sendMail = async (email) => {
  const response = await axios.post(`${API_URL}/verify/seller `, email);
  return response.data;
};

const authService = {
  registerUser,
  logout,
  login,
  getUser,
  changePassword,
  updateProfile,
  getAllUsers,
  adminUpdate,
  verifyUser,
  sendMail,
};
export default authService;
