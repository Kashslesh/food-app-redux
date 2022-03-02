import React from 'react';
import Card from '../UI/Card';
import RepaItems from './RepasItems/RepasItems';
import classes from './RepasList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const RepasList = () => {
  const repasList = DUMMY_MEALS.map(repa => (
    <RepaItems
      key={repa.id}
      id={repa.id}
      name={repa.name}
      description={repa.description}
      price={repa.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{repasList}</ul>
      </Card>
    </section>
  );
};
export default RepasList;
