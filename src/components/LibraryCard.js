import React from 'react';
import { Card, Grid, CardActions, CardContent, Button, Typography, CardMedia, Stack } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

const LibraryCard = ({ city }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateItem = id => dispatch(operations.updateLibraryItem(id));
  const deleteItem = id => dispatch(operations.deleteLibraryItem(id));

  return (
    <Grid item>
      <Card sx={{ minWidth: 225 }} elevation={3}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1 }} component="div" color="text.secondary">
            {city.name}, {city.sys.country}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="h5">{Math.round(city.main.temp)}°C</Typography>
            <CardMedia
              component="img"
              height="80"
              width="80"
              sx={{ objectFit: 'contain', width: 80 }}
              image={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="weather_icon"
            />
          </Stack>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Feels like : {Math.round(city.main.feels_like)}°C
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {city.weather[0].description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ManageSearchIcon />}
            onClick={() => navigate(`/city/${city.id}`)}
          >
            Detail
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<UpdateIcon />}
            onClick={() => updateItem(city.id)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => deleteItem(city.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LibraryCard;
