import React, { useState, useEffect, useRef } from 'react';
import './matchWords.css';
import { Button } from 'antd';
import { matchWordsConst, nextButtonConst } from '../../../assets/appLangConst';

type Props={
  words:string[][],
  current: any,
  progress:number,
  setProgress:React.Dispatch<React.SetStateAction<number>>,
  points:number,
  setPoints:React.Dispatch<React.SetStateAction<number>>,
  id:number,
  visibleID:number,
  setVisibleID:React.Dispatch<React.SetStateAction<number>>,
  lessonPlan:number[],
  currentStep:number,
  setCurrentStep:React.Dispatch<React.SetStateAction<number>>,
  modalVisible:boolean,
};

const MatchWords = ({
  words, current, progress, setProgress, points, setPoints, id, visibleID, setVisibleID,
  lessonPlan, currentStep, setCurrentStep, modalVisible,
}:Props) => {
  function shuffle(array: any) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  if (!(id === visibleID)) {
    return null;
  }

  const NUMBER_OF_WORDS = 5;
  let currentArray = shuffle(shuffle(words).slice(0, NUMBER_OF_WORDS).flat());

  const [currentWords, setCurrentWords] = useState(currentArray);
  const [picked, setPicked] = useState(new Set(''));
  const [prev, setPrev]: [any, any] = useState(null);
  const [isDisabled, setDisabled]: [any, any] = useState(true);
  const [pointsPenalty, setPointsPenalty] = useState(0);
  const wordsContainerRef:any = useRef(null);
  const nextButtonRef:any = useRef(null);
  const audioRef:any = useRef(null);

  const showNewWords = (step:number) => {
    const MAX_PROGRESS = 100;
    if (progress === MAX_PROGRESS) {
      const parent = wordsContainerRef.current.parentNode;
      while (parent!.firstChild) { parent!.firstChild.remove(); }
    } else {
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
      setPointsPenalty(0);
      setVisibleID(lessonPlan[step + 1]);
      setCurrentStep(step + 1);
    }
  };

  useEffect(() => {
    if (picked.size === currentWords.length) {
      setDisabled(false);
      nextButtonRef.current.classList.remove('match-word__next-button--hidden');
      const PROGRESS_STEP = 10;
      const POINTS_GAIN = 10;
      const currentGain = POINTS_GAIN - pointsPenalty > 0 ? POINTS_GAIN - pointsPenalty : 0;
      setProgress(progress + PROGRESS_STEP);
      setPoints(points + currentGain);
    }
  }, [picked.size]);

  const step = useRef(currentStep);
  step.current = currentStep;
  const visRef = useRef(visibleID);
  visRef.current = visibleID;
  const modalRef = useRef(modalVisible);
  modalRef.current = modalVisible;

  const handleEnterPress = (event:any) => {
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

  function playSound(url: string) {
    audioRef.current.src = url;
    audioRef.current.play();
  }

  function buttonClickHandler(evt: any) {
    const button = evt.target;

    if (prev === null) {
      setPicked(() => picked.add(button.innerText));
      button.classList.add('match-words__word--picked');
      button.disabled = true;
      setPrev(evt);
    } else {
      const wordPair:any = words.find((pair: string[]) => pair.includes(prev.target.innerText));
      if (wordPair.includes(button.innerText)) {
        const CORRECT_URL = '../../../audio/success_sound.mp3';
        playSound(CORRECT_URL);
        button.classList.add('match-words__word--picked');
        button.classList.add('match-words__word--animate');
        prev.target.classList.add('match-words__word--animate');
        prev.target.disabled = true;
        setPicked(() => picked.add(button.innerText));
        setPrev(null);
        button.disabled = true;
      } else {
        const PENALTY_PER_MISS = 5;
        setPointsPenalty(pointsPenalty + PENALTY_PER_MISS);
        const ERROR_URL = '../../../audio/mistake_sound.mp3';
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
      <h2>{matchWordsConst[current.UI].header}</h2>
      <div ref={wordsContainerRef} className="match-words__words-container">
        {currentWords.map((word: string) => <button className="match-words__word" type="button" key={word.toString()} onClick={(evt) => buttonClickHandler(evt)}>{word}</button>)}
      </div>
      <Button
        ref={nextButtonRef}
        className="match-word__next-button match-word__next-button--hidden"
        type="primary"
        onClick={() => { showNewWords(currentStep); }}
        disabled={isDisabled}
      >
        {nextButtonConst[current.UI].nextButton}
      </Button>
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
    </div>
  );
};

export default MatchWords;
