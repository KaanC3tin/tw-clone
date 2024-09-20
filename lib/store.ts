import { configureStore } from '@reduxjs/toolkit'
import auth from "@/app/reduxAuth"


const store = configureStore({

    reducer: {
      auth
    }
})


export default store;
// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
