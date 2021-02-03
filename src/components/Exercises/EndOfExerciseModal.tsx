import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import successSvg from '../../assets/success.svg';
import { exercisesInterface } from '../../assets/appLangConst';

type Props={
  visible:any,
  points:number,
  appLang:string
};
const EndOfExerciseModal: React.FC<Props> = ({ visible, points, appLang }:Props) => {
  const src:any = successSvg;
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
        >{exercisesInterface[appLang].toLessons}
        </Link>
      </div>
    </Modal>
  );
};
export default EndOfExerciseModal;
