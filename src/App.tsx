import React from 'react';
import './App.css';
import StepsLayout from './components/StepsLayout/StepsLayout';
import RegistrationFormInModal from './components/RegistrationForm/RegistrationFormInModal';

export default function App() {
  return (
    <>
      <RegistrationFormInModal />
      <StepsLayout />
    </>
  );
}
