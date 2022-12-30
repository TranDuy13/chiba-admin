import axios from "axios";
const API_URL = "/customer";

const buyProduct = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/purchase/buy`, data);
  return response.data;
};
const getStatusByUser = async (data) => {
    const response = await axios.post(`${API_URL}/purchase/get`, data);
    return response.data;
  };
  const getStatusBySeller = async (data) => {
    const response = await axios.post(`${API_URL}/purchase/seller`, data);
    return response.data;
  };
const purchaseService = {
  buyProduct,
  getStatusByUser,
  getStatusBySeller
};
export default purchaseService;
