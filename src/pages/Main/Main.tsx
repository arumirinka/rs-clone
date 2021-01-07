import React from 'react';
import HelloWorld from '../../components/HelloWorld/HelloWorld';

// This is going to be one of the pages, divided into parts placed in components folder

function Main() {
  return (
    <div className="main">
      <header className="main-header">
        <h1>Main header</h1>
      </header>
      <HelloWorld propName="props" propNum={1} />
    </div>
  );
}

export default Main;
