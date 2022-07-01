import './App.css';
import React from 'react';
import AppRouter from './components/AppRouter';
import MyPopup from './components/UI/MyPopup/MyPopup';
import { Puff } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state => state.global.loading);
  return (
    <div className="App">
      <AppRouter />
      <MyPopup />
      {isLoading && <Puff color="#1976d2" height={80} width={80} />}
    </div>
  );
}

export default App;
