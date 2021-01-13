import React from 'react';
import {
  Button, Form, Input, Checkbox,
} from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined } from '@ant-design/icons';
import './RegistrationForm.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const RegistrationForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
    /* eslint-disable react/jsx-props-no-spreading */
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите логин.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль.' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <div className="sign-in-wrapper">
        <Form.Item {...tailLayout} style={{ marginBottom: '1em' }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout} style={{ marginBottom: '1em' }}>
          <Button type="primary" htmlType="submit">
            Войти через Github
            <GithubOutlined style={{ color: 'black' }} />
          </Button>
        </Form.Item>
      </div>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="signup-btn">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
