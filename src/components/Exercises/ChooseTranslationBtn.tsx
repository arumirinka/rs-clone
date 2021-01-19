import React from 'react';

type Props = {
  translation: string,
  translationToCheck:string,
  currentProgress: number,
  updateProgress: any,
  updateBtnStyle:any,

  updateContinueBtn:any,
  buttonsContainer:any
};

const chooseTranslationBtn = ({
  translation, translationToCheck,
  currentProgress, updateProgress,
  updateBtnStyle,
  updateContinueBtn,
  buttonsContainer,
}:Props) => {
  const checkWord = (event:React.MouseEvent) => {
    const word:string | null = event.currentTarget.getAttribute('data-id');
    if (word === translationToCheck) {
      updateProgress(currentProgress + 20);
      event.currentTarget.classList.add('buttons__translateBtn--correct');
    } else {
      updateProgress(currentProgress);
      event.currentTarget.classList.add('buttons__translateBtn--wrong');
    }
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
      {translation}
    </button>
  );
};
export default chooseTranslationBtn;
