import { useState } from 'react';
import { Divider, Input, Button, Form } from 'antd';

function AddFoodForm({ onAddFood }) {
  const initialState = {
    name: '',
    image: '',
    calories: '',
    servings: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [form] = Form.useForm();

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    if (event.target.type === 'number') {
      setFormData({
        ...formData,
        [key]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [key]: value,
      });
    }
  };

  const handleFormSubmit = () => {
    // event.preventDefault();

    onAddFood({
      ...formData,
      id: crypto.randomUUID(),
    });
    form.resetFields();
    resetForm();
  };

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      name="addFood"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off
    "
    >
      <Divider>Add Food Entry</Divider>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input a name!',
          },
        ]}
      >
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Image"
        name="image"
        rules={[
          {
            required: true,
            message: 'Please input a image!',
          },
        ]}
      >
        <Input
          type="text"
          id="name"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Calories"
        name="calories"
        rules={[
          {
            required: true,
            message: 'Please input a calories!',
          },
        ]}
      >
        <Input
          type="number"
          id="calories"
          name="calories"
          value={formData.calories}
          onChange={handleInputChange}
        />
      </Form.Item>

      <Form.Item
        label="Servings"
        name="servings"
        rules={[
          {
            required: true,
            message: 'Please input a servings!',
          },
        ]}
      >
        <Input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </Form>
  );
}

export default AddFoodForm;
