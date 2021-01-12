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
          <div className="step__level anim-1" data-id="1" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 1
          </div>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-4" />
          <div className="step__level anim-3" data-id="2" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 2
          </div>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-6" />
          <div className="step__level anim-5" data-id="3" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 3
          </div>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-8" />
          <div className="step__level anim-7" data-id="4" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 4
          </div>
        </div>
        <div className="steps-container__step anim-10">
          <div className="step__level anim-9" data-id="5" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            Уровень 5
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepsLayout;
