import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Kubilay Bozak' },
    { id: '1', name: 'Ahmet Kural' },
    { id: '2', name: 'Murat Cemcir' }
]

const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        /*
        İleride buraya user ekleme için bir reducer ihtiyacımız olabilir
            Fakat şimdilik bu işlemi pas geçiyoruz :) 
        */
    }
})

export const selectAllUsers = (state) => state.User;

export default usersSlice.reducer