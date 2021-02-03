import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button, message, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import './RegistrationForm.css';
import { appLangConst } from '../../assets/appLangConst';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const RegistrationForm: React.FC = () => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

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
        'https://enigmatic-peak-52817.herokuapp.com/api/auth/register',
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
        'https://enigmatic-peak-52817.herokuapp.com/api/auth/login',
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
        label={appLangConst[appLang].email}
        rules={[
          {
            type: 'email',
            message: 'Email is incorrect',
          },
          {
            required: true,
            message: 'Enter email!',
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
        label={appLangConst[appLang].password}
        rules={[
          {
            min: 6,
            message: 'At least 6 characters',
          },
          {
            required: true,
            message: 'Enter password!',
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
            {appLangConst[appLang].login}
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="signup-btn"
            onClick={registerHandler}
            disabled={loading}
          >
            {appLangConst[appLang].register}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegistrationForm;
