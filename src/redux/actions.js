import { createAction } from '@reduxjs/toolkit';

export const addToMyLibraryRequest = createAction('global/addToMyLibraryRequest');
export const addToMyLibrarySuccess = createAction('global/addToMyLibrarySuccess');
export const addToMyLibraryError = createAction('global/addToMyLibraryError');

export const updateMyLibraryItemRequest = createAction('global/updateMyLibraryItemRequest');
export const updateMyLibraryItemSuccess = createAction('global/updateMyLibraryItemSuccess');
export const updateMyLibraryItemError = createAction('global/updateMyLibraryItemError');

export const deleteMyLibraryItemRequest = createAction('global/deleteMyLibraryItemRequest');
export const deleteMyLibraryItemSuccess = createAction('global/deleteMyLibraryItemSuccess');
export const deleteMyLibraryItemError = createAction('global/deleteMyLibraryItemError');

export const isOpenPopup = createAction('global/isOpenPopup');
export const isClosePopup = createAction('global/isClosePopup');
export const changePopupSeverity = createAction('global/popupSeverity');
export const changePopupText = createAction('global/popupText');

export const fetchNewCitiesRequest = createAction('global/fetchNewCitiesRequest');
export const fetchNewCitiesSuccess = createAction('global/fetchNewCitiesSuccess');
export const fetchNewCitiesError = createAction('global/fetchNewCitiesError');

export const fetchCurrentWeatherByIdRequest = createAction('global/fetchCurrentWeatherByIdRequest');
export const fetchCurrentWeatherByIdSuccess = createAction('global/fetchCurrentWeatherByIdSuccess');
export const fetchCurrentWeatherByIdError = createAction('global/fetchCurrentWeatherByIdError');

export const fetchForecastWeatherByIdRequest = createAction('global/fetchForecastWeatherByIdRequest');
export const fetchForecastWeatherByIdSuccess = createAction('global/fetchForecastWeatherByIdSuccess');
export const fetchForecastWeatherByIdError = createAction('global/fetchForecastWeatherByIdError');
