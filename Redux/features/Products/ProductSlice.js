import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
  isLoading: null,
  isError: null,
};

/*
Thunk yapısı 2 parametreye ihtiyaç duyar bu iki parametre alır
    Basitçe açıklama yapmak gerekirse,
        =>Ad yani action'ın ismini vermemiz gerekiyor genelde "Sliceİsmi"/"createAsyncThunk" fonksiyonuna assign edilen değer kullanılır.
        =>İstek gönderme işlemi yani asenkron çağrılma işlemini yapmak.
*/

//Bu fonksiyonu export etmemiz gerekiyor çünkü sayfada fetch işlemlerinde bu fonksiyon sayesinde Fetch işlemini gerçekleştireceğiz.

export const FetchProduct = createAsyncThunk(
  "Product/FetchProduct",
  async () => {
    const res = await axios("https://fakestoreapi.com/products");
    const data = await res.data;
    return data;
  },
);




export const ProductSlice = createSlice({
  // Slice ismi belirtiliyor
  name: "Product",
  // Başlangıç state'i ayarlanıyor
  initialState,
  // Reducer ayarlamaları, burada herhangi bir ayarlama yapılmamaktadır.
  reducers: {},
  // Ekstra reducerler Thunk yapısı için tanımlandı.
  extraReducers: (builder) => {
    // Ürün detaylarının alınması durumunda çalışacak function
    builder.addCase(FetchProduct.pending, (state) => {
      // Verinin yüklenmesinin durumu provoke edilir
      state.isLoading = true;
    });
    // Ürünlerin başarılı bir şekilde alınması durumu
    builder.addCase(FetchProduct.fulfilled, (state, action) => {
      // Yüklenme durumu false olur ve ürünler state'e yerleştirilir.
      state.isLoading = false;
      state.productList = action.payload;
    });
    // Ürünlerin alınamaması durumu
    builder.addCase(FetchProduct.rejected, (state, action) => {
      // Yüklenme durumu false olur ve hata bilgisi state'e yerleştirilir.
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export default ProductSlice.reducer;
