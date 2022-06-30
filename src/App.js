import './App.css';
import React from 'react';
import AppRouter from './components/AppRouter';
import MyPopup from './components/UI/MyPopup/MyPopup';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <MyPopup />
    </div>
  );
}

export default App;
