import React, { useRef } from 'react';

type Props = {
  index:number,
  translation: string,
  translationToCheck:string,
  currentProgress: number,
  updateProgress: any,
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
  updateBtnStyle,
  updateContinueBtn,
  buttonsContainer,
  points, setPoints,
}:Props) => {
  const btn = useRef<HTMLButtonElement>(null!);
  checkWord = (event:any) => {
    let currentButton;
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
    } else {
      currentButton.classList.add('buttons__translateBtn--wrong');
    }
    updateProgress(currentProgress + 10);
    updateBtnStyle({ pointerEvents: 'all' });
    updateContinueBtn({
      pointerEvents: 'all',
      transform: 'scale(1.2)',
      boxShadow: '2px 2px 10px 2px #e3fa70',
    });
    const m = buttonsContainer;
    m.current.style.pointerEvents = 'none';
  };
  window.addEventListener('keypress', (event) => {
    if ((buttonsContainer.current.style.pointerEvents !== 'none')
    && (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4')) {
      checkWord(event);
    }
  });
  return (
    <button
      type="button"
      className="buttons__translateBtn"
      data-id={translation}
      data-index={index}
      onClick={(event) => checkWord(event)}
      ref={btn}
    >
      {index}. {translation}
    </button>
  );
};
export default ChooseTranslationBtn;
