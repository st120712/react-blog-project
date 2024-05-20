/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import MainView from './views/MainView';
import TotalSeries from './components/TotalSeries';


function App() {
  return (
    <body>
      <MainView>
        <TotalSeries />
      </MainView>
    </body>
  );
}

export default App;
