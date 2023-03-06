import axios from "axios";
const API_URL = "/cart";

const addToCart = async (data) => {
    console.log(data);
  const response = await axios.post(`${API_URL}/add`, data);
  return response.data;
};
const getCartByUser = async (id) => {
  const response = await axios.get(`${API_URL}/get/cartuser/${id}`);
  return response.data;
};
const deleteCart = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};
const cartService = {
  addToCart,
  getCartByUser,
  deleteCart
};
export default cartService;
