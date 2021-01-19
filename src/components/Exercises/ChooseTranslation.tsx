import React, { useState } from 'react';
import { Button, Progress } from 'antd';
import content from '../../content.json';
import ChooseTranslationBtn from './ChooseTranslationBtn';
import './chooseTranslation.css';

const getRandomIndexes = ():number[] => {
  const arr:number[] = [0, 1, 2, 3];
  return arr.sort(() => 0.5 - Math.random());
};
let array = getRandomIndexes();

const chooseTranslation = () => {
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

  const getRandomWords = ():string[][] => words
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  const randomWords = getRandomWords;
  const [wordsArray, setWordsArray] = useState(randomWords);
  const wordToCheck:string = wordsArray[0][0];
  const translationToCheck:string = wordsArray[0][1];

  const showNewWords = ():void => {
    const newWords = words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setWordsArray(newWords);
    array = getRandomIndexes();
  };
  const [progress, setProgress] = useState(0);
  console.log(array);
  return (
    <div className="chooseTranslation-container">
      <div className="exercises-container__progress-bar">
        <Progress percent={progress} showInfo={false} />
      </div>
      <div className="chooseTranslation-container__word">Выберите перевод для слова &quot;{wordToCheck}&quot;</div>
      <div className="chooseTranslation-container__buttons">
        <ChooseTranslationBtn
          translation={wordsArray[array[0]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
        />
        <ChooseTranslationBtn
          translation={wordsArray[array[1]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
        />
        <ChooseTranslationBtn
          translation={wordsArray[array[2]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
        />
        <ChooseTranslationBtn
          translation={wordsArray[array[3]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
        />
      </div>
      <Button type="primary" htmlType="submit" onClick={() => { showNewWords(); }}>Продолжить</Button>
    </div>
  );
};
export default chooseTranslation;
