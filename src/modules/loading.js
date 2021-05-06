import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(START_LOADING, (type) => type);
export const finishLoading = createAction(FINISH_LOADING, (type) => type);

const initialState = {};

const loading = handleActions(
  {
    [START_LOADING]: (state, { payload: type }) => ({
      ...state,
      [type]: true,
    }),
    [FINISH_LOADING]: (state, { payload: type }) => ({
      ...state,
      [type]: false,
    }),
  },
  initialState
);
export default loading;
