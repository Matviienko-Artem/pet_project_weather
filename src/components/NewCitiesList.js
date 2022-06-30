import React from 'react';
import { Card, Grid, CardActions, CardContent, Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

const NewCitiesList = () => {
  const dispatch = useDispatch();
  const citiesArr = useSelector(state => state.global.newCities);

  const addToMyLibrary = (lat, lon) => dispatch(operations.addToMyLibrary(lat, lon));

  return (
    <Grid container justifyContent="center" spacing={2} padding={2}>
      {citiesArr.map((city, index) => (
        <Grid item key={index}>
          <Card sx={{ minWidth: 200 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {city.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {city.country}, {city.state}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                lat: {city.lat}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                lon: {city.lon}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" startIcon={<AddIcon />} onClick={() => addToMyLibrary(city.lat, city.lon)}>
                Add to Library
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewCitiesList;
