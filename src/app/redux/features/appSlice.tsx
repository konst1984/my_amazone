import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/app/redux/store";
import { getDataFromLS } from "@/utils/getDataFromLS";

export interface IAppState {
  cart: IStoreProduct[];
  favorites: IStoreProduct[];
  allGoods: IStoreProduct[];
  userInfo: {
    email: string;
    image: string;
    name: string;
  } | null;
}

const initialState: IAppState = {
  cart: getDataFromLS("cart"),
  favorites: getDataFromLS("favorites"),
  allGoods: [],
  userInfo: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item: IStoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favorites.find(
        (item: IStoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favorites.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item: IStoreProduct) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item: IStoreProduct) => item._id === action.payload._id
      );
      if (existingProduct?.quantity && existingProduct?.quantity <= 1) {
        state.cart = state.cart.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        existingProduct!.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state) => {
      state.cart = [];
    },
    resetFavorites: (state) => {
      state.favorites = [];
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    setAllGoods: (state, action) => {
      state.allGoods = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  addToFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  removeUser,
  setAllGoods,
  deleteFavorite,
  resetFavorites,
} = appSlice.actions;

export const selectTotalAmount = (state: RootState) =>
  state.app.cart.reduce(
    (acc, productCart) => acc + productCart.quantity * productCart.price,
    0
  );

export const { reducer: appReducer } = appSlice;
