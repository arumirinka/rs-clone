import React from 'react';

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

const chooseTranslationBtn = ({
  index,
  translation, translationToCheck,
  currentProgress, updateProgress,
  updateBtnStyle,
  updateContinueBtn,
  buttonsContainer,
  points, setPoints,
}:Props) => {
  const checkWord = (event:React.MouseEvent) => {
    const word:string | null = event.currentTarget.getAttribute('data-id');
    if (word === translationToCheck) {
      event.currentTarget.classList.add('buttons__translateBtn--correct');
      setPoints(points + 10);
    } else {
      event.currentTarget.classList.add('buttons__translateBtn--wrong');
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
  return (
    <button
      type="button"
      className="buttons__translateBtn"
      data-id={translation}
      onClick={(event) => checkWord(event)}
    >
      {index}. {translation}
    </button>
  );
};
export default chooseTranslationBtn;
