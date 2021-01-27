import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  lesson: string,
  number: number,
  isOpen:boolean,
};

const Lesson = ({ lesson, number, isOpen }: Props) => {
  const [levelOpen, setLevelOpen] = useState({});

  const history = useHistory();
  const goToLesson = () => {
    history.push('/lessons/exercises');
  };

  const style = {
    background: '#17B699',
    filter: 'none',
    animation: 'rotateLesson 2s 1',
  };

  const openLesson = (event: any) => {
    event.target.classList.remove('lessons__lesson--closed');
    /* eslint-disable no-param-reassign */
    isOpen = true;
    setLevelOpen(style);

    setTimeout(() => {
      goToLesson();
    }, 1000);
  };

  if (isOpen) {
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
