import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";

const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iserror, setIsError] = useState();

  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await fetch(
          "https://http-request-1cf75-default-rtdb.firebaseio.com/meals.json"
        );
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const inComingData = await response.json();
        let tempArray = [];
        for (const key in inComingData) {
          tempArray.push({
            id: key,
            name: inComingData[key].name,
            description: inComingData[key].description,
            price: inComingData[key].price,
          });
        }
        setDUMMY_MEALS(tempArray);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setIsError(error.message);
      }
    };
    fetcData();
  }, []);

  if (loading) {
    return (
      <section className={classes.mealsLoading}>
        <p>loading...</p>
      </section>
    );
  }
  if (iserror) {
    return (
      <section className={classes.mealsLoading}>
        <section className={classes.mealsLoading}>
          <p>{iserror}</p>
        </section>
      </section>
    );
  }

  const mealList = DUMMY_MEALS.map((meal) => (
    <Mealitem
      id={meal.id} // this is new!
      key={meal.id}
      description={meal.description}
      name={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
