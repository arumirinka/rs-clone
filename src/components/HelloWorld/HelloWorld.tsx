import React from 'react';

// This is a React component with props and TS

const greetMsg: string = 'Hello there,';

interface Props {
  propName: string,
  propNum: number
}

const HelloWorld = ({ propName, propNum }: Props) => (
  <div>
    <p>
      {greetMsg} this is a React component with {propName}: {propNum}.
    </p>
  </div>
);

export default HelloWorld;
