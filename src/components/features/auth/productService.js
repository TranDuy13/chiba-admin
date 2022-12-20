import axios from "axios";
const API_URL = "/product";

const createProduct = async (data) => {
    const response = await axios.post(`${API_URL}/create`, data);
    return response.data;
  };
  const getProductbyseller = async (data) => {
    const response = await axios.get(`${API_URL}/getbyseller`, data);
    return response.data;
  };
  const updateProduct = async (data) => {
    const response = await axios.post(`${API_URL}/update/${data.id}`, data.value);
    return response.data;
  };
  const getProduct = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
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
    getProduct
  };
  export default productService;