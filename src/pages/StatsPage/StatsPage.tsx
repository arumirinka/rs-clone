import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getPointsFromDB } from '../../redux/actions';
import StatsData from './StatsData';

const StatsPage: React.FC = () => {
  const selectAppState = (state: { app: any }) => state.app;
  const appState = useSelector(selectAppState);
  const { appLang, learnLang } = appState;

  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, appLang, learnLang));

  const [, setUpdState] = useState({});

  const handleUpdate = () => {
    setUpdState({});
  };

  return (
    <>
      <StatsData />
      <br />
      <br />
      <Button type="primary" htmlType="submit" onClick={handleUpdate}>
        Update stats!
      </Button>
    </>
  );
};

export default StatsPage;
