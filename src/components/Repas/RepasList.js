import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import RepaItems from './RepasItems/RepasItems';
import classes from './RepasList.module.css';

const RepasList = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     const response = await fetch(
  //       'https://reacthttprequest-51c0e-default-rtdb.firebaseio.com/meals.json'
  //     );
  //     if (!response.ok) {
  //       throw new Error('Something went wrong');
  //     }
  //     const responseData = await response.json();
  //     const loadedMeals = [];
  //     for (const key in responseData) {
  //       loadedMeals.push({
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //     }
  //     setMeals(loadedMeals);
  //     setIsLoading(false);
  //   };
  //   fetchMeals().catch(error => {
  //     setIsLoading(false);
  //     setError(error.message);
  //   });
  // }, []);

  // if (error) {
  //   return (
  //     <section className={classes.mealsError}>
  //       <p>{error}</p>
  //     </section>
  //   );
  // }
  // if (isloading) {
  //   return (
  //     <section className={classes.mealsIsloading}>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }
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
