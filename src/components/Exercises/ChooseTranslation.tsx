import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import ChooseTranslationBtn from './ChooseTranslationBtn';
import EndOfExerciseModal from './EndOfExerciseModal';
import checkIfButtonsEnabled from './checkIfButtonsEnabled';
import './chooseTranslation.css';

const getRandomNumbers = ():number[] => {
  const arr:number[] = [0, 1, 2, 3];
  return arr.sort(() => 0.5 - Math.random());
};
let randomNumbersArray = getRandomNumbers();
type Props={
  randomWords:string[][],
  progress:number,
  setProgress:any
};
let showNewWords:() => void;
const chooseTranslation = ({ randomWords, progress, setProgress }:Props) => {
  const [points, setPoints] = useState(0);
  const [wordsArray, setWordsArray] = useState(randomWords);
  const wordToCheck:any = wordsArray[0][0];
  const translationToCheck:string = wordsArray[0][1];

  const [btnStyle, setBtnStyle] = useState(false);
  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnDisabled, setContinueBtnDisabled] = useState(true);
  const [visible, setVisible]: any[] = useState(false);
  const showModal = (): void => {
    setVisible(true);
  };
  showNewWords = () => {
    if (progress === 100) {
      setBtnStyle(true);
      showModal();
    } else {
      const buttons = Array.from(buttonsContainer.current.children);
      buttons.forEach((button) => {
        button.classList.remove('buttons__translateBtn--correct', 'buttons__translateBtn--wrong', 'buttons__translateBtn--bigger');
      });
      const newWords = wordsArray
        .slice(1, 10);
      newWords.push(wordsArray[0]);
      setWordsArray(newWords);
      randomNumbersArray = getRandomNumbers();
      setContinueBtnDisabled(true);
      setBtnStyle(false);
    }
  };
  window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !checkIfButtonsEnabled(buttonsContainer)) {
      showNewWords();
    }
  });
  return (
    <>
      <div className="chooseTranslation-container__word">Выберите перевод для слова &quot;{wordToCheck}&quot;</div>
      <div className="chooseTranslation-container__buttons" ref={buttonsContainer}>
        <ChooseTranslationBtn
          index={1}
          translation={wordsArray[randomNumbersArray[0]][1]}
          translationToCheck={translationToCheck}
          currentProgress={progress}
          updateProgress={setProgress}
          btnStyle={btnStyle}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnDisabled}
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
          btnStyle={btnStyle}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnDisabled}
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
          btnStyle={btnStyle}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnDisabled}
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
          btnStyle={btnStyle}
          updateBtnStyle={setBtnStyle}
          updateContinueBtn={setContinueBtnDisabled}
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
        className="chooseTranslation-container__continueButton"
        disabled={continueBtnDisabled}
      >Продолжить
      </Button>
    </>
  );
};
export default chooseTranslation;
