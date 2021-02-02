import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import { useHistory } from 'react-router-dom';
import ChooseTranslation from './ChooseTranslation/ChooseTranslation';
import './ChooseTranslation/chooseTranslation.css';
import MatchWords from './MatchWords/MatchWords';
import MakeAPhrase from './MakeAPhrase/MakeAPhrase';
import FindPronouncedWord from './FindPronouncedWord/FindPronouncedWord';
import content from '../../content.json';
import KittyWithPencil from './KittyWithPencil';
import './exercisesLayout.css';
import EndOfExerciseModal from './EndOfExerciseModal';

interface IProps {
  appLang: string
}

const theContent:any = content;
interface Lesson {
  UI:string;
  learning:string;
  level:number;
  lesson:number;
}
const current:Lesson = {
  UI: 'russian',
  learning: 'english',
  level: 1,
  lesson: 1,
};
const { words, phrases } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];
// to increase number of random words - slice the array
const randomWords:string[][] = words
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);
const randomPhrases:string[][] = phrases
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

const PROGRESS_GAP = 5;
const lessonPlan = [1, 4, 3, 3, 2, 4, 3, 1, 2, 3, 1, 1, 4, 3, 2, 4, 1, 1, 2, 3];

const ExercisesLayout: React.FC<IProps> = ({ appLang }: IProps) => {
  const [progress, setProgress] = useState(0);
  const [points, setPoints] = useState(0);
  const [visibileID, setVisibleID] = useState(lessonPlan[0]);
  const [modalVisible, setModalVisible]: any[] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const showModal = (): void => {
    setModalVisible(true);
  };
  useEffect(() => {
    if (progress === 100) {
      showModal();
    }
  });
  const history = useHistory();
  const handleEscPress = (event:any) => {
    if (event.key === 'Escape') {
      history.push('/lessons');
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div className="exercises-container">
      <div className="exercises-container__kitty">
        <KittyWithPencil />
      </div>
      <div className="exercises-container__content">
        <div className="exercises-container__progress-bar">
          <Progress percent={progress} showInfo={false} />
        </div>
        <ChooseTranslation
          randomWords={randomWords}
          progress={progress}
          setProgress={setProgress}
          points={points}
          setPoints={setPoints}
          id={1}
          visibleID={visibileID}
          setVisibleID={setVisibleID}
          lessonPlan={lessonPlan}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          modalVisible={modalVisible}
          appLang={appLang}
          progressGap={PROGRESS_GAP}
        />
        <MatchWords
          words={words}
          progress={progress}
          setProgress={setProgress}
          points={points}
          setPoints={setPoints}
          id={2}
          visibleID={visibileID}
          setVisibleID={setVisibleID}
          lessonPlan={lessonPlan}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          modalVisible={modalVisible}
          appLang={appLang}
          progressGap={PROGRESS_GAP}
        />
        <MakeAPhrase
          randomPhrases={randomPhrases}
          progress={progress}
          setProgress={setProgress}
          points={points}
          setPoints={setPoints}
          id={3}
          visibleID={visibileID}
          setVisibleID={setVisibleID}
          lessonPlan={lessonPlan}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          modalVisible={modalVisible}
          appLang={appLang}
          progressGap={PROGRESS_GAP}
        />
        <FindPronouncedWord
          words={words}
          progress={progress}
          setProgress={setProgress}
          points={points}
          setPoints={setPoints}
          id={4}
          visibleID={visibileID}
          setVisibleID={setVisibleID}
          lessonPlan={lessonPlan}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          modalVisible={modalVisible}
          appLang={appLang}
          learningLang={current.learning}
          progressGap={PROGRESS_GAP}
        />
        <EndOfExerciseModal
          visible={modalVisible}
          points={points}
          appLang={appLang}
        />
      </div>
    </div>
  );
};

export default ExercisesLayout;
