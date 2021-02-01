import React, { useState } from 'react';

type Props = {
  lesson: string,
  number: number,
  open:boolean,
};
const Lesson = ({ lesson, number, open }: Props) => {
  const [levelOpen, setLevelOpen] = useState({});
  // remove comment and change state to false when lesson can be opened
  // const [disabledLesson, setDisabledLesson] = useState(true);
  const styleOpening = {
    background: '#17B699',
    filter: 'none',
    animation: 'rotateLesson 2s 1',
  };
  // remove comment and use this function to open new lesson
  const openLesson = (event:any):void => {
    // setDisabledLesson(false)
    event.target.classList.remove('lessons__lesson--closed');
    /* eslint-disable no-param-reassign */
    open = true;
    setLevelOpen(styleOpening);
  };
  if (open) {
    return (
      <button
        type="button"
        className="lessons__lesson"
        style={styleOpening}
      >{lesson} {number}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="lessons__lesson lessons__lesson--closed"
      // remove comment and onClick function for lesson opening
      onClick={(event: React.MouseEvent) => openLesson(event)}
      style={levelOpen}
      // disabled={disabledLesson}
    >{lesson} {number}
    </button>
  );
};
export default Lesson;
