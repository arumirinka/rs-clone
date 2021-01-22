import React from 'react';
import {
  Button, Form, Input,
} from 'antd';
import 'antd/dist/antd.css';
import { GithubOutlined } from '@ant-design/icons';
import './RegistrationForm.css';
import { appLangConst } from '../../assets/appLangConst';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};
interface IProps {
  appLang: string
}
const RegistrationForm: React.FC<IProps> = ({ appLang }:IProps) => {
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
        label={appLangConst[appLang].email}
        name="username"
        rules={[{ required: true, message: appLangConst[appLang].plzLogin }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={appLangConst[appLang].password}
        name="password"
        rules={[{ required: true, message: appLangConst[appLang].passwordMsg }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="sign-in-wrapper">
        <Form.Item {...tailLayout} style={{ marginBottom: '1em' }}>
          <Button type="primary" htmlType="submit">
            {appLangConst[appLang].login}
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout} style={{ marginBottom: '1em' }}>
          <Button type="primary" htmlType="submit">
            {appLangConst[appLang].loginGithub}
            <GithubOutlined style={{ color: 'black' }} />
          </Button>
        </Form.Item>
      </div>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="signup-btn">
          {appLangConst[appLang].register}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
