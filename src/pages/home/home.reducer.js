import { REQUEST_ANIME_LIST, RECEIVED_ANIME_LIST } from './home.action';

const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_ANIME_LIST:
       return { ...state, loading: true };
    case RECEIVED_ANIME_LIST:
       return { ...state, json: action.json, loading: false };
    default:
       return state;
  }
};
export default HomeReducer;