import React from 'react';
import Lesson from './Lesson';
import './LessonsLayout.css';
import kitty from '../../assets/kittyWIthLaptop.svg';
import { lesson, lessonsText } from './lessonsTranslate';

const LessonsLayout: React.FC = () => (
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
        <div className="content__chart" />
      </div>
    </div>
  </div>
);
export default LessonsLayout;
