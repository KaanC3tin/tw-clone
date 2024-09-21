import { configureStore } from '@reduxjs/toolkit'
import auth from "@/app/reduxAuth"


const store = configureStore({

    reducer: {
      auth
    }
})


export default store;
export type RootState=ReturnType<typeof store.getState>


// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
