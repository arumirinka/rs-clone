import React from 'react';
import './StepsLayout.css';
import arrowLogo from '../../assets/arrowRight.svg';

const StepsLayout = () => (
  <div className="steps-сontainer">
    <div className="steps-container__step">
      <img src={arrowLogo} alt="arrow right" className="step__arrow-right" />
      <div className="step__level">
        Уровень 1
      </div>
    </div>
    <div className="steps-container__step">
      <img src={arrowLogo} alt="arrow right" className="step__arrow-right" />
      <div className="step__level">
        Уровень 2
      </div>
    </div>
    <div className="steps-container__step">
      <img src={arrowLogo} alt="arrow right" className="step__arrow-right" />
      <div className="step__level">
        Уровень 3
      </div>
    </div>
    <div className="steps-container__step">
      <img src={arrowLogo} alt="arrow right" className="step__arrow-right" />
      <div className="step__level">
        Уровень 4
      </div>
    </div>
    <div className="steps-container__step">
      <div className="step__level">
        Уровень 5
      </div>
    </div>
  </div>
);
export default StepsLayout;
