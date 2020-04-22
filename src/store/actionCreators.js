import * as actionTypes from "./actionTypes";

export const fetchManifest = (value) => ({
  type: actionTypes.FETCH_MANIFEST,
  payload: value,
});

export const setManifest = (manifest) => ({
  type: actionTypes.SET_MANIFEST,
  payload: manifest,
});

export const fetchManifestFailed = (error) => ({
  type: actionTypes.FETCH_MANIFEST_FAILED,
  payload: error,
});

export const validatePeriod = (value, isSol) => ({
  type: actionTypes.VALIDATE_PERIOD,
  payload: { value, isSol },
});

export const setSOL = (payload) => ({
  type: actionTypes.SET_SOL,
  payload,
});

export const setDate = (payload) => ({
  type: actionTypes.SET_DATE,
  payload,
});

export const fetchPhotos = (latest) => ({
  type: actionTypes.FETCH_PHOTOS,
  latest,
});

export const cleanUpPhotos = () => ({
  type: actionTypes.CLEAN_UP_PHOTOS,
});

export const setPhotos = (photos) => ({
  type: actionTypes.SET_PHOTOS,
  payload: photos,
});

export const fetchPhotosFailed = (error) => ({
  type: actionTypes.FETCH_PHOTOS_FAILED,
  payload: error,
});

export const cleanUpPeriod = () => ({
  type: actionTypes.CLEAN_UP_PERIOD,
});

export const cleanUpForm = () => ({
  type: actionTypes.CLEAN_UP_FORM,
});
