import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import KittyImg from './KittyImg';
import Lesson from './Lesson';
import PieChart from './PieChart';
import './LessonsLayout.css';
import '../../assets/lock.svg';
import { lessonsConst } from '../../assets/appLangConst';

const numberOfLessons = 4;

const LessonsLayout: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const {
    appLang, learnLang, level,
  } = useSelector(selectAppState);

  const selectStats = (state: { stats: any; }) => state.stats;
  const stats = useSelector(selectStats);

  const isLessonOpen = (num: number) => {
    const currentLevel = stats[appLang][learnLang][`level${level}`];
    if (currentLevel) {
      const openState = currentLevel[`lesson${num - 1}`];
      return Boolean(openState);
    }
    return false;
  };

  const getCurrentChartValue = () => {
    const currLevel = stats[appLang][learnLang][`level${level}`];
    let value = 0;
    if (currLevel) {
      value = (currLevel.lesson1 || 0)
        + (currLevel.lesson2 || 0)
        + (currLevel.lesson3 || 0)
        + (currLevel.lesson4 || 0);
    }
    return value / numberOfLessons;
  };

  return (
    <div className="outer-container">
      <div className="outer-container__inner-container">
        <div className="inner-container__text">
          <p>{lessonsConst[appLang].lessonsIntro}</p>
          <p>{lessonsConst[appLang].hotKeys}</p>
          <br />
        </div>
        <div className="inner-container__content">
          <div className="content__image">
            <KittyImg />
          </div>
          <div className="content__lessons">
            <Lesson lesson={lessonsConst[appLang].lesson} number={1} isOpen />
            <Lesson lesson={lessonsConst[appLang].lesson} number={2} isOpen={isLessonOpen(2)} />
            <Lesson lesson={lessonsConst[appLang].lesson} number={3} isOpen={isLessonOpen(3)} />
            <Lesson lesson={lessonsConst[appLang].lesson} number={4} isOpen={isLessonOpen(4)} />
            <Link to="/steps">
              {lessonsConst[appLang].backToLevels}
            </Link>
          </div>
          <div className="content__chart">
            <PieChart
              done={lessonsConst[appLang].chartCompleted}
              toDo={lessonsConst[appLang].chartLeft}
              value={getCurrentChartValue()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsLayout;
