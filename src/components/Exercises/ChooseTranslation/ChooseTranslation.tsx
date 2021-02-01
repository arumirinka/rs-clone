import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import ChooseTranslationBtn from './ChooseTranslationBtn';
import checkIfButtonsEnabled from './checkIfButtonsEnabled';
import './chooseTranslation.css';
import { exercisesInterface } from '../../../assets/appLangConst';

const getRandomNumbers = ():number[] => {
  const arr:number[] = [0, 1, 2, 3];
  return arr.sort(() => 0.5 - Math.random());
};
let randomNumbersArray = getRandomNumbers();
type Props={
  randomWords:string[][],
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
  appLang:string,
  progressGap:number,
};
let showNewWords:() => void;
const chooseTranslation = ({
  randomWords, progress, setProgress, points, setPoints, id, visibleID, setVisibleID, lessonPlan,
  currentStep, setCurrentStep, modalVisible, appLang, progressGap,
}:Props) => {
  const [wordsArray, setWordsArray] = useState(randomWords);
  const wordToCheck:any = wordsArray[0][0];
  const translationToCheck:string = wordsArray[0][1];

  const [btnStyle, setBtnStyle] = useState(false);
  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnDisabled, setContinueBtnDisabled] = useState(true);

  const visRef = useRef(visibleID);
  visRef.current = visibleID;
  const modalRef = useRef(modalVisible);
  modalRef.current = modalVisible;

  const handleEnterPress = (event:any) => {
    if (visRef.current === id
      && event.key === 'Enter'
      && !checkIfButtonsEnabled(buttonsContainer)
      && !modalRef.current) {
      showNewWords();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress);
    return () => {
      window.removeEventListener('keypress', handleEnterPress);
    };
  }, []);

  if (!(id === visibleID)) {
    return null;
  }

  showNewWords = () => {
    if (progress === 100) {
      setBtnStyle(true);
    } else {
      if (buttonsContainer.current) {
        const buttons = Array.from(buttonsContainer.current.children);
        buttons.forEach((button) => {
          button.classList.remove('buttons__translateBtn--correct', 'buttons__translateBtn--wrong', 'buttons__translateBtn--bigger');
        });
      }

      const newWords = wordsArray
        .slice(1, 10);
      newWords.push(wordsArray[0]);
      setWordsArray(newWords);
      randomNumbersArray = getRandomNumbers();
      setContinueBtnDisabled(true);
      setBtnStyle(false);
      setVisibleID(lessonPlan[currentStep + 1]);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <div className="chooseTranslation-container__word">{ exercisesInterface[appLang].chooseTranslation} &quot;{wordToCheck}&quot;</div>
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
          progressGap={progressGap}
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
          progressGap={progressGap}
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
          progressGap={progressGap}
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
          progressGap={progressGap}
        />
      </div>

      <Button
        type="primary"
        htmlType="submit"
        onClick={() => { showNewWords(); }}
        className="chooseTranslation-container__continueButton"
        disabled={continueBtnDisabled}
      >{ exercisesInterface[appLang].сontinue}
      </Button>
    </>
  );
};
export default chooseTranslation;
