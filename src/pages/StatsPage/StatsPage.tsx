import React from 'react';
import { useSelector } from 'react-redux';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

const StatsPage: React.FC = () => {
  const num: number = 2;
  const selectAppLang = (state: { app: { appLang: any; }; }) => state.app.appLang;
  const appLang = useSelector(selectAppLang);
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
