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
    case 'RECEIVE': {
      console.log('RECEIVE')
      state = {...state, feed:action.content, fetched: true};
      break;
    }
    case 'ERROR': {
      state = {...state, error:action.content, fetchError: true};
      break;
    }
  }
  return state;
}

export default combineReducers({
  images: imagesReducer,
  feed: feedFetch
})
