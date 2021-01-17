import React, { useState } from 'react';
import {
  Modal, Button,
} from 'antd';
import 'antd/dist/antd.css';
import './RegistrationForm.css';
import RegistrationForm from './RegistrationForm';

const RegistrationFormInModal: React.FC = () => {
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
        Войти
      </Button>
      <Modal
        title="Пожалуйста, войдите в аккаунт или зарегистрируйтесь"
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
