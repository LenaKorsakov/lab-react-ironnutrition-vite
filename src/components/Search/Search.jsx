import { Input, Button, Form } from 'antd';
import { useState } from 'react';

function Search({ onSearchInput, onIsSearching }) {
  const [searchName, setSearchName] = useState('');
  const [form] = Form.useForm();

  const handleSearchInput = (event) => {
    setSearchName(event.target.value);
    onSearchInput(searchName);
  };

  const handleFormSubmit = () => {
    onSearchInput(searchName);
  };

  const handleResetButton = () => {
    form.resetFields();
    onIsSearching(false);
  };

  return (
    <>
      <Form
        form={form}
        onFinish={handleFormSubmit}
        name="search"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off
    "
      >
        <Form.Item label="Search" name="search">
          <Input
            type="text"
            value={searchName}
            onChange={handleSearchInput}
            placeholder="input a search query"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Search
        </Button>
        <Button
          type="primary"
          style={{ margin: '5px' }}
          onClick={handleResetButton}
        >
          Reset
        </Button>
      </Form>
    </>
  );
}

export default Search;
