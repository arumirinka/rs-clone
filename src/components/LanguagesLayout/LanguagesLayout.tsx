import React from 'react';
import './LanguagesLayout.css';
import BlaBlaImg from './BlaBlaImg';
import KittyImg from './KittySvg';
import LanguageButton from './LanguageButton';
import { languagesText, languagesList } from './languagesTranslate';

const LanguagesLayout: React.FC = () => (
  <div className="main-container">
    <div className="main-container__inner-container">
      <div className="inner-container__images">
        <div className="images__logo">
          CATalie wanna speak
        </div>
        <div className="images__svg">
          <KittyImg />
          <BlaBlaImg />
        </div>
      </div>
      <div className="inner-container__content">
        <div className="content__text">
          {languagesText[0]}
        </div>
        <div className="content__languages">
          <div className="languages__language">
            <LanguageButton language={languagesList.lang1[0]} />
          </div>
          <div className="languages__language">
            <LanguageButton language={languagesList.lang2[0]} />
          </div>
          <div className="languages__language">
            <LanguageButton language={languagesList.lang3[0]} />
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default LanguagesLayout;
