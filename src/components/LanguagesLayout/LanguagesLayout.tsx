import React from 'react';
import './LanguagesLayout.css';
import { useSelector } from 'react-redux';
import BlaBlaImg from './BlaBlaImg';
import KittyImg from './KittySvg';
import LanguageButton from './LanguageButton';
import { langsLayoutLangConst } from '../../assets/appLangConst';

const LanguagesLayout: React.FC = () => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

  return (
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
            {langsLayoutLangConst[appLang].header}
          </div>
          <div className="content__languages">
            <div className="languages__language">
              <LanguageButton language={langsLayoutLangConst[appLang].lang1} />
            </div>
            <div className="languages__language">
              <LanguageButton language={langsLayoutLangConst[appLang].lang2} />
            </div>
            <div className="languages__language">
              <LanguageButton language={langsLayoutLangConst[appLang].lang3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesLayout;
