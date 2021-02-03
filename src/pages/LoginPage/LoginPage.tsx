import React from 'react';
import BlaBlaImg from '../../components/LanguagesLayout/BlaBlaImg';
import KittyImg from '../../components/LessonsLayout/KittyImg';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './loginPage.css';

const LoginPage: React.FC = () => (
  <>
    <div className="lang-container">
      <div className="lang-container__inner-container1 login-container__inner-contaner1">
        <div className="inner-container1__images inner-container1__registration-images">
          <div className="images__logo registration__logo">CATalie wanna speak</div>
          <div className="images__svg registration__svg">
            <KittyImg />
            <BlaBlaImg />
          </div>
        </div>
        <div className="form-container__content">
          <RegistrationForm />
        </div>
      </div>
    </div>
  </>
);

export default LoginPage;
