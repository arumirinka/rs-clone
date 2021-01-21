import React, { useState, useRef } from 'react';
import { Button, Progress } from 'antd';
import CSS from 'csstype';
import ChooseTranslationBtn from './ChooseTranslationBtn';
import EndOfExerciseModal from './EndOfExerciseModal';
import './chooseTranslation.css';

const getRandomNumbers = ():number[] => {
  const arr:number[] = [0, 1, 2, 3];
  return arr.sort(() => 0.5 - Math.random());
};
let randomNumbersArray = getRandomNumbers();
type Props={
  randomWords:string[][]
};
let showNewWords:() => void;
const chooseTranslation = (randomWords:Props) => {
  const [points, setPoints] = useState(0);
  const [wordsArray, setWordsArray] = useState(randomWords.randomWords);
  const wordToCheck:any = wordsArray[0][0];
  const translationToCheck:string = wordsArray[0][1];

  const [progress, setProgress] = useState(0);

  const [btnStyle, setBtnStyle] = useState<CSS.Properties>({
    pointerEvents: 'all',
  });
  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnStyle, setContinueBtnStyle] = useState<CSS.Properties>({
    pointerEvents: 'none',
  });
  const [visible, setVisible]: any[] = useState(false);
  const showModal = (): void => {
    setVisible(true);
  };
  showNewWords = () => {
    if (progress === 100) {
      const parent = buttonsContainer.current.parentNode;
      while (parent!.firstChild) { parent!.firstChild.remove(); }
      showModal();
    }
    const n = wordsArray;
    const newWords = wordsArray
      .slice(1, 10);
    newWords.push(n[0]);
    setWordsArray(newWords);
    randomNumbersArray = getRandomNumbers();
    setContinueBtnStyle({
      pointerEvents: 'none',
      boxShadow: 'none',
      transform: 'scale(1)',
    });
    buttonsContainer.current.style.pointerEvents = 'all';
    const buttons = Array.from(buttonsContainer.current.children);
    buttons.forEach((button) => {
      button.classList.remove('buttons__translateBtn--correct', 'buttons__translateBtn--wrong');
    });
  };
  window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && buttonsContainer.current.style.pointerEvents === 'none') {
      showNewWords();
    }
  });
  return (
    <div className="chooseTranslation-container">
      <div className="exercises-container__progress-bar">
        <Progress percent={progress} showInfo={false} />
      </div>
      <div className="chooseTranslation-container__word">Выберите перевод для слова &quot;{wordToCheck}&quot;</div>
      <div className="chooseTranslation-container__buttons" ref={buttonsContainer} style={btnStyle}>
        <ChooseTranslationBtn
          index={1}
          translation={wordsArray[randomNumbersArray[0]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnStyle}
          buttonsContainer={buttonsContainer}
          points={points}
          setPoints={setPoints}
        />
        <ChooseTranslationBtn
          index={2}
          translation={wordsArray[randomNumbersArray[1]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnStyle}
          buttonsContainer={buttonsContainer}
          points={points}
          setPoints={setPoints}
        />
        <ChooseTranslationBtn
          index={3}
          translation={wordsArray[randomNumbersArray[2]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnStyle}
          buttonsContainer={buttonsContainer}
          points={points}
          setPoints={setPoints}
        />
        <ChooseTranslationBtn
          index={4}
          translation={wordsArray[randomNumbersArray[3]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnStyle}
          buttonsContainer={buttonsContainer}
          points={points}
          setPoints={setPoints}
        />
      </div>
      <EndOfExerciseModal
        visible={visible}
        points={points}
      />
      <Button
        type="primary"
        htmlType="submit"
        onClick={() => { showNewWords(); }}
        style={continueBtnStyle}
      >Продолжить
      </Button>
    </div>
  );
};
export default chooseTranslation;
