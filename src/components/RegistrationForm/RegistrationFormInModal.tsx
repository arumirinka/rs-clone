import React, { useState } from 'react';
import {
  Modal, Button,
} from 'antd';
import 'antd/dist/antd.css';
import './RegistrationForm.css';
import RegistrationForm from './RegistrationForm';
import { appLangConst } from '../../assets/appLangConst';

interface IProps {
  appLang: string
}

const RegistrationFormInModal: React.FC<IProps> = ({ appLang }: IProps) => {
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
        <RegistrationForm
          appLang={appLang}
        />
      </Modal>
    </>
  );
};

export default RegistrationFormInModal;
