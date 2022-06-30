import React from 'react';
import { Grid, Typography } from '@mui/material';
import LibraryCard from './LibraryCard';
import { useSelector } from 'react-redux';

const MyLibrary = () => {
  const myLibraryArray = useSelector(state => state.global.myLibraryArray);

  return (
    <>
      <Typography color="primary" variant="h5" textAlign="center">
        My Library:
      </Typography>
      <Grid container justifyContent="center" spacing={2} padding={2}>
        {myLibraryArray.length ? (
          myLibraryArray.map(city => <LibraryCard key={city.id} city={city} />)
        ) : (
          <Typography variant="h5">Your library is empty</Typography>
        )}
      </Grid>
    </>
  );
};

export default MyLibrary;
