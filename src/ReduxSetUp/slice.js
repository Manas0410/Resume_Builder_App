//for diff purpose/api
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
// // {() => dispatch(addQuantity(item))}
// // const cartList = useSelector((state) => state.cartReducer.cart);


