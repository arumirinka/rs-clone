import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Progress } from 'antd';
// import ChooseTranslation from './ChooseTranslation/ChooseTranslation';
// import MatchWords from './MatchWords/MatchWords';
import MakeAPhrase from './MakeAPhrase/MakeAPhrase';
import content from '../../content.json';
import KittyWithPencil from './KittyWithPencil';
import './ChooseTranslation/chooseTranslation.css';

interface IProps {
  appLang: string
}

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
// const { words } = theContent[current.UI][current.learning][`level${current.level}`]
// [`lesson${current.lesson}`];
// to increase number of random words - slice the array
// const randomWords:string[][] = words
//   .sort(() => 0.5 - Math.random())
//   .slice(0, 10);

const { phrases } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];
const randomPhrases:string[][] = phrases
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);
const ExercisesLayout: React.FC<IProps> = ({ appLang }: IProps) => {
  const [progress, setProgress] = useState(0);
  const history = useHistory();
  const handleEscPress = (event:any) => {
    if (event.key === 'Escape') {
      history.push('/lessons');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });
  return (
    <div className="exercises-container">
      <div className="exercises-container__kitty">
        <KittyWithPencil />
      </div>
      <div className="exercises-container__content">
        <div className="exercises-container__progress-bar">
          <Progress percent={progress} showInfo={false} />
        </div>
        {/* <ChooseTranslation
          randomWords={randomWords}
          progress={progress}
          setProgress={setProgress}
          appLang={appLang}
        /> */}
        {/* <MatchWords words={words} current={current} progress={progress}
        setProgress={setProgress} /> */}
        <MakeAPhrase
          randomPhrases={randomPhrases}
          progress={progress}
          setProgress={setProgress}
          appLang={appLang}
        />
      </div>
    </div>
  );
};
export default ExercisesLayout;
