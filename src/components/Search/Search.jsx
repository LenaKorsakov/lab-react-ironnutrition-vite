import { Input, Button, Form } from 'antd';

function Search({ searchName, setSearchName }) {
  const [form] = Form.useForm();

  const handleSearchInput = (event) => {
    setSearchName(event.target.value);
  };

  const handleResetButton = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        form={form}
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
