import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import RepaItems from './RepasItems/RepasItems';
import classes from './RepasList.module.css';

const RepasList = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://reacthttprequest-51c0e-default-rtdb.firebaseio.com/meals.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch(error => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (error) {
    return (
      <section className={classes.mealsError}>
        <p>{error}</p>
      </section>
    );
  }
  if (isloading) {
    return (
      <section className={classes.mealsIsloading}>
        <p>Loading...</p>
      </section>
    );
  }
  const repasList = meals.map(repa => (
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
