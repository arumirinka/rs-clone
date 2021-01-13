import React, { useState } from 'react';
import CSS from 'csstype';
import './StepsLayout.css';
import arrowLogo from '../../assets/arrowRight.svg';
import kittyImg from '../../assets/superKitty.svg';

const StepsLayout: React.FC = () => {
  const [position, setPosition] = useState({
    left: '5%',
    top: '46%',
  });
  const setLessonsPage = (event: React.MouseEvent) => {
    event.preventDefault();
    const left:string = `${(event.pageX - 30).toString()}px`;
    const top:string = `${(event.pageY - 30).toString()}px`;
    const obj = {
      left,
      top,
    };
    setPosition(obj);
  };

  const styles: CSS.Properties = {
    position: 'relative', margin: '20px auto', padding: '10px', maxWidth: '1200px',
  };

  return (
    <div style={styles}>
      <img src={kittyImg} alt="super kitty" className="kitty-img anim-11" style={position} />
      <div className="steps-сontainer">
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-2" />
          <button type="button" className="step__level anim-1" data-id="1" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 1
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-4" />
          <button type="button" className="step__level anim-3" data-id="2" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 2
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-6" />
          <button type="button" className="step__level anim-5" data-id="3" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 3
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-8" />
          <button type="button" className="step__level anim-7" data-id="4" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 4
          </button>
        </div>
        <div className="steps-container__step anim-10">
          <button type="button" className="step__level anim-9" data-id="5" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 5
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepsLayout;
