import React, { useContext, useState, Fragment } from 'react';
import Modal from '../UI/Modal';
import CartContex from '../store/Cart-context';
import CartItem from './CartItem';
import Somme from './Somme';
import classes from './Cart.module.css';
const Cart = props => {
  const [isOrder, setIsOrder] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
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
  const orderHandler = () => {
    setIsOrder(true);
  };
  const submitOrderHandler = async userData => {
    setIsSubmiting(true);
    await fetch(
      'https://reacthttprequest-51c0e-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const modalDiv = (
    <div className={classes.actions}>
      <button onClick={props.onCloseCart} className={classes['button--alt']}>
        Fermer
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={classes.button}>
          Commander
        </button>
      )}
    </div>
  );
  const isSubmitContent = <p>Envoi des données de commande</p>;
  const didSubmitContent = (
    <Fragment>
      <p>Envoyé avec succès la commande</p>
      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes['button--alt']}>
          Fermer
        </button>
      </div>
    </Fragment>
  );
  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Montant total</span>
        <span>{totalAmount}</span>
      </div>
      {isOrder && (
        <Somme onConfirm={submitOrderHandler} onCancel={props.onCloseCart} />
      )}
      {!isOrder && modalDiv}
    </Fragment>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmitContent}
      {!isSubmiting && didSubmit && didSubmitContent}
    </Modal>
  );
};
export default Cart;
