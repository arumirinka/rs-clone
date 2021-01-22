import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import successSvg from '../../assets/success.svg';

type Props={
  visible:any,
  points:number
};
const EndOfExerciseModal: React.FC<Props> = ({ visible, points }:Props) => {
  const src:any = successSvg;
  return (
    <Modal
      title="Вот и урок завершён!"
      visible={visible}
      closable={false}
      footer={null}
    >
      <div style={{ display: 'flex' }}>
        <img src={src} alt="kitty" style={{ width: '100px', margin: '0 0 1em' }} />
        <div style={{ fontSize: '1.2em', textAlign: 'center' }}> Смотри, сколько баллов мы смогли набрать: {points}/100.</div>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Link
          to="/lessons"
          className="ant-btn-primary"
          style={{ padding: '6px 8px', fontSize: '1.1em' }}
        >Вернуться к урокам
        </Link>
      </div>
    </Modal>
  );
};
export default EndOfExerciseModal;
