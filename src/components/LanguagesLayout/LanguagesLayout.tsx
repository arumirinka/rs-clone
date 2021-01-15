import React from 'react';
import './LanguagesLayout.css';
import BlaBlaImg from './BlaBlaImg';
import KittyImg from './KittySvg';
import { languagesText, languagesList } from './languagesTranslate';

const LanguagesLayout: React.FC = () => (
  <div className="main-container">
    <div className="main-container__inner-container">
      <div className="inner-container__images">
        <KittyImg />
        <BlaBlaImg />
      </div>
      <div className="inner-container__content">
        <div className="content__text">
          {languagesText[0]}
        </div>
        <div className="content__languages">
          <div className="languages__language">
            <button type="button" className="language__button">
              {languagesList.lang1[0]}
            </button>
          </div>
          <div className="languages__language">
            <button type="button" className="language__button">
              {languagesList.lang2[0]}
            </button>
          </div>
          <div className="languages__language">
            <button type="button" className="language__button">
              {languagesList.lang3[0]}
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default LanguagesLayout;
