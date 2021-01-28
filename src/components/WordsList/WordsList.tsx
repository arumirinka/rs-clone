import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './WordsList.css';
import voiceLanguage from './voiceLanguage';
import { wordsListHeader, practiseButtonText } from './wordListTranslate';

const WordsList: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const appState = useSelector(selectAppState);

  const selectData = (state: { data: { fetchedData: any; }; }) => state.data.fetchedData;
  const data = useSelector(selectData);

  interface Lesson {
    level: number;
    lesson: number;
  }

  const current:Lesson = {
    level: appState.level,
    lesson: appState.lesson,
  };

  const { words } = data[`level${current.level}`][`lesson${current.lesson}`];

  function handleWordClick(word: string) {
    const utter = new SpeechSynthesisUtterance();
    utter.lang = voiceLanguage[appState.learnLang];
    utter.text = word;
    window.speechSynthesis.speak(utter);
  }

  return (
    <div className="words">
      <h2 className="words__header">{wordsListHeader[appState.appLang]}</h2>
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
          {practiseButtonText[appState.appLang]}
        </Button>
      </Link>
    </div>
  );
};

export default WordsList;
