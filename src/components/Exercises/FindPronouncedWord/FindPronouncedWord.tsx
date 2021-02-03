import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './findPronouncedWord.css';
import { Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { findPronouncedWordConst, nextButtonConst } from '../../../assets/appLangConst';
import voiceLanguage from './voiceLanguage';

type Props = {
  words: string[][],
  progress: number,
  setProgress: React.Dispatch<React.SetStateAction<number>>,
  points: number,
  setPoints: React.Dispatch<React.SetStateAction<number>>,
  id: number,
  visibleID: number,
  setVisibleID: React.Dispatch<React.SetStateAction<number>>,
  lessonPlan: number[],
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  modalVisible: boolean,
  appLang: string,
  learningLang: string,
  progressGap: number,
};

const FindPronouncedWord = ({
  words, progress, setProgress, points, setPoints, id, visibleID, setVisibleID,
  lessonPlan, currentStep, setCurrentStep, modalVisible, appLang, learningLang, progressGap,
}: Props) => {
  function shuffle(array: any) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function pronounceWord(word: string) {
    const utter = new SpeechSynthesisUtterance();
    utter.lang = voiceLanguage[learningLang];
    utter.text = word;
    window.speechSynthesis.speak(utter);
  }

  if (!(id === visibleID)) {
    return null;
  }

  const NUMBER_OF_WORDS = 8;
  let currentArray = shuffle(words)
    .slice(0, NUMBER_OF_WORDS)
    .map((wordPair: string[]) => wordPair[0]);
  let currentPronouncedWord = currentArray[Math.floor(Math.random() * NUMBER_OF_WORDS)];

  const [currentWords, setCurrentWords] = useState(currentArray);
  const [pronounced, setPronounced] = useState(currentPronouncedWord);
  const [isNextDisabled, setNextDisabled] = useState(true);
  const [isRepeatDisabled, setRepeatDisabled] = useState(false);
  const wordsContainerRef: any = useRef(null);
  const nextButtonRef: any = useRef(null);
  const audioRef: any = useRef(null);
  const repeatButtonRef: any = useRef(null);

  useEffect(() => {
    pronounceWord(pronounced);
  }, [pronounced]);

  const showNewWords = (step: number) => {
    const MAX_PROGRESS = 100;

    if (progress === MAX_PROGRESS) {
      const parent = wordsContainerRef.current.parentNode;
      while (parent!.firstChild) {
        parent!.firstChild.remove();
      }
    } else {
      Array.from(wordsContainerRef.current.children).forEach((button: any) => {
        const theButton: HTMLButtonElement = button;
        theButton.classList.remove('find-pronounced__word--picked');
        theButton.classList.remove('find-pronounced__word--animate');
        theButton.classList.remove('find-pronounced__word--wrong');
        theButton.disabled = false;
      });

      setNextDisabled(true);
      setRepeatDisabled(false);
      nextButtonRef.current.classList.add('find-pronounced__next-button--hidden');

      setVisibleID(lessonPlan[step + 1]);
      setCurrentStep(step + 1);

      currentArray = shuffle(words)
        .slice(0, NUMBER_OF_WORDS)
        .map((wordPair: string[]) => wordPair[0]);
      currentPronouncedWord = currentArray[Math.floor(Math.random() * NUMBER_OF_WORDS)];
      setCurrentWords(currentArray);
      setPronounced(currentPronouncedWord);
    }
  };

  const step = useRef(currentStep);
  step.current = currentStep;
  const visRef = useRef(visibleID);
  visRef.current = visibleID;
  const modalRef = useRef(modalVisible);
  modalRef.current = modalVisible;

  const handleEnterPress = (event: any) => {
    if (visRef.current === id
      && event.key === 'Enter'
      && nextButtonRef.current
      && !nextButtonRef.current.disabled
      && !modalRef.current) {
      showNewWords(step.current);
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress);
    return () => {
      window.removeEventListener('keypress', handleEnterPress);
    };
  }, []);

  const selectSoundState = (state: { app: { isSoundOn: any; }; }) => state.app.isSoundOn;
  const isSoundOn = useSelector(selectSoundState);

  function playSound(url: string) {
    if (!isSoundOn) {
      return;
    }
    audioRef.current.src = url;
    audioRef.current.play();
  }

  function buttonClickHandler(evt: any) {
    const button = evt.target;
    const buttons = Array.from(button.parentNode.children);
    buttons.forEach((but: any) => {
      const b = but;
      b.disabled = true;
    });

    if (button.innerText === pronounced) {
      const CORRECT_URL = '../../../audio/success_sound.mp3';
      playSound(CORRECT_URL);
      button.classList.add('find-pronounced__word--picked');
      button.classList.add('find-pronounced__word--animate');
      setPoints(points + progressGap);
    } else {
      const ERROR_URL = '../../../audio/mistake_sound.mp3';
      playSound(ERROR_URL);
      button.classList.add('find-pronounced__word--wrong');
      const rightButton: any = buttons.find((but: any) => but.innerText === pronounced);
      rightButton.classList.add('find-pronounced__word--picked');
    }

    setNextDisabled(false);
    setRepeatDisabled(true);
    nextButtonRef.current.classList.remove('find-pronounced__next-button--hidden');
    setProgress(progress + progressGap);
  }

  return (
    <div className="find-pronounced">
      <h2>{findPronouncedWordConst[appLang].header}</h2>
      <div ref={wordsContainerRef} className="find-pronounced__words-container">
        {currentWords.map((word: string) => <button className="find-pronounced__word" type="button" key={word.toString()} onClick={(evt) => buttonClickHandler(evt)}>{word}</button>)}
      </div>
      <div className="find-pronounced__buttons-container">
        <Button
          ref={repeatButtonRef}
          className="find-pronounced__repeat-button"
          type="primary"
          onClick={() => { pronounceWord(pronounced); }}
          disabled={isRepeatDisabled}
        >
          <PlayCircleOutlined />
        </Button>
        <Button
          ref={nextButtonRef}
          className="find-pronounced__next-button find-pronounced__next-button--hidden"
          type="primary"
          onClick={() => { showNewWords(currentStep); }}
          disabled={isNextDisabled}
        >
          {nextButtonConst[appLang].nextButton}
        </Button>
      </div>
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default FindPronouncedWord;
