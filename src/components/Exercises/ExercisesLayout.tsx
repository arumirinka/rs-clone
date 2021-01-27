import React, { useState } from 'react';
import { Progress } from 'antd';
// import ChooseTranslation from './ChooseTranslation';
import MakeAPhrase from './MakeAPhrase/MakeAPhrase';
import content from '../../content.json';
import KittyWithPencil from './KittyWithPencil';
import './chooseTranslation.css';

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
  lesson: 4,
};
// const { words } = theContent[current.UI][current.learning][`level${current.level}`]
// [`lesson${current.lesson}`];
// // to increase number of random words - slice the array
// const randomWords:string[][] = words
//   .sort(() => 0.5 - Math.random())
//   .slice(0, 10);

const { phrases } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];
const randomPhrases:string[][] = phrases
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);
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
        <MakeAPhrase
          randomPhrases={randomPhrases}
          progress={progress}
          setProgress={setProgress}
        />
        {/* <ChooseTranslation
          randomWords={randomWords}
          progress={progress}
          setProgress={setProgress}
        /> */}
      </div>
    </div>
  );
};
export default ExercisesLayout;
