import React from 'react';
import { useQuery } from 'react-query';
import { BarChart } from './components/bar-chart';
import { LineGraph } from './components/line-graph';
import { getAllTrees, TreeData } from './api/trees';
import { formatTreeData } from './utils/tree-helper';
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

  const formattedData = data ? formatTreeData(data) : null;
  console.log('about to render');

  return (
    <div className="App">
      {formattedData && <LineGraph plantedData={formattedData} />}
    </div>
  );
}

export default App;
