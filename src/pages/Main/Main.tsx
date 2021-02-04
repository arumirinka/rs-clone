import React from 'react';
import { useDispatch } from 'react-redux';
import { getPointsFromDB } from '../../redux/actions';
import LanguagesLayout from '../../components/LanguagesLayout/LanguagesLayout';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, 'russian', 'english'));
  dispatch(getPointsFromDB(userID, 'russian', 'japanese'));
  dispatch(getPointsFromDB(userID, 'russian', 'french'));
  dispatch(getPointsFromDB(userID, 'english', 'russian'));
  dispatch(getPointsFromDB(userID, 'english', 'japanese'));
  dispatch(getPointsFromDB(userID, 'english', 'french'));
  dispatch(getPointsFromDB(userID, 'german', 'english'));
  dispatch(getPointsFromDB(userID, 'german', 'japanese'));
  dispatch(getPointsFromDB(userID, 'german', 'french'));

  return (
    <LanguagesLayout />
  );
};

export default Main;
