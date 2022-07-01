import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initialLibraryValue = JSON.parse(localStorage.getItem('localLibrary')) || [];
const updater = (state, payload) => {
  const newArr = [...state];
  const indexUpdateItem = newArr.findIndex(i => i.id === payload.id);
  newArr.splice(indexUpdateItem, 1, payload);

  return [...newArr];
};

const newCitiesReducer = createReducer([], {
  [actions.fetchNewCitiesSuccess]: (_, { payload }) => payload,
});

const myLibraryReducer = createReducer(initialLibraryValue, {
  [actions.addToMyLibrarySuccess]: (state, { payload }) => [...state, payload],
  [actions.updateMyLibraryItemSuccess]: (state, { payload }) => updater(state, payload),
  [actions.deleteMyLibraryItemSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
});

const forecastWeatherReducer = createReducer([], {
  [actions.fetchForecastWeatherByIdSuccess]: (_, { payload }) => payload.list,
});

const currentWeatherReducer = createReducer(null, {
  [actions.fetchCurrentWeatherByIdSuccess]: (_, { payload }) => payload,
});

const openPopupReducer = createReducer(false, {
  [actions.isOpenPopup]: () => true,
  [actions.isClosePopup]: () => false,
});

const popupSeverityReducer = createReducer('success', {
  [actions.changePopupSeverity]: (_, { payload }) => payload,
});

const popupTextReducer = createReducer('Adding to your Library', {
  [actions.changePopupText]: (_, { payload }) => payload,
});

export const loadingReducer = createReducer(false, {
  [actions.addToMyLibraryRequest]: () => true,
  [actions.addToMyLibrarySuccess]: () => false,
  [actions.addToMyLibraryError]: () => false,

  [actions.updateMyLibraryItemRequest]: () => true,
  [actions.updateMyLibraryItemSuccess]: () => false,
  [actions.updateMyLibraryItemError]: () => false,

  [actions.deleteMyLibraryItemRequest]: () => true,
  [actions.deleteMyLibraryItemSuccess]: () => false,
  [actions.deleteMyLibraryItemError]: () => false,

  [actions.fetchNewCitiesRequest]: () => true,
  [actions.fetchNewCitiesSuccess]: () => false,
  [actions.fetchNewCitiesError]: () => false,

  [actions.fetchCurrentWeatherByIdRequest]: () => true,
  [actions.fetchCurrentWeatherByIdSuccess]: () => false,
  [actions.fetchCurrentWeatherByIdError]: () => false,

  [actions.fetchForecastWeatherByIdRequest]: () => true,
  [actions.fetchForecastWeatherByIdSuccess]: () => false,
  [actions.fetchForecastWeatherByIdError]: () => false,
});

export default combineReducers({
  newCities: newCitiesReducer,
  myLibraryArray: myLibraryReducer,
  forecastWeather: forecastWeatherReducer,
  currentWeather: currentWeatherReducer,
  openPopup: openPopupReducer,
  popupSeverity: popupSeverityReducer,
  popupText: popupTextReducer,
  loading: loadingReducer,
});
