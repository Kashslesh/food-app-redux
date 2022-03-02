import React, { Fragment } from 'react';
import RepasList from './RepasList';
import RepasWelcome from './RepasWelcome';
const Repas = () => {
  return (
    <Fragment>
      <RepasWelcome />
      <RepasList/>
    </Fragment>
  );
};
export default Repas;
