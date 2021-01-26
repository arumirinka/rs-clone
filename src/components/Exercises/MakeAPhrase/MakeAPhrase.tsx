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
  const phraseToCheck:any = phrasesArray[0][0];
  const translationToCheck:string[] = phrasesArray[0][1].replace(/[.,!?]+/g, '').split(' ');

  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnDisabled, setContinueBtnDisabled] = useState(true);
  const [visible, setVisible]: any[] = useState(false);
  interface IWords{
    type:string
    className:string
    key:string
    dataset:any
    onClick:any
  }
  const [phraseArray, setPhraseArray] = useState<string[]>([]);
  const generateRandomButtons = (x:any) => x.sort(() => Math.random() - 0.5);
  const [wordsBtns, setWordsBtns] = useState(generateRandomButtons(translationPerWordArray
    .slice(0, translationToCheck.length + 3)));
  const [words, setWords] = useState<IWords[]>([]);
  const showModal = (): void => {
    setVisible(true);
  };
  const showNewWords = ():void => {
    if (progress === 100) {
      showModal();
    } else {
      const newPhrases = phrasesArray
        .slice(1, 10);
      newPhrases.push(phrasesArray[0]);
      console.log(newPhrases);
      setPhrasesArray(newPhrases);
      setContinueBtnDisabled(true);
      setProgress(progress + 10);
      setPoints(points + 1);
      setWords([]);
    }
  };
  window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !checkIfButtonsEnabled(buttonsContainer)) {
      showNewWords();
    }
  });
  const phraseMakerContainer = useRef<HTMLDivElement>(null!);

  const handleClick = (event:any) => {
    const newWord = event.target;
    if (words.find((word) => word.dataset.id === newWord.dataset.id
    && !Array.from(buttonsContainer.current.children).includes(event.target))) {
      setWords((prev) => prev.filter((word) => word.dataset.id !== newWord.dataset.id));
      setWordsBtns((prev:string[]) => [...prev, newWord.dataset.id]);
      const wordToRemoveIndex = phraseArray.indexOf(newWord.dataset.id);
      phraseArray.splice(wordToRemoveIndex, 1);
    } else {
      setWords((prev) => [...prev, newWord]);
      setPhraseArray((prev) => [...prev, newWord.dataset.id]);
      setWordsBtns((prev:string[]) => prev.filter((word) => word !== newWord.dataset.id));
    }
    console.log(words);
    console.log(phraseArray);
    // if (phraseMakerContainer.current.children.length >= 0) {
    setContinueBtnDisabled(false);
    // } else { setContinueBtnDisabled(true); }
  };
  const generateKey = (index:string) => `${index}_${new Date().getMilliseconds()}`;
  return (
    <>
      <div className="makeAPhrase-container__phrase">Составьте фразу: &quot;{phraseToCheck}&quot;</div>
      <div className="makeAPhrase-container__phrase-maker">
        <div className="phrase-maker__inner-container" ref={phraseMakerContainer}>
          {words.map((word, index) => (
            <button
              type="button"
              className="buttons__makeAPhraseBtn"
              key={generateKey(String(index))}
              data-id={word.dataset.id}
              onClick={(event) => handleClick(event)}
            >
              {word.dataset.id}
            </button>
          ))}
        </div>
      </div>
      <div className="makeAPhrase__buttons" ref={buttonsContainer}>
        {wordsBtns.map((el:any, index:number) => (
          <button
            type="button"
            className="buttons__makeAPhraseBtn"
            key={generateKey(index.toString())}
            data-id={el}
            onClick={(event) => handleClick(event)}
          >
            {el}
          </button>
        ))}
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
      >Проверить
      </Button>
    </>
  );
};
export default MakeAPhrase;
