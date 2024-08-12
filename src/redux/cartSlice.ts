import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../supabase/supabase";

const name = "cart";
type CartItem = Product & { quantity: number; total: number };

export interface CartState {
  cart: CartItem[];
}

const removeItemFromCart = (state: CartState, itemName: string): CartItem[] =>
  state.cart.filter((item) => item.name !== itemName);

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cart.find(
        (product) => product.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: 1 * action.payload.price,
        });
    },

    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.cart.find(
        (product) => product.name === action.payload
      );
      if (item) {
        if (item.quantity === 1) {
          state.cart = removeItemFromCart(state, item.name);
        } else {
          item.quantity--;
          item.total = item.quantity * item.price;
        }
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.cart = removeItemFromCart(state, action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeItem, decrementQuantity } = cartSlice.actions;
