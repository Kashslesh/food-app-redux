import React, { Fragment } from 'react';
import repasImg from '../../assets/Repas.jpg';
import HeaderButton from '../Cart/HeaderButton';
import classes from './Header.module.css';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> React FoodApp </h1>{' '}
        <HeaderButton onClick={props.onShowCart}> Panier </HeaderButton>{' '}
      </header>{' '}
      <div className={classes['main-image']}>
        <img src={repasImg} alt="BBQ" />
      </div>{' '}
    </Fragment>
  );
};
export default Header;
