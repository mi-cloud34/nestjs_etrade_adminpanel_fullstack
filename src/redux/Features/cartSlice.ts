import { CardProductProps } from '@/app/ecommerce/components/detail/DetailClient';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//import { CardProductProps } from '@/app/components/detail/DetailClient';

interface CartState {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
}

const initialState: CartState = {
  productCartQty: 0,
  cartPrdcts: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartPrdcts: (state, action: PayloadAction<CardProductProps[] | null>) => {
      state.cartPrdcts = action.payload;
    },
    addToBasket: (state, action: PayloadAction<CardProductProps>) => {
      if (state.cartPrdcts) {
        state.cartPrdcts.push(action.payload);
      } else {
        state.cartPrdcts = [action.payload];
      }
    },
    addToBasketIncrease: (state, action: PayloadAction<CardProductProps>) => {
      if (state.cartPrdcts) {
        const index = state.cartPrdcts.findIndex(item => item.id === action.payload.id);
        if (index > -1 && state.cartPrdcts[index].quantity < 10) {
          state.cartPrdcts[index].quantity++;
        }
      }
    },
    addToBasketDecrease: (state, action: PayloadAction<CardProductProps>) => {
      if (state.cartPrdcts) {
        const index = state.cartPrdcts.findIndex(item => item.id === action.payload.id);
        if (index > -1 && state.cartPrdcts[index].quantity > 1) {
          state.cartPrdcts[index].quantity--;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<CardProductProps>) => {
      if (state.cartPrdcts) {
        state.cartPrdcts = state.cartPrdcts.filter(item => item.id !== action.payload.id);
      }
    },
    removeCart: (state) => {
      state.cartPrdcts = null;
    },
    setProductCartQty: (state) => {
      state.productCartQty = state.cartPrdcts ? state.cartPrdcts.length : 0;
    }
  }
});

export const { 
  setCartPrdcts, 
  addToBasket, 
  addToBasketIncrease, 
  addToBasketDecrease, 
  removeFromCart, 
  removeCart, 
  setProductCartQty 
} = cartSlice.actions;

export default cartSlice.reducer;
