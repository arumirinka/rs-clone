import React, { useState, useRef } from 'react';
import CSS from 'csstype';
import './StepsLayout.css';
import arrowLogo from '../../assets/arrowRight.svg';
import kittyImg from '../../assets/superKitty.svg';
import { lessonsConst } from '../../assets/appLangConst';

interface IProps {
  appLang: string
}

const StepsLayout: React.FC<IProps> = ({ appLang }: IProps) => {
  const [kittyPosition, setKittyPosition] = useState({
    left: '5%',
    top: '46%',
  });
  const refContainer:any = useRef(0);
  const setLessonsPage = (event: React.MouseEvent) => {
    const containerMaxWidth: number = 1200;
    const distanceFromTop:number = window.pageYOffset
    + refContainer.current.getBoundingClientRect().top;
    let left:string;
    const top:string = `${event.pageY - distanceFromTop}px`;
    if (window.innerWidth > containerMaxWidth) {
      left = `calc(${event.pageX - ((window.innerWidth - containerMaxWidth) / 2)}px)`;
    } else {
      left = `${event.pageX}px`;
    }

    const obj = {
      left,
      top,
    };
    setKittyPosition(obj);
  };

  const styles: CSS.Properties = {
    position: 'relative', margin: '20px auto', padding: '10px', maxWidth: '1200px',
  };

  return (
    <div style={styles} ref={refContainer}>
      <img src={kittyImg} alt="super kitty" className="kitty-img anim-11" style={kittyPosition} />
      <div className="steps-сontainer">
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-2" />
          <button type="button" className="step__level anim-1" data-id="1" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            { lessonsConst[appLang].level} 1
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-4" />
          <button type="button" className="step__level anim-3" data-id="2" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            { lessonsConst[appLang].level} 2
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-6" />
          <button type="button" className="step__level anim-5" data-id="3" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            { lessonsConst[appLang].level} 3
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-8" />
          <button type="button" className="step__level anim-7" data-id="4" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            { lessonsConst[appLang].level} 4
          </button>
        </div>
        <div className="steps-container__step anim-10">
          <button type="button" className="step__level anim-9" data-id="5" onClick={(event: React.MouseEvent) => setLessonsPage(event)}>
            { lessonsConst[appLang].level} 5
          </button>
        </div>
      </div>
    </div>
  );
};
export default StepsLayout;
