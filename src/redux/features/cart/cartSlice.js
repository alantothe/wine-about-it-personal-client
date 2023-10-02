import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId: "",
    items: [],
    cartQuantity: 0,
    cartTotal: 0,
  },
  reducers: {
    increment: (state, action) => {
      const { id, price } = action.payload;

      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        // increment the quantity of the existing item
        existingItem.quantity += 1;
      }

      // update cartQuantity & Total
      state.cartQuantity += 1;
      state.cartTotal += price;
    },
    decrement: (state, action) => {
      const { id, price } = action.payload;

      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        // decrement the quantity of the existing item
        existingItem.quantity -= 1;
        state.cartTotal -= price;
      }

      // update cartQuantity and Total
      state.cartQuantity -= 1;
    },
    incrementByAmount: (state, action) => {
      state.cartQuantity += action.payload;
    },
    addUserId: (state, action) => {
      state.userId = action.payload;
    },
    addItems: (state, action) => {
      const { id, price, quantity } = action.payload;

      const existingItem = state.items.find((item) => item._id === id);

      if (existingItem) {
        // increment the quantity of the existing item
        existingItem.quantity += quantity;
      } else {
        // add the new item to the cart
        state.items.push({ _id: id, price, quantity });
      }

      // update cartTotal and cartQuantity
      state.cartTotal += price * quantity;
      state.cartQuantity += quantity;
    },
  },
});

export const { increment, decrement, incrementByAmount, addUserId, addItems } =
  cartSlice.actions;
export default cartSlice.reducer;
