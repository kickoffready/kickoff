import React from 'react';

import styled from 'styled-components';

const AppDiv = styled.div`
  display: block;
`;
const App: React.FC = ({ name }: {name: string}) => (
  <AppDiv>
    <header className="App-header">
      <p>
        Edit
        {name}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </AppDiv>
);

export default App;
