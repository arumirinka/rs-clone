import React from 'react';
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

  const createRandomWords = ():string[] => words
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  const randomWords = createRandomWords();
  const wordToCheck:string = randomWords[0][0];
  const translationToCheck:string = randomWords[0][1];

  const arr:number[] = [0, 1, 2, 3];
  arr.sort(() => 0.5 - Math.random());

  return (
    <div className="chooseTranslation-container">
      <div className="chooseTranslation-container__word">Выберите перевод для слова &quot;{wordToCheck}&quot;</div>
      <div className="chooseTranslation-container__buttons">
        <ChooseTranslationBtn
          translation={randomWords[arr[0]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={randomWords[arr[1]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={randomWords[arr[2]][1]}
          translationToCheck={translationToCheck}
        />
        <ChooseTranslationBtn
          translation={randomWords[arr[3]][1]}
          translationToCheck={translationToCheck}
        />
      </div>
      <Button type="primary" htmlType="submit">Продолжить</Button>
    </div>
  );
};
export default chooseTranslation;
