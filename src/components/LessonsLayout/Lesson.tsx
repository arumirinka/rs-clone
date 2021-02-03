import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLesson } from '../../redux/actions';

type Props = {
  lesson: string,
  number: number,
  isOpen: boolean,
};

const Lesson = ({ lesson, number, isOpen }: Props) => {
  // const [levelOpen, setLevelOpen] = useState({});
  const levelOpen = {};

  const dispatch = useDispatch();

  const history = useHistory();
  const storeNumberAndGoToLesson = () => {
    dispatch(changeLesson(number));
    history.push('/lessons/words');
  };

  // remove comment and change state to false when lesson can be opened
  // const [disabledLesson, setDisabledLesson] = useState(true);
  const styleOpening = {
    background: '#17B699',
    filter: 'none',
    animation: 'rotateLesson 2s 1',
  };

  // remove comment and use this function to open new lesson
  // const openLesson = (event: any): void => {
  //   // setDisabledLesson(false)
  //   event.target.classList.remove('lessons__lesson--closed');
  //   /* eslint-disable no-param-reassign */
  //   isOpen = true;
  //   setLevelOpen(styleOpening);

  //   setTimeout(() => {
  //     storeNumberAndGoToLesson();
  //   }, 1000);
  // };

  if (isOpen) {
    return (
      <button
        type="button"
        className="lessons__lesson"
        style={styleOpening}
        onClick={storeNumberAndGoToLesson}
      >
        {lesson} {number}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="lessons__lesson lessons__lesson--closed"
      // remove comment and onClick function for lesson opening
      // onClick={(event: React.MouseEvent) => openLesson(event)}
      style={levelOpen}
      // disabled={disabledLesson}
    >{lesson} {number}
    </button>
  );
};

export default Lesson;
