import foodsJson from '/src/foods';

import { useState } from 'react';

import AddFoodForm from '../AddFoodForm/AddFoodForm';
import FoodBox from '../FoodBox/FoodBox';
import Search from '../Search/Search';
import EmptyArray from '../EmptyArray/EmptyArray';

function FoodList() {
  const [foods, setFoods] = useState(foodsJson);
  const [isSearching, setIsSearching] = useState(false);
  const [displayedFoods, setDisplayedFoods] = useState(null);

  const onButtonDelete = (id) => {
    const filteredFoods = foods.filter((food) => food.id !== id);

    setFoods(filteredFoods);
  };

  const onAddFood = (food) => {
    const copy = [...foods];
    copy.push(food);

    setFoods(copy);
  };

  const onSearchInput = (value) => {
    const filteredFoods = !value
      ? foods
      : foods.filter((food) => food.name.includes(value));
    setIsSearching(true);
    setDisplayedFoods(filteredFoods);
  };

  const onIsSearching = (flag) => {
    setIsSearching(flag);
  };

  return (
    <>
      <Search onSearchInput={onSearchInput} onIsSearching={onIsSearching} />
      <AddFoodForm onAddFood={onAddFood} />
      <h2>Food List</h2>
      <div className="container">
        {foods.length === 0 && <EmptyArray />}
        {isSearching
          ? displayedFoods.map((food) => {
              return (
                <FoodBox
                  food={food}
                  key={food.id}
                  onButtonDelete={onButtonDelete}
                />
              );
            })
          : foods.map((food) => {
              return (
                <FoodBox
                  food={food}
                  key={food.id}
                  onButtonDelete={onButtonDelete}
                />
              );
            })}
      </div>
    </>
  );
}

export default FoodList;
