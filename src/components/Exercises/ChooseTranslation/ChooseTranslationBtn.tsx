import React, { useRef, useEffect } from 'react';
import checkIfButtonsEnabled from './checkIfButtonsEnabled';

type Props = {
  index:number,
  translation: string,
  translationToCheck:string,
  currentProgress: number,
  updateProgress: any,
  btnStyle:any,
  updateBtnStyle:any,
  updateContinueBtn:any,
  buttonsContainer:any,
  points:number,
  setPoints:any,
};
let checkWord:(event:any)=>void;
const ChooseTranslationBtn:React.FC<Props> = ({
  index,
  translation, translationToCheck,
  currentProgress, updateProgress,
  btnStyle, updateBtnStyle,
  updateContinueBtn,
  buttonsContainer,
  points, setPoints,
}:Props) => {
  const translationButton = useRef<HTMLButtonElement>(null!);
  checkWord = (event:any) => {
    let currentButton;
    let audioPath:string;
    if (event.type !== 'click') {
      const pressedButton:any[] = Array.from(buttonsContainer.current.children).filter(
        (child:any) => child.dataset.index === event.key,
      );
      [currentButton] = pressedButton;
    } else {
      currentButton = event.currentTarget;
    }
    const word:string | null = currentButton.getAttribute('data-id');
    if (word === translationToCheck) {
      currentButton.classList.add('buttons__translateBtn--correct');
      setPoints(points + 10);
      audioPath = '../../audio/success_sound.mp3';
    } else {
      currentButton.classList.add('buttons__translateBtn--wrong');
      const correctButton:any[] = Array.from(buttonsContainer.current.children).filter(
        (child:any) => child.dataset.id === translationToCheck,
      );
      const [correctBtn] = correctButton;
      setTimeout(() => correctBtn.classList.add('buttons__translateBtn--correct', 'buttons__translateBtn--bigger'),
        100);
      audioPath = '../../audio/mistake_sound.mp3';
    }
    const audio = new Audio(audioPath);
    audio.play();
    updateProgress(currentProgress + 10);
    updateContinueBtn(false);
    updateBtnStyle(true);
  };

  const handleDigitsPress = (event:any) => {
    if ((checkIfButtonsEnabled(buttonsContainer))
     && (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4')) {
      checkWord(event);
    }
  };
  useEffect(() => {
    window.addEventListener('keypress', handleDigitsPress);
    return () => {
      window.removeEventListener('keypress', handleDigitsPress);
    };
  }, []);

  return (
    <button
      type="button"
      className="buttons__translateBtn"
      data-id={translation}
      data-index={index}
      onClick={(event) => checkWord(event)}
      ref={translationButton}
      disabled={btnStyle}
    >
      {index}. {translation}
    </button>
  );
};
export default ChooseTranslationBtn;
