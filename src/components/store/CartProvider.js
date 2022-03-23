import React, { useReducer } from 'react';
import CartContext from './Cart-context';
const defaultCartItems = {
  items: [],
  totalAmount: 0,
};
const itemsCartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existeCartitemIndex = state.items.findIndex(
      item => item.id === action.item.id
    );
    const existeCartItem = state.items[existeCartitemIndex];
    let updateItems;
    if (existeCartItem) {
      const updateItem = {
        ...existeCartItem,
        amount: existeCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existeCartitemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return { items: updateItems, totalAmount: updateTotalAmount };
  }
  if (action.type === 'REMOVE') {
    const existeCartitemIndex = state.items.findIndex(
      item => item.id === action.id
    );
    const existeCartItem = state.items[existeCartitemIndex];
    const updatedTotalAmount = state.totalAmount - existeCartItem.price;
    let updateItems;
    if (existeCartItem.amount === 1) {
      updateItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updateItem = {
        ...existeCartItem,
        amount: existeCartItem.amount - 1,
      };
      updateItems = [...state.items];
      updateItems[existeCartitemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'CLEAR') {
    return defaultCartItems;
  }
  return defaultCartItems;
};
const CartProvider = props => {
  const [cartItemsState, dispatchItemsCart] = useReducer(
    itemsCartReducer,
    defaultCartItems
  );
  const addItemCartHandler = item => {
    dispatchItemsCart({ type: 'ADD', item: item });
  };
  const removeItemCartHandler = id => {
    dispatchItemsCart({ type: 'REMOVE', id: id });
  };
  const clearCartHeadler =()=>{
    dispatchItemsCart({type: 'CLEAR'})
  }
  const cartContext = {
    items: cartItemsState.items,
    totalAmount: cartItemsState.totalAmount,
    addItem: addItemCartHandler,
    revomeItem: removeItemCartHandler,
    clearCart:clearCartHeadler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
