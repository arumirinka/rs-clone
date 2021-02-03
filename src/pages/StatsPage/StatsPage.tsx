import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statsLangConst } from '../../assets/appLangConst';
import { getPointsFromDB } from '../../redux/actions';

const StatsPage: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const appState = useSelector(selectAppState);
  const { appLang, learnLang } = appState;

  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, appLang, learnLang));

  return (
    <div className="stats">
      <header className="stats-header">
        <h2>
          {statsLangConst[appLang].header}
        </h2>
      </header>
    </div>
  );
};

export default StatsPage;
