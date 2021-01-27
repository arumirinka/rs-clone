import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import EndOfExerciseModal from '../EndOfExerciseModal';
import './makeAPhrase.css';
import checkPhrase from './checkPhrase';

type Props={
  randomPhrases:string[][],
  progress:number,
  setProgress:any
};

const MakeAPhrase = ({ randomPhrases, progress, setProgress }:Props) => {
  const [points, setPoints] = useState(0);
  const [phrasesArray, setPhrasesArray] = useState(randomPhrases);
  const phraseToCheck:any = phrasesArray[0][0];
  const translationToCheck = phrasesArray[0][1].replace(/[.,!?]+/g, '').split(' ');
  const translationPerWordArray = phrasesArray.map((el) => el.filter((newEl, index) => index === 1))
    .flat().map((phrase) => phrase.replace(/[.,!?]+/g, '').split(' ')).flat();
  let newTranslationPerWordArray = [...translationPerWordArray];
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
  const [words, setWords] = useState<IWords[]>([]);
  const [wordsBtns, setWordsBtns] = useState(newTranslationPerWordArray
    .slice(0, (translationToCheck.length + 4))
    .sort(() => Math.random() - 0.5));
  const phraseMakerContainer = useRef<HTMLDivElement>(null!);
  const showModal = (): void => {
    setVisible(true);
  };
  const showNewWords = ():void => {
    setProgress(progress + 10);
    const phraseMade:string[] = [];
    Array.from(phraseMakerContainer.current.children)
      .map((child:any) => phraseMade.push(child.dataset.id));
    const isCorrect = checkPhrase(phraseMade, translationToCheck);
    let audioPath:string;
    if (isCorrect) {
      phraseMakerContainer.current.classList.add('phrase-maker--correct');
      audioPath = '../../audio/success_sound.mp3';
      setPoints(points + 10);
    } else {
      phraseMakerContainer.current.classList.add('phrase-maker--wrong');
      audioPath = '../../audio/mistake_sound.mp3';
    }
    const audio = new Audio(audioPath);
    audio.play();
    setTimeout(() => {
      if (progress === 90) {
        showModal();
      } else {
        phraseMakerContainer.current.classList.remove('phrase-maker--correct',
          'phrase-maker--wrong');
        const newPhrases = phrasesArray.slice(1, 10);
        newPhrases.push(phrasesArray[0]);
        setPhrasesArray(newPhrases);
        setContinueBtnDisabled(true);
        newTranslationPerWordArray = newTranslationPerWordArray.slice(translationToCheck.length,
          (Math.ceil(translationPerWordArray.length / 3)))
          .sort(() => Math.random() - 0.5);
        setWordsBtns(newTranslationPerWordArray);
        setWords([]);
      }
    }, 2000);
  };

  const handleClick = (event:any) => {
    const newWord = event.target;
    if (words.find((word) => word.dataset.key === newWord.dataset.key)) {
      setWords((prev) => prev.filter((word) => (word.dataset.key !== newWord.dataset.key)));
      setWordsBtns((prev:string[]) => [...prev, newWord.dataset.id]);
    } else {
      setWords((prev) => [...prev, newWord]);
      // setWordsBtns((prev)=>prev.filter((word)=>(word.dataset.key!== newWord.dataset.key))
      setWordsBtns((prev:string[]) => {
        prev.splice(prev.indexOf(newWord.dataset.id), 1);
        return prev;
      });
    }
    setContinueBtnDisabled(false);
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
              data-key={word.dataset.key}
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
            data-key={generateKey(index.toString())}
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
