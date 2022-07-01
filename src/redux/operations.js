import axios from 'axios';
import * as actions from './actions';
const ACCESS = process.env.REACT_APP_ACCESS_KEY;

export const fetchNewCities = query => async dispatch => {
  dispatch(actions.fetchNewCitiesRequest());

  await axios
    .get(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${ACCESS}`)
    .then(({ data }) => dispatch(actions.fetchNewCitiesSuccess(data)))
    .catch(error => dispatch(actions.fetchNewCitiesError(error)));
};

export const addToMyLibrary = (lat, lon) => async (dispatch, getState) => {
  dispatch(actions.addToMyLibraryRequest());

  const myLibraryState = getState().global.myLibraryArray;

  await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ACCESS}&units=metric`)
    .then(({ data }) => {
      if (myLibraryState.find(i => i.id === data.id)) {
        dispatch(actions.changePopupSeverity('warning'));
        dispatch(actions.changePopupText('You have this city in the Library'));
        dispatch(actions.isOpenPopup());
        dispatch(actions.addToMyLibraryError());
        return;
      }

      dispatch(actions.changePopupSeverity('success'));
      dispatch(actions.changePopupText('Adding to your Library'));
      dispatch(actions.isOpenPopup());

      return dispatch(actions.addToMyLibrarySuccess(data));
    })
    .catch(error => dispatch(actions.addToMyLibraryError(error)));
};

export const updateLibraryItem = id => async dispatch => {
  dispatch(actions.updateMyLibraryItemRequest());

  await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${ACCESS}&units=metric`)
    .then(({ data }) => {
      dispatch(actions.changePopupSeverity('success'));
      dispatch(actions.changePopupText('Updated this item'));
      dispatch(actions.isOpenPopup());

      return dispatch(actions.updateMyLibraryItemSuccess(data));
    })
    .catch(error => dispatch(actions.updateMyLibraryItemError(error)));
};

export const deleteLibraryItem = id => async dispatch => {
  dispatch(actions.deleteMyLibraryItemRequest());

  dispatch(actions.changePopupSeverity('info'));
  dispatch(actions.changePopupText('Delete this item'));
  dispatch(actions.isOpenPopup());

  try {
    return dispatch(actions.deleteMyLibraryItemSuccess(id));
  } catch (error) {
    return dispatch(actions.deleteMyLibraryItemError(error));
  }
};

export const fetchCurrentWeatherById = id => async dispatch => {
  dispatch(actions.fetchCurrentWeatherByIdRequest());

  await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${ACCESS}&units=metric`)
    .then(({ data }) => dispatch(actions.fetchCurrentWeatherByIdSuccess(data)))
    .catch(error => dispatch(actions.fetchCurrentWeatherByIdError(error)));
};

export const fetchForecastWeatherById = id => async dispatch => {
  dispatch(actions.fetchForecastWeatherByIdRequest());

  await axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${ACCESS}&units=metric`)
    .then(({ data }) => dispatch(actions.fetchForecastWeatherByIdSuccess(data)))
    .catch(error => dispatch(actions.fetchForecastWeatherByIdError(error)));
};
