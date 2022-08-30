import { configureStore} from '@reduxjs/toolkit'

 const store = configureStore({
    reducer:{
        auth: '',
        schedule: '',
        contract: '',
    }
})
export default store