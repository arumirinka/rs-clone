import React, { useState } from 'react';
import { Button } from 'antd';
import content from '../../content.json';
import ChooseTranslationBtn from './ChooseTranslationBtn';
import './chooseTranslation.css';

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

  const randomWords:string[][] = words
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  //   const m = randomWords;
  console.log(randomWords);
  //   const randomWords = createRandomWords();
  const [wordsArray, setWordsArray] = useState(randomWords);
  const wordToCheck:string = wordsArray[0][0];
  const translationToCheck:string = wordsArray[0][1];

  const showNewWords = ():void => {
    const newWords = words
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setWordsArray(newWords);
    //   console.log(wordsArray);
  };

  const arr:number[] = [0, 1, 2, 3];
  arr.sort(() => 0.5 - Math.random());
  return (
    <div className="chooseTranslation-container">
      <div className="chooseTranslation-container__word">Выберите перевод для слова &quot;{wordToCheck}&quot;</div>
      <div className="chooseTranslation-container__buttons">
        <ChooseTranslationBtn
          translation={wordsArray[arr[0]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={wordsArray[arr[1]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={wordsArray[arr[2]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={wordsArray[arr[3]][1]}
          translationToCheck={translationToCheck}
        />
      </div>
      <Button type="primary" htmlType="submit" onClick={() => { showNewWords(); }}>Продолжить</Button>
    </div>
  );
};
export default chooseTranslation;
