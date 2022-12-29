import { configureStore, createReducer} from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import chatbotReducer from '../components/features/chatbot/chatbotSlice'
import productReducer from '../components/features/product/productSlice'
import cartReducer from '../components/features/cart/cartSlice'
 const store = configureStore({
    reducer:{
        auth: authReducer,
        product: productReducer,
        cart: cartReducer,
        ai:chatbotReducer
    }
})
export default store