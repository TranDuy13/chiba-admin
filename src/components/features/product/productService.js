import axios from "axios";
const API_URL = "/product";

const createProduct = async (data) => {
  const response = await axios.post(`${API_URL}/create`, data);
  return response.data;
};
const getProductbyseller = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/getbyseller`, data);
  return response.data;
};
const getAllProduct = async () => {
  const response = await axios.get(`${API_URL}/get/allProduct`);
  return response.data;
}
const updateProduct = async (data) => {
  const response = await axios.post(`${API_URL}/update/${data.id}`, data);
  return response.data;
};
const gettypeProduct = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/get/type`, data);
  return response.data;
};
const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/item/${id}`);
  return response.data;
};
const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};


const productService = {
  createProduct,
  updateProduct,
  getProductbyseller,
  deleteProduct,
  getProduct,
  getAllProduct,
  gettypeProduct
};
export default productService;