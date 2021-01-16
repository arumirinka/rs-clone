import React, { useState } from 'react';
import Lesson from './Lesson';
import PieChart from './PieChart';
import './LessonsLayout.css';
import kitty from '../../assets/kittyWIthLaptop.svg';
import { lesson, lessonsText, chartLegend } from './lessonsTranslate';

const LessonsLayout: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  /* setChartValue - to update %  of completed lessons in chart => remove previous line */
  const [chartValue, setChartValue] = useState(2);
  return (
    <div className="outer-container">
      <div className="outer-container__inner-container">
        <div className="inner-container__text">
          {lessonsText[0]}
        </div>
        <div className="inner-container__content">
          <div className="content__image">
            <img src={kitty} alt="kitty with laptop" />
          </div>
          <div className="content__lessons">
            <Lesson lesson={lesson[0]} number={1} />
            <Lesson lesson={lesson[0]} number={2} />
            <Lesson lesson={lesson[0]} number={3} />
            <Lesson lesson={lesson[0]} number={4} />
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
