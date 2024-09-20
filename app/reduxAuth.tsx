import { createSlice } from "@reduxjs/toolkit";

interface Account {
    id: number;
    username: string;
    avatar: string;
}


interface AccountState {
    currentAccount: Account | null;
    accounts: Account[];
}

const initialState: AccountState = {
    // currentAccount: false,
    currentAccount: {
        id: 1,
        username: "n0d0dg3",
        avatar: "https://pbs.twimg.com/profile_images/1748018830683566081/bubgNnQq_400x400.jpg",
    },
    accounts: [],


}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //state manipule etme metodları
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                state.currentAccount = false || null;
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        }
    }

})


export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer;


