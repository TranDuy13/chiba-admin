import axios from 'axios'
const API_URL ='/auth'


const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData)

    return response.data
}

const adminUpdate =async(data)=>{
    const response = await axios.post(`${API_URL}/adminUpdateProfile `, data)
    return response.data
}
const login = async (userData) => {
    
    const response = await axios.post(`${API_URL}/login `, userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
    
}
const getUser = async (token) => {
    const config = {headers:{
        Authorization: `Bearer ${token}`,
    }}
    
    const response = await axios.get(`${API_URL}/getAuth `, config)
    console.log(response.data)
    return response.data
    
}

const changePassword = async(userData)=>{
    const response = await axios.post(`${API_URL}/changePassword `, userData)
    return response.data
}
const updateProfile = async(userData)=>{
    const response = await axios.post(`${API_URL}/updateProfile `, userData)
    return response.data
}
const getAllUsers = async ()=>{
    const response = await axios.get(`${API_URL}/getAllUsers`)
    return response.data
}
const logout = () => localStorage.removeItem('user')


const authService = {
    registerUser,
    logout,
    login,
    getUser,
    changePassword,
    updateProfile,
    getAllUsers,
    adminUpdate
}
export default authService