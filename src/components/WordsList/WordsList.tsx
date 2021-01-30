import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import content from '../../content.json';
import './WordsList.css';
import voiceLanguage from './voiceLanguage';
import { wordsListConst, nextButtonConst } from '../../assets/appLangConst';

const WordsList: React.FC = () => {
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

  const theContent:any = content;
  const { words } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];

  function handleWordClick(word: string) {
    const utter = new SpeechSynthesisUtterance();
    utter.lang = voiceLanguage[current.learning];
    utter.text = word;
    window.speechSynthesis.speak(utter);
  }

  return (
    <div className="words">
      <h2 className="words__header">{wordsListConst[current.UI].header}</h2>
      <table className="words__table">
        <thead />
        <tbody>
          {words.map((word:string[]) => (
            <tr key={word.toString()}>
              <td>
                <div className="words__word">{word[0]}</div>
              </td>
              <td className="words__play-word">
                <button className="words__play-button" type="button" onClick={() => handleWordClick(word[0])}>
                  <PlayCircleOutlined />
                </button>
              </td>
              <td className="words__word">
                <div>{word[1]}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/lessons/exercises">
        <Button type="primary">
          {nextButtonConst[current.UI].nextButton}
        </Button>
      </Link>
    </div>
  );
};

export default WordsList;
