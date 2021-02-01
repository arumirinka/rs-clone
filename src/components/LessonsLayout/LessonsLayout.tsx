import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import KittyImg from './KittyImg';
import Lesson from './Lesson';
import PieChart from './PieChart';
import './LessonsLayout.css';
import '../../assets/lock.svg';
import { lessonsConst } from '../../assets/appLangConst';

const LessonsLayout: React.FC = () => {
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  /* setChartValue - to update %  of completed lessons in chart => remove previous line */
  const [chartValue, setChartValue] = useState(0);
  return (
    <div className="outer-container">
      <div className="outer-container__inner-container">
        <div className="inner-container__text">
          { lessonsConst[appLang].lessonsIntro}
        </div>
        <div className="inner-container__content">
          <div className="content__image">
            <KittyImg />
          </div>
          <div className="content__lessons">
            <Lesson lesson={lessonsConst[appLang].lesson} number={1} isOpen />
            <Lesson lesson={lessonsConst[appLang].lesson} number={2} isOpen={false} />
            <Lesson lesson={lessonsConst[appLang].lesson} number={3} isOpen={false} />
            <Lesson lesson={lessonsConst[appLang].lesson} number={4} isOpen={false} />
          </div>
          <div className="content__chart">
            <PieChart
              done={lessonsConst[appLang].chartCompleted}
              toDo={lessonsConst[appLang].chartLeft}
              value={chartValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LessonsLayout;
