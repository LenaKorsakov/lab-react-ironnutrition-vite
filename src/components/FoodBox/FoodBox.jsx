import { Card, Col, Button } from 'antd';

function FoodBox({ food, onButtonDelete }) {
  const { name, image, calories, servings, id } = food;
  const totalCalories = servings * calories;

  const handleButtonDelete = (foodId) => {
    onButtonDelete(foodId);
  };

  return (
    <Col>
      <Card title={name} style={{ width: 240, height: 300, margin: 10 }}>
        <img src={image} alt={name} width="50px" />

        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>

        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>

        <Button type="primary" onClick={() => handleButtonDelete(id)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
