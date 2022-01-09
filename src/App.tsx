import React from 'react';
import Header from './components/Header';
import Layout from './components/Layout';

import './App.css';
import Reporting from './components/Reporting';

function App() {
  return (
    <Layout>
      <Header />
      <Reporting />
    </Layout>
  );
}

export default App;
