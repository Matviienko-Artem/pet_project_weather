import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, CardMedia, Stack } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CanvasJSReact from '../components/canvasJS/canvasjs.react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../redux/operations';

const CityPage = () => {
  const [dataPoints, setDataPoints] = useState([]);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tempList = useSelector(state => state.global.forecastWeather);
  const currentWeather = useSelector(state => state.global.currentWeather);

  const fetchCurrentWeatherById = id => dispatch(operations.fetchCurrentWeatherById(id));
  const fetchForecastWeatherById = id => dispatch(operations.fetchForecastWeatherById(id));
  const updateMyLibraryItem = id => dispatch(operations.updateLibraryItem(id));

  useEffect(() => {
    fetchCurrentWeatherById(params.id);
    fetchForecastWeatherById(params.id);
  }, []);

  useEffect(() => {
    appendToChart(tempList);
  }, [tempList]);

  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const appendToChart = arr => {
    let newArr = [];
    arr.map(item => {
      newArr.push({
        label: item.dt_txt,
        y: Math.round(item.main.temp),
        name: item.weather[0].description,
        date: item.dt_txt,
      });
    });

    setDataPoints(newArr);
  };

  const optionsForChart = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light1', //"light1", "dark1", "dark2"
    title: {
      text: '5-day Forecast / 3 hour',
    },
    axisY: {
      includeZero: true,
      suffix: ' °C',
      gridThickness: 0,
    },
    toolTip: {
      shared: true,
      content: '{date} </br> {name} </br> <strong>Temperature: </strong> {y}°C',
    },
    data: [
      {
        type: 'splineArea', //change type to bar,column, line, area, pie, etc
        indexLabel: '{y}°C',
        indexLabelFontColor: '#000',
        fillOpacity: 0.2,
        color: '#1976d2',
        indexLabelPlacement: 'outside',

        dataPoints: dataPoints,
      },
    ],
  };

  return (
    <>
      {currentWeather && (
        <Card sx={{ minWidth: 225 }} elevation={3}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }} component="div" color="text.secondary">
              {currentWeather.name}, {currentWeather.sys.country}
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="h4">{Math.round(currentWeather.main.temp)}°C</Typography>
              <CardMedia
                component="img"
                height="100"
                width="100"
                sx={{ objectFit: 'contain', width: 100 }}
                image={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                alt="weather_icon"
              />
              <CanvasJSChart options={optionsForChart} />
            </Stack>
            <Typography sx={{ fontSize: 14 }} color="text" gutterBottom>
              Feels like : {Math.round(currentWeather.main.feels_like)}°C
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text" gutterBottom>
              {currentWeather.weather[0].description}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text" gutterBottom>
              Visibility: {currentWeather.visibility}m
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text" gutterBottom>
              Humidity: {currentWeather.main.humidity}%
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" startIcon={<ArrowBackIosNewIcon />} onClick={() => navigate('/')}>
              Back to Main
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<UpdateIcon />}
              onClick={() => updateMyLibraryItem(currentWeather.id)}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default CityPage;
