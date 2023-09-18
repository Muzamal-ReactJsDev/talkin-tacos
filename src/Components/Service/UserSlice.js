// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// export const UserSlice = createSlice({
//   name: "UserSlice",
//   initialState: {
//     users: [],
//     cart: [], // Initialize an empty cart array
//     loading: false,
//     error: null,
//   },

//   reducers: {
//     addItemToCart: (state, action) => {
//       state.cart.push(action.payload);
//     },

//   },
// });
// export const { addItemToCart, removeFromCart, clearCart } = UserSlice.actions;

// export default UserSlice.reducer;

// src/reducers/UserSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
//   totalPrice: 0,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       const existingItem = state.cart.find(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//         existingItem.itemTotalPrice += existingItem.price; // Increase the price for the specific item
//         state.totalPrice += existingItem.price; // Update the total price with the price of the specific item
//       } else {
//         const newItem = {
//           ...action.payload,
//           quantity: 1,
//           itemTotalPrice: action.payload.price,
//         };
//         state.cart.push(newItem);
//         state.totalPrice += newItem.price;
//       }
//     },
//     removeFromCart: (state, action) => {
//       const itemToRemove = state.cart.find(
//         (item) => item.id === action.payload.id
//       );

//       if (itemToRemove) {
//         if (itemToRemove.quantity > 1) {
//           itemToRemove.quantity -= 1;
//           itemToRemove.itemTotalPrice -= itemToRemove.price; // Decrease the price for the specific item
//           state.totalPrice -= itemToRemove.price; // Update the total price
//         } else {
//           state.cart = state.cart.filter(
//             (item) => item.id !== action.payload.id
//           );
//           state.totalPrice -= itemToRemove.itemTotalPrice; // Subtract the total price of the removed item
//         }
//       }
//     },
//     clearCart: (state) => {
//       state.cart = [];
//       state.totalPrice = 0;
//     },
//   },
// });

// export const { addItemToCart, removeFromCart, clearCart } = userSlice.actions;

// export default userSlice.reducer;

// yahan hum total quantity or total price ka logic lagain gay.....!!!!

import { createSlice } from "@reduxjs/toolkit";
const TotalAmt = (items) => {
  const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    const d = a?.price * a?.quantity;
    return accumulator + d;
  }
  return sum;
};
const initialState = {
  cart: [],
  totalPrice: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.itemTotalPrice += existingItem.price; // Increase the price for the specific item
        state.totalPrice += existingItem.price; // Update the total price with the price of the specific item
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
          itemTotalPrice: action.payload.price,
        };
        state.cart.push(newItem);
        state.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          itemToRemove.quantity -= 1;
          itemToRemove.itemTotalPrice -= itemToRemove.price; // Decrease the price for the specific item
          state.totalPrice -= itemToRemove.price; // Update the total price
        } else {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalPrice -= itemToRemove.itemTotalPrice; // Subtract the total price of the removed item
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeFromCart, clearCart } = userSlice.actions;

export default userSlice.reducer;
