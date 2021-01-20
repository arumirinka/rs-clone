import React, { useState, useEffect, useRef } from 'react';
import './MatchWords.css';
import { Button } from 'antd';
import content from '../../content.json';
import voiceLanguage from './voiceLanguage';

const WordsList: React.FC = () => {
  const [picked, setPicked] = useState(new Set(''));

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

  function shuffle(array: any) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const theContent:any = content;
  const { words } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];
  const NUMBER_OF_WORDS = 5;
  const currentArray = shuffle(shuffle(words).slice(0, NUMBER_OF_WORDS).flat());
  const [currentWords] = useState(currentArray);

  function pronounceWord(word: string) {
    const utter = new SpeechSynthesisUtterance();
    utter.lang = voiceLanguage[current.learning];
    utter.text = word;
    window.speechSynthesis.speak(utter);
  }

  const [prev, setPrev]: [any, any] = useState(null);

  const nextButtonRef:any = useRef(null);

  useEffect(() => {
    if (picked.size === currentWords.length) {
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.classList.remove('match-word__next-button--hidden');
    }
  }, [picked.size]);

  const audioRef:any = useRef(null);

  function playSound(url: string) {
    audioRef.current.src = url;
    audioRef.current.play();
  }

  function buttonClickHandler(evt: any) {
    const button = evt.target;
    const isOriginal = words.some((pair: string[]) => pair[0] === button.innerText);
    if (isOriginal) {
      pronounceWord(button.innerText);
    }
    if (prev === null) {
      setPicked(() => picked.add(button.innerText));
      button.classList.add('match-words__word--picked');
      setPrev(evt);
      button.disabled = true;
    } else {
      const wordPair = words.find((pair: string[]) => pair.includes(prev.target.innerText));
      if (wordPair.includes(button.innerText)) {
        const CORRECT_URL = './sounds/correct.mp3';
        playSound(CORRECT_URL);
        button.classList.add('match-words__word--picked');
        setPicked(() => picked.add(button.innerText));
        setPrev(null);
        button.disabled = true;
      } else {
        const ERROR_URL = './sounds/error.mp3';
        playSound(ERROR_URL);
        prev.target.classList.remove('match-words__word--picked');
        prev.target.disabled = false;
        setPrev(null);
      }
    }
  }

  return (
    <div className="match-words">
      <h2>Match words and translations</h2>
      <div className="match-words__words-container">
        {currentWords.map((word: string) => <button className="match-words__word" type="button" key={word.toString()} onClick={(evt) => buttonClickHandler(evt)}>{word}</button>)}
      </div>
      <Button ref={nextButtonRef} className="match-word__next-button match-word__next-button--hidden" type="primary" disabled>Next</Button>
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default WordsList;
