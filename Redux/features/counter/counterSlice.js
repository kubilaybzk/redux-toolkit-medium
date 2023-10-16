import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  /* 
  Name => 
     Bu, store içindeki slice'ı tanımlamak için kullanılır ve 
    genellikle eylemler ve reducer'lar arasında iletişim kurmak için kullanılır.

  Reducer => 
     Slice'ın ana reducer fonksiyonunu tanımlar. 
     Bu reducer, slice'ın başlangıç durumunu ve eylemleri işler. 

  initialState => 
    Slice'ın başlangıç durumunu temsil eder. 
    Bu, slice'ın reducer'ı tarafından kullanılır ve uygulama başladığında slice'ın ilk durumunu tanımlar. 
  */
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer