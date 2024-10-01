import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalReset } from './common/reset/reset';


function App() {
  return (
    <>
      <GlobalReset />
      <Outlet />
    </>
  )
}

export default App;
