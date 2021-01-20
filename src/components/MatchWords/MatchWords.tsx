import React, { useState, useEffect } from 'react';
import content from '../../content.json';
import './MatchWords.css';
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

  useEffect(() => {
    if (picked.size === currentWords.length) {
      console.log('You won');
    }
  }, [picked.size]);

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
        button.classList.add('match-words__word--picked');
        setPicked(() => picked.add(button.innerText));
        setPrev(null);
        button.disabled = true;
      } else {
        console.log('This is wrong');
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
    </div>
  );
};

export default WordsList;
