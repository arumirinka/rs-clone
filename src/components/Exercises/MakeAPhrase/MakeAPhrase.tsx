import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import EndOfExerciseModal from '../EndOfExerciseModal';
import checkIfButtonsEnabled from '../checkIfButtonsEnabled';
import './makeAPhrase.css';

type Props={
  randomPhrases:string[][],
  progress:number,
  setProgress:any
};

const MakeAPhrase = ({ randomPhrases, progress, setProgress }:Props) => {
  const [points, setPoints] = useState(0);
  const [phrasesArray, setPhrasesArray] = useState(randomPhrases);
  const randomPhrasesPerWord = phrasesArray.map((phrases) => phrases.map((phrase) => phrase.replace(/[.,!?]+/g, '').split(' ')));
  const translationPerWordArray = randomPhrasesPerWord.map((el) => el
    .filter((newEl, index) => index === 1))
    .flat()
    .flat();
  console.log(setPoints);
  const phraseToCheck:any = phrasesArray[0][0];
  const translationToCheck:string[] = phrasesArray[0][1].replace(/[.,!?]+/g, '').split(' ');

  const [btnStyle, setBtnStyle] = useState(false);
  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnDisabled, setContinueBtnDisabled] = useState(true);
  const [visible, setVisible]: any[] = useState(false);
  const showModal = (): void => {
    setVisible(true);
  };
  const showNewWords = ():void => {
    if (progress === 100) {
      setBtnStyle(true);
      showModal();
    } else {
      const buttons = Array.from(buttonsContainer.current.children);
      buttons.forEach((button:any) => {
        button.classList.remove('buttons__translateBtn--correct', 'buttons__translateBtn--wrong', 'buttons__translateBtn--bigger');
      });
      const newPhrases = phrasesArray
        .slice(1, 10);
      newPhrases.push(phrasesArray[0]);
      console.log(newPhrases);
      setPhrasesArray(newPhrases);
      setContinueBtnDisabled(true);
      setBtnStyle(false);
      setProgress(progress + 10);
    }
  };
  window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !checkIfButtonsEnabled(buttonsContainer)) {
      showNewWords();
    }
  });
  const phraseMakerContainer = useRef<HTMLDivElement>(null!);
  const phraseArray:string[] = [];
  const handleClick = (event:any) => {
    const phraseMakerContainerChildren = Array.from(phraseMakerContainer.current.children);
    if (phraseMakerContainerChildren
      .find((el:any) => el.dataset.id === event.target.dataset.id) !== undefined) {
      phraseMakerContainer.current.removeChild(event.target);
      buttonsContainer.current.appendChild(event.target);
      const wordToRemoveIndex = phraseArray.indexOf(event.target.dataset.id);
      phraseArray.splice(wordToRemoveIndex, 1);
    } else {
      phraseMakerContainer.current.appendChild(event.target);
      phraseArray.push(event.target.dataset.id);
    }
    console.log(phraseArray);
  };
  const generateRandomButtons = (x:any) => x.sort(() => Math.random() - 0.5);
  const generateKey = (index:string) => `${index}_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className="makeAPhrase-container__phrase">Составьте фразу: &quot;{phraseToCheck}&quot;</div>
      <div className="makeAPhrase-container__phrase-maker">
        <div className="phrase-maker__inner-container" ref={phraseMakerContainer} />
      </div>
      <div className="makeAPhrase__buttons" ref={buttonsContainer}>
        {generateRandomButtons(translationPerWordArray.slice(0, translationToCheck.length + 3)
          .map((el:any, index:number) => (
            <button
              type="button"
              className="buttons__makeAPhraseBtn"
              key={generateKey(index.toString())}
              data-id={el}
              onClick={(event) => handleClick(event)}
              disabled={btnStyle}
            >
              {el}
            </button>
          )))}
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
export default MakeAPhrase;
