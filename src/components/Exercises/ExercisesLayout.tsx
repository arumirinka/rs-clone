import React from 'react';
import { useSelector } from 'react-redux';
import ChooseTranslation from './ChooseTranslation';
import KittyWithPencil from './KittyWithPencil';

const getRandomWords = (appState: { level: number, lesson: number }, data: any) => {
  interface Lesson {
    level: number;
    lesson: number;
  }

  const current:Lesson = {
    level: appState.level,
    lesson: appState.lesson,
  };

  const { words } = data[`level${current.level}`][`lesson${current.lesson}`];

  // to increase number of random words - slice the array
  const randomWords: string[][] = words
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return randomWords;
};

const ExercisesLayout: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const appState = useSelector(selectAppState);

  const selectData = (state: { data: { fetchedData: any; }; }) => state.data.fetchedData;
  const dataFromState = useSelector(selectData);

  const randomWords = getRandomWords(appState, dataFromState);

  return (
    <div className="exercises-container">
      <div className="exercises-container__kitty">
        <KittyWithPencil />
      </div>
      <ChooseTranslation randomWords={randomWords} />
    </div>
  );
};

export default ExercisesLayout;
