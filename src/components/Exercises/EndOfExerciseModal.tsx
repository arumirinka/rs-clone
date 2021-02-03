import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import successSvg from '../../assets/success.svg';
import { exercisesInterface } from '../../assets/appLangConst';
import { setPoints } from '../../redux/actions';

type Props = {
  visible: any,
  points: number,
  appLang: string
};

const EndOfExerciseModal: React.FC<Props> = ({ visible, points, appLang }: Props) => {
  const selectAppState = (state: { app: any; }) => state.app;
  const appState = useSelector(selectAppState);
  const { learnLang, level, lesson } = appState;

  const dispatch = useDispatch();
  if (visible) {
    dispatch(setPoints(appLang, learnLang, `level${level}`, `lesson${lesson}`, points));
  }

  const src: any = successSvg;

  return (
    <Modal
      title={exercisesInterface[appLang].endOfLessonTitle}
      visible={visible}
      closable={false}
      footer={null}
    >
      <div style={{ display: 'flex' }}>
        <img src={src} alt="kitty" style={{ width: '100px', margin: '0 0 1em' }} />
        <div style={{ fontSize: '1.2em', textAlign: 'center' }}> {exercisesInterface[appLang].endOfLessonText}: {points}/100.</div>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Link
          to="/lessons"
          className="ant-btn-primary"
          style={{ padding: '6px 8px', fontSize: '1.1em' }}
        >
          {exercisesInterface[appLang].toLessons}
        </Link>
      </div>
    </Modal>
  );
};
export default EndOfExerciseModal;
