import React from 'react';

type Props = {
  translation: string,
  translationToCheck:string
};

const chooseTranslationBtn = ({ translation, translationToCheck }:Props) => {
  const checkWord = (event:React.MouseEvent) => {
    const word:string | null = event.currentTarget.getAttribute('data-id');
    console.log(word);
    if (word === translationToCheck) {
      alert(true);
    } else {
      alert(false);
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
