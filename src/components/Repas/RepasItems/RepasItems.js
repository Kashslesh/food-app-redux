import React, { useContext } from 'react';
import RepasItemsForm from './RepasItemsForm';
import CartContext from '../../store/Cart-context';
import classes from './RepasItems.module.css';
const RepaItems = props => {
  const CartCtx = useContext(CartContext);
  const addToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  const price = `€${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <RepasItemsForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default RepaItems;
