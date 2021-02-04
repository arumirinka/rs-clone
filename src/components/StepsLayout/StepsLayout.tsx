import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CSS from 'csstype';
import { changeLevel } from '../../redux/actions';
import './StepsLayout.css';
import arrowLogo from '../../assets/arrowRight.svg';
import kittyImg from '../../assets/superKitty.svg';
import { lessonsConst } from '../../assets/appLangConst';

const numberOfLessons = 4;

const StepsLayout: React.FC = () => {
  const history = useHistory();
  const goToLessons = () => {
    history.push('/lessons');
  };

  const dispatch = useDispatch();
  const changeCurrentLevel = (level: number) => {
    dispatch(changeLevel(level));
  };

  const selectAppState = (state: { app: any; }) => state.app;
  const { appLang, learnLang } = useSelector(selectAppState);

  const selectStats = (state: { stats: any; }) => state.stats;
  const stats = useSelector(selectStats);

  const numberOfLevels = learnLang === 'english' ? 5 : 2;

  const isLevelOpen = (num: number) => {
    if (num > numberOfLevels) {
      console.log('Sorry, there is no content for this lesson yet!');
      return false;
    }

    const prevLevel = stats[appLang][learnLang][`level${num - 1}`];
    let prevScore = 0;
    if (prevLevel) {
      prevScore = (prevLevel.lesson1 || 0)
        + (prevLevel.lesson2 || 0)
        + (prevLevel.lesson3 || 0)
        + (prevLevel.lesson4 || 0);
    }
    return (prevScore / numberOfLessons) >= 85;
  };

  const [kittyPosition, setKittyPosition] = useState({
    left: '5%',
    top: '46%',
  });

  const refContainer: any = useRef(0);

  const setLessonsPage = (event: React.MouseEvent, levelNum: number) => {
    if ((levelNum > 1) && (!isLevelOpen(levelNum))) {
      return;
    }

    const containerMaxWidth: number = 1200;
    const distanceFromTop: number = window.pageYOffset
    + refContainer.current.getBoundingClientRect().top;

    let left: string;
    const top: string = `${event.pageY - distanceFromTop}px`;

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

    changeCurrentLevel(levelNum);

    setTimeout(() => {
      goToLessons();
    }, 1000);
  };

  const levelOpenStyle: CSS.Properties = {
    background: '#1C8673',
    filter: 'none',
  };

  return (
    <div ref={refContainer} className="steps-page-main-container">
      <img src={kittyImg} alt="super kitty" className="kitty-img anim-11" style={kittyPosition} />
      <div className="steps-сontainer">
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-2" />
          <button
            type="button"
            className="step__level anim-1"
            style={levelOpenStyle}
            data-id="1"
            onClick={(event: React.MouseEvent) => setLessonsPage(event, 1)}
          >
            {lessonsConst[appLang].level} 1
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-4" />
          <button
            type="button"
            className={isLevelOpen(2) ? 'step__level anim-3' : 'step__level anim-3 step__level--closed'}
            style={isLevelOpen(2) ? levelOpenStyle : {}}
            data-id="2"
            onClick={(event: React.MouseEvent) => setLessonsPage(event, 2)}
          >
            {lessonsConst[appLang].level} 2
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-6" />
          <button
            type="button"
            className={isLevelOpen(3) ? 'step__level anim-5' : 'step__level anim-5 step__level--closed'}
            style={isLevelOpen(3) ? levelOpenStyle : {}}
            data-id="3"
            onClick={(event: React.MouseEvent) => setLessonsPage(event, 3)}
          >
            {lessonsConst[appLang].level} 3
          </button>
        </div>
        <div className="steps-container__step">
          <img src={arrowLogo} alt="arrow right" className="step__arrow-right anim-8" />
          <button
            type="button"
            className={isLevelOpen(4) ? 'step__level anim-7' : 'step__level anim-7 step__level--closed'}
            style={isLevelOpen(4) ? levelOpenStyle : {}}
            data-id="4"
            onClick={(event: React.MouseEvent) => setLessonsPage(event, 4)}
          >
            {lessonsConst[appLang].level} 4
          </button>
        </div>
        <div className="steps-container__step anim-10">
          <button
            type="button"
            className={isLevelOpen(5) ? 'step__level anim-9' : 'step__level anim-9 step__level--closed'}
            style={isLevelOpen(5) ? levelOpenStyle : {}}
            data-id="5"
            onClick={(event: React.MouseEvent) => setLessonsPage(event, 5)}
          >
            {lessonsConst[appLang].level} 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsLayout;
