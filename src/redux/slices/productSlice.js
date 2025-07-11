import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { allProducts: [], selectedProduct: null },
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
