export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';
export const START_LOADING = 'START_LOADING';
export const RECORD_LOADING_ERROR = 'RECORD_LOADING_ERROR';

export const loadRestaurants = () => async (dispatch, getState, api) => {
  try {
    dispatch(startLoading());
    const records = await api.loadRestaurants();
    dispatch(storeRestaurants(records));
  } catch {
    dispatch(recordLoadingError());
  }
};

const recordLoadingError = () => ({ type: RECORD_LOADING_ERROR });

const startLoading = () => ({ type: START_LOADING });
const storeRestaurants = (records) => ({
  type: STORE_RESTAURANTS,
  records,
});
