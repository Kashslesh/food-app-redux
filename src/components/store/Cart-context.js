import React from 'react';
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  revomeItem: id => {},
  clearCart: () => {},
});

export default CartContext;
