import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld/HelloWorld';
import StepsLayout from './components/StepsLayout/StepsLayout';

function App() {
  // const num: number = 2;
  return (
    <StepsLayout />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hi guys, and welcome to our <code>React + TS</code> app!
    //     </p>
    //     <p>
    //       This is the way to print variables inside jsx/tsx.
    //       <br />
    //       Here is the <code>num</code> variable value: {num}
    //       , and its type is <code>number</code>.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <HelloWorld propName="props" propNum={num} />
    //   </header>
    // </div>
  );
}

export default App;
