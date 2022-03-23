import { useState, useRef } from 'react';
import classes from './Somme.module.css';
const isEmpty = value => value.trim() !== '';

const isFiveCharacters = value => value.trim().length === 5;
const Somme = props => {
  const [errorForm, setErrorForm] = useState({
    name: true,
    street: true,
    postale: true,
    city: true,
  });
  const InputRefName = useRef();
  const InputRefStreet = useRef();
  const InputRefPostaleCode = useRef();
  const InputRefCity = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredName = InputRefName.current.value;
    const enteredStreet = InputRefStreet.current.value;
    const enteredPostaleCode = InputRefPostaleCode.current.value;
    const enteredCity = InputRefCity.current.value;

    const enterdNameIsValid = isEmpty(enteredName);
    const enterdStreetIsValid = isEmpty(enteredStreet);
    const enterdPostalCodeIsValid = isFiveCharacters(enteredPostaleCode);
    const enterdCityIsValid = isEmpty(enteredCity);

    setErrorForm({
      name: enterdNameIsValid,
      street: enterdStreetIsValid,
      postale: enterdPostalCodeIsValid,
      city: enterdCityIsValid,
    });
    const formIsValid =
      enterdNameIsValid &&
      enterdStreetIsValid &&
      enterdPostalCodeIsValid &&
      enterdCityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostaleCode,
      city: enteredCity,
    });
  };
  const nameStyle = `${classes.control} ${
    errorForm.name ? '' : classes.invalid
  } `;
  const streetStyle = `${classes.control} ${
    errorForm.street ? '' : classes.invalid
  } `;
  const postalStyle = `${classes.control} ${
    errorForm.postale ? '' : classes.invalid
  } `;
  const cityStyle = `${classes.control} ${
    errorForm.city ? '' : classes.invalid
  } `;
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameStyle}>
        <label htmlFor="name">Votre Nom</label>
        <input id="name" type="text" ref={InputRefName}></input>
        {!errorForm.name && <p>Ajoutez un Nom</p>}
      </div>
      <div className={streetStyle}>
        <label htmlFor="street">Votre Adresse</label>
        <input id="street" type="text" ref={InputRefStreet}></input>
        {!errorForm.street && <p>Ajoutez un rue</p>}
      </div>
      <div className={postalStyle}>
        <label htmlFor="postale">Code Postale</label>
        <input id="postale" type="number" ref={InputRefPostaleCode}></input>
        {!errorForm.postale && <p>Ajoutez un Code Postale (min 5 chiffres)</p>}
      </div>
      <div className={cityStyle}>
        <label htmlFor="city">Ville</label>
        <input id="city" type="text" ref={InputRefCity}></input>
        {!errorForm.city && <p>Ajoutez un ville</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel} type="button">
          Annuler
        </button>
        <button type="submit">Confirmer</button>
      </div>
    </form>
  );
};
export default Somme;
