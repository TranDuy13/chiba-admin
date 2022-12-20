import { configureStore} from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import chatbotReducer from '../components/features/chatbot/chatbotSlice'
 const store = configureStore({
    reducer:{
        auth: authReducer,
        // schedule: listReducer,
        // contract: contractReducer,
        ai:chatbotReducer
    }
})
export default store