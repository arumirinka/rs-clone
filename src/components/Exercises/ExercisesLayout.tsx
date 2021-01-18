import React from 'react';
import { Progress } from 'antd';
import ChooseTranslation from './ChooseTranslation';

const ExercisesLayout: React.FC = () => (
  <div className="exercises-container">
    <div className="exercises-container__progress-bar">
      <Progress percent={10} showInfo={false} />
    </div>
    <ChooseTranslation />
  </div>
);
export default ExercisesLayout;
