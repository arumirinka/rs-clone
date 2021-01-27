import React, { useState } from 'react';
import KittyImg from './KittyImg';
import Lesson from './Lesson';
import PieChart from './PieChart';
import './LessonsLayout.css';
import '../../assets/lock.svg';
import { lesson, lessonsText, chartLegend } from './lessonsTranslate';

const LessonsLayout: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  /* setChartValue - to update %  of completed lessons in chart => remove previous line */
  const [chartValue, setChartValue] = useState(0);
  return (
    <div className="outer-container">
      <div className="outer-container__inner-container">
        <div className="inner-container__text">
          {lessonsText[0]}
        </div>
        <div className="inner-container__content">
          <div className="content__image">
            <KittyImg />
          </div>
          <div className="content__lessons">
            <Lesson lesson={lesson[0]} number={1} isOpen />
            <Lesson lesson={lesson[0]} number={2} isOpen={false} />
            <Lesson lesson={lesson[0]} number={3} isOpen={false} />
            <Lesson lesson={lesson[0]} number={4} isOpen={false} />
            <Lesson lesson={lesson[0]} number={5} isOpen={false} />
            <Lesson lesson={lesson[0]} number={6} isOpen={false} />
          </div>
          <div className="content__chart">
            <PieChart done={chartLegend[0][0]} toDo={chartLegend[1][0]} value={chartValue} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LessonsLayout;
