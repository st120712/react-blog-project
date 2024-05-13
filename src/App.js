/* eslint-disable */

import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import LoginBtn from './components/LoginBtn';



function App() {

  return (
    <body>
      <Sidebar>
        <h2>백동호 블로그</h2>
        <LoginBtn></LoginBtn>
      </Sidebar>
    </body>


  );
}

export default App;
