import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HelloWorld from '../../components/HelloWorld/HelloWorld';
import { getPointsFromDB } from '../../redux/actions';

const StatsPage: React.FC = () => {
  const selectAppState = (state: { app: any; }) => state.app;
  const appState = useSelector(selectAppState);
  const { appLang, learnLang } = appState;

  const dispatch = useDispatch();
  const userID = JSON.parse(localStorage.getItem('userData') || '{}').userId;
  dispatch(getPointsFromDB(userID, appLang, learnLang));

  const num: number = 2;
  return (
    <div className="stats">
      <header className="stats-header">
        <p>
          This is going to be the statistics page!
        </p>
        <p>
          This is the appLang: {appLang}!
        </p>
        <p>
          This is the way to print variables inside jsx/tsx.
          <br />
          Here is the <code>num</code> variable value: {num}
          , and its type is <code>number</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld propName="props" propNum={num} />
      </header>
    </div>
  );
};

export default StatsPage;
