import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import TodoReducer from "./features/Todo/TodoSlice";
import BlogReducer from "./features/Blog/BlogSlice";
import UserReducer from './features/User/UserSlice'
import ProductReducer from './features/Products/ProductSlice'
/* 
Redux Toolkit kullanırken configureStore fonksiyonunda tanımlanan reducer alanı, 
uygulamanızın durumunu yöneten kesimlerin (slices) veya özel reducer'ların birleştirildiği yerdir. 
Reducer'lar, eylemleri işleyen ve uygulama durumunu güncelleyen işlevlerdir.
*/
export const store = configureStore({
  reducer: {
    Mycounter: counterReducer,
    MyTodo: TodoReducer,
    Blogs: BlogReducer,
    User:UserReducer,
    Product:ProductReducer
  },
});
