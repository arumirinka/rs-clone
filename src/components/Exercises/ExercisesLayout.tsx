import React from 'react';
import ChooseTranslation from './ChooseTranslation';
import content from '../../content.json';

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
const { words } = theContent[current.UI][current.learning][`level${current.level}`][`lesson${current.lesson}`];

const randomWords:string[][] = words
  .sort(() => 0.5 - Math.random())
  .slice(0, 5);

const ExercisesLayout: React.FC = () => (
  <div className="exercises-container">
    <ChooseTranslation randomWords={randomWords} />
  </div>
);
export default ExercisesLayout;
