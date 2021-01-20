import React from 'react';
import ChooseTranslation from './ChooseTranslation';
import content from '../../content.json';
import KittyWithPencil from './KittyWithPencil';

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
// to increase number of random words - slice the array
const randomWords:string[][] = words
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

const ExercisesLayout: React.FC = () => (
  <div className="exercises-container">
    <div className="exercises-container__kitty">
      <KittyWithPencil />
    </div>
    <ChooseTranslation randomWords={randomWords} />
  </div>
);
export default ExercisesLayout;
