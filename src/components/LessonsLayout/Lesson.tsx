import React, { useState } from 'react';

type Props = {
  lesson: string,
  number: number,
  open:boolean,
};
const Lesson = ({ lesson, number, open }: Props) => {
  const [levelOpen, setLevelOpen] = useState({});
  const style = {
    background: '#17B699',
    filter: 'none',
    animation: 'rotateLesson 2s 1',
  };
  const openLesson = (event:any) => {
    event.target.classList.remove('lessons__lesson--closed');
    /* eslint-disable no-param-reassign */
    open = true;
    return setLevelOpen(style);
  };
  if (open) {
    return (
      <button
        type="button"
        className="lessons__lesson"
        style={style}
        onClick={(event: React.MouseEvent) => openLesson(event)}
      >{lesson} {number}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="lessons__lesson lessons__lesson--closed"
      onClick={(event: React.MouseEvent) => openLesson(event)}
      style={levelOpen}
    >{lesson} {number}
    </button>
  );
};
export default Lesson;
