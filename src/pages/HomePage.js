import React, { useEffect } from 'react';
import NavigationBar from '../components/NavigationBar';
import NewCitiesList from '../components/NewCitiesList';
import MyLibrary from '../components/MyLibrary';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

const HomePage = () => {
  const dispatch = useDispatch();

  const newCities = useSelector(state => state.global.newCities);
  const myLibraryArray = useSelector(state => state.global.myLibraryArray);

  const updateMyLibraryItem = id => dispatch(operations.updateLibraryItem(id));

  useEffect(() => {
    myLibraryArray.map(i => {
      updateMyLibraryItem(i.id);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('localLibrary', JSON.stringify(myLibraryArray));
  }, [myLibraryArray]);

  return (
    <>
      <NavigationBar />

      {newCities && <NewCitiesList />}

      <MyLibrary />
    </>
  );
};

export default HomePage;
