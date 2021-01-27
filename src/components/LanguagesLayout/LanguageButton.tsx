import React, { useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './LanguagesLayout.css';
import { useSelector, useDispatch } from 'react-redux';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import '../RegistrationForm/RegistrationForm.css';
import { useAuth } from '../../hooks/auth.hook';
import { appLangConst } from '../../assets/appLangConst';
import { fetchData, changeLearnLang } from '../../redux/actions';

type Props = {
  language: string;
};

const LanguageButton = ({ language }: Props) => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

  const dispatch = useDispatch();

  const [visible, setVisible]: any[] = useState(false);

  const showModal = (): void => {
    setVisible(true);
  };

  const handleLangBtnClick = (): void => {
    showModal();
    dispatch(changeLearnLang(language));
    dispatch(fetchData(appLang, language));
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const { token } = useAuth();
  const isAuthenticated = !!token;
  return (
    <>
      <button type="button" className="language__button" onClick={handleLangBtnClick}>
        {language}
      </button>
      {!isAuthenticated && (
      <Modal
        title={appLangConst[appLang].plzLogin}
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
