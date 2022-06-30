import React, { useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

const NavigationBar = () => {
  const [inputQuery, setInputQuery] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (inputQuery) {
      dispatch(operations.fetchNewCities(inputQuery));
      setInputQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="center" spacing={0.5}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          size="small"
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
        />
        <Button variant="outlined" onClick={handleSubmit} startIcon={<SearchIcon />} type="submit">
          Search
        </Button>
      </Stack>
    </form>
  );
};

export default NavigationBar;
