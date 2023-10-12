import foodsJson from '/src/foods';

import { useState } from 'react';

import AddFoodForm from '../AddFoodForm/AddFoodForm';
import FoodBox from '../FoodBox/FoodBox';
import Search from '../Search/Search';
import EmptyArray from '../EmptyArray/EmptyArray';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);

  const [searchName, setSearchName] = useState('');

  const onButtonDelete = (id) => {
    const filteredFoods = foods.filter((food) => food.id !== id);

    setFoods(filteredFoods);
  };

  const onAddFood = (food) => {
    const copy = [...foods];
    copy.push(food);

    setFoods(copy);
  };

  let foodsToDisplay;
  if (searchName === '') {
    foodsToDisplay = foods;
  } else {
    foodsToDisplay = foods.filter((food) =>
      food.name.toUpperCase().includes(searchName.toUpperCase())
    );
  }

  return (
    <>
      <Search search={searchName} setSearchName={setSearchName} />
      <AddFoodForm onAddFood={onAddFood} />
      <h2>Food List</h2>
      <div className="container">
        {foods.length !== 0 ? (
          foodsToDisplay.map((food) => {
            return (
              <FoodBox
                food={food}
                key={food.id}
                onButtonDelete={onButtonDelete}
              />
            );
          })
        ) : (
          <EmptyArray />
        )}
      </div>
    </>
  );
}

export default FoodList;
