import React from 'react';
import BlaBlaImg from '../../components/LanguagesLayout/BlaBlaImg';
import KittyImg from '../../components/LessonsLayout/KittyImg';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const LoginPage: React.FC = () => (
  <>
    <div className="lang-container">
      <div className="lang-container__inner-container1">
        <div className="inner-container1__images">
          <div className="images__logo">CATalie wanna speak</div>
          <div className="images__svg">
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
