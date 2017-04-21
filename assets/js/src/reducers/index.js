import {combineReducers} from 'redux';

const imagesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_IMAGE': {
      state = {...state, feed: action.content};
      break;
    }
  }
  return state;
}

const feedFetch = (state = {}, action) => {
  switch(action.type) {
    case 'FETCHING': {
      state = {...state, fetching: true, fetchError: false};
      break;
    }
    case 'RECEIVE': {
      state = {...state, feed:action.content, fetched: true, fetching: false, };
      break;
    }
    case 'ERROR': {
      state = {...state, error:action.content, fetchError: true, fetching: false};
      break;
    }
    case 'UPDATE API FETCHED': {
      state = {...state, apiFetched: action.content};
      break;
    }
    case 'UPDATE API TARGET': {
      state = {...state, apiTarget: action.content};
      break;
    }
  }
  return state;
}

export default combineReducers({
  images: imagesReducer,
  feed: feedFetch
})
