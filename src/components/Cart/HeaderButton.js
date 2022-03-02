import React, { useContext, useEffect, useState } from 'react';
import CartIcon from './CartIcon';
import CartContext from '../store/Cart-context';
import classes from './HeaderButton.module.css';
const HeaderButton = props => {
  const [btnIsHighLighted, setBtnHighLighted] = useState(false);
  const cartCxt = useContext(CartContext);
  const { items } = cartCxt;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ''
  }`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighLighted(true);
    const timer = setTimeout(() => {
      setBtnHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Votre Panier</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderButton;
