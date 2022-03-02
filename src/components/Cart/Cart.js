import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContex from '../store/Cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
const Cart = props => {
  const cartCtx = useContext(CartContex);
  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemsRemoveHandler = id => {
    cartCtx.revomeItem(id);
  };
  const cartItemsAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemsRemoveHandler.bind(null, item.id)}
          onAdd={cartItemsAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Montant total</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes['button--alt']}>
          Fermer
        </button>
        {hasItems && <button className={classes.button}>Commande</button>}
      </div>
    </Modal>
  );
};
export default Cart;
