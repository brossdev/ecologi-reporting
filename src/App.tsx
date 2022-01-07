import React from 'react';
import { useQuery } from 'react-query';
import { getAllTrees, TreeData } from './api/trees';
import logo from './logo.svg';
import './App.css';

function App() {
  const { isLoading, isError, data, error } = useQuery<TreeData, Error>(
    'trees',
    getAllTrees,
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data && `Tree data is ${data.length} items long`}
        </a>
      </header>
    </div>
  );
}

export default App;
