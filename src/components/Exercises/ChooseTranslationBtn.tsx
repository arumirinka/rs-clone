import React from 'react';

type Props = {
  translation: string,
  translationToCheck:string,
  currentProgress: number,
  updateProgress: any,
};

const chooseTranslationBtn = ({
  translation, translationToCheck, currentProgress, updateProgress,
}:Props) => {
  const checkWord = (event:React.MouseEvent) => {
    const word:string | null = event.currentTarget.getAttribute('data-id');
    console.log(word);
    if (word === translationToCheck) {
      updateProgress(currentProgress + 20);
      alert(true);
    } else {
      alert(false);
      updateProgress(currentProgress);
    }
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
