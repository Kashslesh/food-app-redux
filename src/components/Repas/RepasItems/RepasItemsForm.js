import React, { useRef, useState } from 'react';
import classes from './RepasItemsForm.module.css';
import Input from '../../UI/Input';
const RepasItemsForm = props => {
  const [amountController, setAmountController] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const entredAmountNumber = +entredAmount;

    if (
      entredAmount.trim().length === 0 ||
      entredAmountNumber < 1 ||
      entredAmountNumber > 5
    ) {
      setAmountController(false);
      return;
    }
    props.onAddToCart(entredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantité"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Ajouter</button>
      {!amountController && <p>Ajoutez les articles (1-5)</p>}
    </form>
  );
};
export default RepasItemsForm;
