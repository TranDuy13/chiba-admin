import axios from 'axios'
const API_URL ='/ai'


const messageAI = async (text) => {
    const response = await axios.post(`${API_URL}/question`,text)
    return response.data
}
const chatbotService ={
    messageAI
}
export default chatbotService