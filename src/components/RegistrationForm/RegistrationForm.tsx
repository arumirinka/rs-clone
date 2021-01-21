import React, { useContext, useState } from 'react';
import {
  Button, message, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined } from '@ant-design/icons';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import './RegistrationForm.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const RegistrationForm: React.FC = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request(
        '/api/auth/register',
        'POST',
        { ...form },
      );
      message.success(data.message);
    } catch (e) {
      message.error(e.message);
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        '/api/auth/login',
        'POST',
        { ...form },
      );
      message.success(data.message);
      auth.login(data.token, data.userId);
    } catch (e) {
      message.error(e.message);
    }
  };

  return (
    <Form
      /* eslint-disable react/jsx-props-no-spreading */
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'Некорректный email',
          },
          {
            required: true,
            message: 'Введите email!',
          },
        ]}
        name="email"
      >
        <Input
          name="email"
          id="email"
          value={form.email}
          onChange={changeHandler}
        />
      </Form.Item>

      <Form.Item
        label="Пароль"
        rules={[
          {
            min: 6, message: 'Не менее 6 символов',
          },
          {
            required: true,
            message: 'Введите пароль!',
          },
        ]}
        name="password"
      >
        <Input.Password
          name="password"
          id="password"
          value={form.password}
          onChange={changeHandler}
        />
      </Form.Item>

      <div className="sign-in-wrapper">
        <Form.Item {...tailLayout} style={{ marginBottom: '1em' }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            onClick={loginHandler}
          >
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
        <Button
          type="primary"
          htmlType="submit"
          className="signup-btn"
          onClick={registerHandler}
          disabled={loading}
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
