// import { createSlice } from "@reduxjs/toolkit";

// const TotalAmt = (items) => {
//   const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
//   function add(accumulator, a) {
//     const d = a?.price * a?.quantity;
//     return accumulator + d;
//   }
//   return sum;
// };
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

// ////////////

import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage = (items, totalCount, totalPrice) => {
  if (items !== undefined) {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }
  if (!isNaN(totalCount)) {
    localStorage.setItem("totalCount", totalCount);
  }
  if (!isNaN(totalPrice)) {
    localStorage.setItem("totalPrice", totalPrice);
  }
};

let storedCartItems = localStorage.getItem("cartItems");
let storedTotalCount = parseInt(localStorage.getItem("totalCount")) || 0;
let storedTotalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;

if (storedCartItems) {
  try {
    storedCartItems = JSON.parse(storedCartItems);
  } catch (e) {
    // Handle parsing error, or set a default value
    storedCartItems = [];
  }
}

const TotalAmt = (items) => {
  const sum = items.reduce(add, 0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    const d = a?.price * a?.quantity;
    return accumulator + d;
  }
  return sum;
};
const initialState = {
  totalCount: storedTotalCount, // Initialize with totalCount from local storage
  cart: storedCartItems || [], // Initialize with items from local storage or an empty array
  totalPrice: storedTotalPrice, // Initialize with totalPrice from local storage
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
      updateLocalStorage(state.cart, state.totalCount, state.totalPrice);
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
      updateLocalStorage(state.cart, state.totalCount, state.totalPrice);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeFromCart, clearCart } = userSlice.actions;

export default userSlice.reducer;
export const cartDetails = (state) => state.app;
