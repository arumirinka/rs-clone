import React, { useState } from 'react';
import { Progress } from 'antd';
// import ChooseTranslation from './ChooseTranslation';
import MatchWords from './MatchWords/MatchWords';
import content from '../../content.json';
import KittyWithPencil from './KittyWithPencil';

const theContent:any = content;
interface Lesson {
  UI:string;
  learning:string;
  level:number;
  lesson:number;
}
const current:Lesson = {
  UI: 'russian',
  learning: 'english',
  level: 1,
  lesson: 1,
};
const { words } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];
// to increase number of random words - slice the array
const randomWords:string[][] = words
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);
console.log(randomWords);

const ExercisesLayout: React.FC = () => {
  const [progress, setProgress] = useState(0);
  return (
    <div className="exercises-container">
      <div className="exercises-container__kitty">
        <KittyWithPencil />
      </div>
      <div className="exercises-container__content">
        <div className="exercises-container__progress-bar">
          <Progress percent={progress} showInfo={false} />
        </div>
        {/* <ChooseTranslation randomWords={randomWords} /> */}
        <MatchWords words={words} current={current} progress={progress} setProgress={setProgress} />
      </div>
    </div>
  );
};

export default ExercisesLayout;
