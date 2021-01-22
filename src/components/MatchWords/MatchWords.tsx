import React, { useState, useEffect, useRef } from 'react';
import './MatchWords.css';
import { Button } from 'antd';
import content from '../../content.json';
import voiceLanguage from './voiceLanguage';
import { matchWordsHeader, nextButtonText } from './matchWordsTranslate';

const WordsList: React.FC = () => {
  function shuffle(array: any) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

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
  const NUMBER_OF_WORDS = 5;
  let currentArray = shuffle(shuffle(words).slice(0, NUMBER_OF_WORDS).flat());

  const [currentWords, setCurrentWords] = useState(currentArray);
  const [picked, setPicked] = useState(new Set(''));
  const [prev, setPrev]: [any, any] = useState(null);
  const [isDisables, setDisabled]: [any, any] = useState(true);
  const wordsContainerRef:any = useRef(null);
  const nextButtonRef:any = useRef(null);
  const audioRef:any = useRef(null);

  const showNewWords = () => {
    Array.from(wordsContainerRef.current.children).forEach((button:any) => {
      const theButton:HTMLButtonElement = button;
      theButton.classList.remove('match-words__word--picked');
      theButton.classList.remove('match-words__word--animate');
      theButton.disabled = false;
    });
    setDisabled(true);
    nextButtonRef.current.classList.add('match-word__next-button--hidden');
    currentArray = shuffle(shuffle(words).slice(0, NUMBER_OF_WORDS).flat());
    setCurrentWords(currentArray);
    setPicked(new Set(''));
  };

  function pronounceWord(word: string) {
    const utter = new SpeechSynthesisUtterance();
    utter.lang = voiceLanguage[current.learning];
    utter.text = word;
    window.speechSynthesis.speak(utter);
  }

  useEffect(() => {
    if (picked.size === currentWords.length) {
      setDisabled(false);
      nextButtonRef.current.classList.remove('match-word__next-button--hidden');
    }
  }, [picked.size]);

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
      setDisabled(false);
    } else {
      const wordPair = words.find((pair: string[]) => pair.includes(prev.target.innerText));
      if (wordPair.includes(button.innerText)) {
        const CORRECT_URL = 'https://notificationsounds.com/storage/sounds/file-sounds-1151-swiftly.mp3';
        playSound(CORRECT_URL);
        button.classList.add('match-words__word--picked');
        button.classList.add('match-words__word--animate');
        prev.target.classList.add('match-words__word--animate');
        setPicked(() => picked.add(button.innerText));
        setPrev(null);
        button.disabled = true;
      } else {
        const ERROR_URL = 'https://notificationsounds.com/storage/sounds/file-sounds-1114-unsure.mp3';
        playSound(ERROR_URL);
        prev.target.classList.remove('match-words__word--picked');
        prev.target.classList.add('match-words__word--wrong');
        button.classList.add('match-words__word--wrong');
        setTimeout(() => {
          prev.target.classList.remove('match-words__word--wrong');
          button.classList.remove('match-words__word--wrong');
        }, 300);
        prev.target.disabled = false;
        setPrev(null);
      }
    }
  }

  return (
    <div className="match-words">
      <h2>{matchWordsHeader[current.UI]}</h2>
      <div ref={wordsContainerRef} className="match-words__words-container">
        {currentWords.map((word: string) => <button className="match-words__word" type="button" key={word.toString()} onClick={(evt) => buttonClickHandler(evt)}>{word}</button>)}
      </div>
      <Button ref={nextButtonRef} className="match-word__next-button match-word__next-button--hidden" type="primary" onClick={() => { showNewWords(); }} disabled={isDisables}>{nextButtonText[current.UI]}</Button>
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default WordsList;
