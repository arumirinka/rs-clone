import React from 'react';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

function StatsPage() {
  const num: number = 2;
  return (
    <div className="stats">
      <header className="stats-header">
        <p>
          This is going to be the statistics page!
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
}

export default StatsPage;
