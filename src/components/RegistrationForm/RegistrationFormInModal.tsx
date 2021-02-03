import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Modal, Button,
} from 'antd';
import 'antd/dist/antd.css';
import './RegistrationForm.css';
import RegistrationForm from './RegistrationForm';
import { appLangConst } from '../../assets/appLangConst';

const RegistrationFormInModal: React.FC = () => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

  const [visible, setVisible]: any[] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {appLangConst[appLang].login}
      </Button>
      <Modal
        title={appLangConst[appLang].plzLogin}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm />
      </Modal>
    </>
  );
};

export default RegistrationFormInModal;
