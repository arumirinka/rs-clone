import React from 'react';
import './LanguagesLayout.css';
import BlaBlaImg from './BlaBlaImg';
import KittyImg from './KittySvg';
import { languagesText, languagesList } from './languagesTranslate';

const LanguagesLayout: React.FC = () => (
  <div className="main-container">
    <div className="inner-container">
      <div className="inner-container__images">
        <KittyImg />
        <BlaBlaImg />
      </div>
      <div className="inner-container__content">
        <div className="content__text">
          {languagesText[0]}
        </div>
        <div className="content__languages">
          <button type="button" className="languages__language">
            {languagesList.lang1[0]}
          </button>
          <button type="button" className="languages__language">
            {languagesList.lang2[0]}
          </button>
          <button type="button" className="languages__language">
            {languagesList.lang3[0]}
          </button>
        </div>
      </div>
    </div>

  </div>
);

export default LanguagesLayout;
