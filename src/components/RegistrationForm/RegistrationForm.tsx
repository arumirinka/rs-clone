import React, { useState } from 'react';
import {
  Modal, Button, Form, Input, Checkbox,
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

const Demo: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
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

const RegistrationForm: React.FC = () => {
  const [visible, setVisible]: any[] = useState(false);
  // const [confirmLoading, setConfirmLoading]: any[] = useState(false);
  // const [modalText, setModalText]: any[] = useState('Content of the modal');

  const showModal = (): void => {
    setVisible(true);
  };

  // const handleOk = (): void => {
  //   // setModalText('The modal will be closed after two seconds');
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //     setConfirmLoading(false);
  //   }, 2000);
  // };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Регистрация/ Вход
      </Button>
      <Modal
        title="Пожалуйста, войдите в аккаунт или зарегистрируйтесь"
        visible={visible}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <Demo />
      </Modal>
    </>
  );
};

export default RegistrationForm;
