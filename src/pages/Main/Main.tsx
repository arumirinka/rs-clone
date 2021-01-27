import React from 'react';
import LanguagesLayout from '../../components/LanguagesLayout/LanguagesLayout';

interface IProps {
  appLang: string
}

const Main: React.FC<IProps> = ({ appLang }: IProps) => (
  <LanguagesLayout appLang={appLang} />
);

export default Main;
