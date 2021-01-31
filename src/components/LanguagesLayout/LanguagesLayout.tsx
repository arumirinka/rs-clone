import React from 'react';
import './LanguagesLayout.css';
import BlaBlaImg from './BlaBlaImg';
import KittyImg from './KittySvg';
import LanguageButton from './LanguageButton';
import { mainPageConst } from '../../assets/appLangConst';

interface IProps {
  appLang: string
}
const LanguagesLayout: React.FC<IProps> = ({ appLang }: IProps) => (
  <div className="lang-container">
    <div className="lang-container__inner-container1">
      <div className="inner-container1__images">
        <div className="images__logo">
          CATalie wanna speak
        </div>
        <div className="images__svg">
          <KittyImg />
          <BlaBlaImg />
        </div>
      </div>
      <div className="inner-container1__content">
        <div className="content__text">
          {mainPageConst[appLang].helpCatalie}

        </div>
        <div className="content__languages">
          <div className="languages__language">
            <LanguageButton language={mainPageConst[appLang].english} />
          </div>
          <div className="languages__language">
            <LanguageButton language={mainPageConst[appLang].japanese} />
          </div>
          <div className="languages__language">
            <LanguageButton language={mainPageConst[appLang].french} />
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default LanguagesLayout;
