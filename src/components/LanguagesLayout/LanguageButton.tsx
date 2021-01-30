import React, { useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './LanguagesLayout.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import '../RegistrationForm/RegistrationForm.css';
import { useAuth } from '../../hooks/auth.hook';

type Props = {
  language: string;
};

const LanguageButton = ({ language }: Props) => {
  const [visible, setVisible]: any[] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const { token } = useAuth();
  const isAuthenticated = !!token;
  return (
    <>
      <button type="button" className="language__button" onClick={showModal}>
        {language}
      </button>
      {!isAuthenticated && (
      <Modal
        title="Пожалуйста, войдите в аккаунт или зарегистрируйтесь"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <RegistrationForm />
      </Modal>
      )}
    </>
  );
};
export default LanguageButton;
