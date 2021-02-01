import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';
import CSS from 'csstype';
import './makeAPhrase.css';
import checkPhrase from './checkPhrase';
import { exercisesInterface } from '../../../assets/appLangConst';

type Props={
  randomPhrases:string[][],
  progress:number,
  setProgress:any,
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
const MakeAPhrase = ({
  randomPhrases, progress, setProgress, points, setPoints, id, visibleID, setVisibleID,
  lessonPlan, currentStep, setCurrentStep, modalVisible, appLang, progressGap,
}:Props) => {
  const [phrasesArray, setPhrasesArray] = useState(randomPhrases);
  const phraseToCheck:any = phrasesArray[0][1];
  const translationToCheck = phrasesArray[0][0].replace(/[.,!?]+/g, '').split(' ');
  const translationPerWordArray = phrasesArray.map((el) => el.filter((newEl, index) => index === 0))
    .flat().map((phrase) => phrase.replace(/[.,!?]+/g, '').split(' ')).flat();
  let newTranslationPerWordArray = [...translationPerWordArray];
  const buttonsContainer = useRef<HTMLDivElement>(null!);
  const [continueBtnDisabled, setContinueBtnDisabled] = useState(true);
  const [continueBtnName, setContinueBtnName] = useState(exercisesInterface[appLang].сheck);

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
  const [containerDisabled, setContainerDisabled] = useState<CSS.Properties>({ pointerEvents: 'all' });

  const nextWordsLayout = () => {
    phraseMakerContainer.current.classList.remove('phrase-maker--correct',
      'phrase-maker--wrong');
    buttonsContainer.current.classList.remove(('phrase-maker--correct'));
    const newPhrases = phrasesArray.slice(1, 10);
    newPhrases.push(phrasesArray[0]);
    setPhrasesArray(newPhrases);
    setContinueBtnDisabled(true);
    newTranslationPerWordArray = newTranslationPerWordArray.slice(translationToCheck.length,
      (Math.ceil(translationPerWordArray.length / 3)))
      .sort(() => Math.random() - 0.5);
    setWordsBtns(newTranslationPerWordArray);
    setWords([]);
    setContainerDisabled({ pointerEvents: 'all' });
  };
  const checkPhraseMade = ():void => {
    setContinueBtnDisabled(true);
    setProgress(progress + progressGap);
    setContainerDisabled({ pointerEvents: 'none' });
    const phraseMade:string[] = [];
    Array.from(phraseMakerContainer.current.children)
      .map((child:any) => phraseMade.push(child.dataset.id));
    const isCorrect = checkPhrase(phraseMade, translationToCheck);
    let audioPath:string;
    if (isCorrect) {
      phraseMakerContainer.current.classList.add('phrase-maker--correct');
      audioPath = '../../audio/success_sound.mp3';
      setPoints(points + progressGap);
      setContinueBtnDisabled(false);
    } else {
      phraseMakerContainer.current.classList.add('phrase-maker--wrong');
      audioPath = '../../audio/mistake_sound.mp3';
      setTimeout(() => {
        setWordsBtns([]);
        setWordsBtns(translationToCheck);
        buttonsContainer.current.classList.add('phrase-maker--correct');
        setContinueBtnDisabled(false);
      }, 500);
    }
    const audio = new Audio(audioPath);
    audio.play();
    setContinueBtnName(exercisesInterface[appLang].сontinue);
  };
  const showNewWords = () => {
    setContinueBtnDisabled(true);
    setContinueBtnName(exercisesInterface[appLang].сheck);
    nextWordsLayout();
    setVisibleID(lessonPlan[currentStep + 1]);
    setCurrentStep(currentStep + 1);
  };
  const handleClick = (event:any) => {
    const newWord = event.target;
    if (words.find((word) => word.dataset.key === newWord.dataset.key)) {
      setWords((prev) => prev.filter((word) => (word.dataset.key !== newWord.dataset.key)));
      setWordsBtns((prev:string[]) => [...prev, newWord.dataset.id]);
    } else {
      setWords((prev) => [...prev, newWord]);
      setWordsBtns((prev:string[]) => {
        prev.splice(prev.indexOf(newWord.dataset.id), 1);
        return prev;
      });
    }
  };
  const handleContinueBtnClick = () => {
    if (continueBtnName === exercisesInterface[appLang].сheck
      && !continueBtnDisabled) {
      checkPhraseMade();
    } else {
      showNewWords();
    }
  };

  const visRef = useRef(visibleID);
  visRef.current = visibleID;
  const modalRef = useRef(modalVisible);
  modalRef.current = modalVisible;

  const handleEnterPress = (event:any) => {
    if (visRef.current === id
    && event.key === 'Enter'
    && !continueBtnDisabled
    && !modalRef.current
    ) {
      if (continueBtnName === exercisesInterface[appLang].сheck) {
        checkPhraseMade();
      } else {
        showNewWords();
      }
    }
  };
  useEffect(() => {
    window.addEventListener('keypress', handleEnterPress);
    return () => {
      window.removeEventListener('keypress', handleEnterPress);
    };
  });
  useEffect(() => {
    if (words.length >= 1) {
      setContinueBtnDisabled(false);
    } else {
      setContinueBtnDisabled(true);
    }
  }, [words.length]);

  const generateKey = (index:string) => `${index}_${new Date().getMilliseconds()}`;

  if (!(id === visibleID)) {
    return null;
  }

  return (
    <>
      <div className="makeAPhrase-container__phrase">{ exercisesInterface[appLang].makeAPhrase}: &quot;{phraseToCheck}&quot;</div>
      <div className="makeAPhrase-container__phrase-maker">
        <div className="phrase-maker__inner-container" style={containerDisabled} ref={phraseMakerContainer}>
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
      <div
        className="makeAPhrase__buttons"
        ref={buttonsContainer}
        style={containerDisabled}
      >
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

      <Button
        type="primary"
        htmlType="submit"
        onClick={() => { handleContinueBtnClick(); }}
        className="chooseTranslation-container__continueButton"
        disabled={continueBtnDisabled}
      >{continueBtnName}
      </Button>
    </>
  );
};
export default MakeAPhrase;
