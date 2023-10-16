import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todos: ["SELAM"],
};

export const TodoSlice = createSlice({
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
  name: "TodoApp",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.Todos.push(action.payload);
    },
  },
});

export const { AddTodo } =TodoSlice.actions;

export default TodoSlice.reducer
