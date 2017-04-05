import {combineReducers} from 'redux';

const imagesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'add': {
      state = {...state, image: action.content};
      break;
    }
  }

  return state;
}

const imagesFetch = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE': {
      console.log('RECEIVE')
      state = {...state,images:action.content};
      break;
    }
    case 'ERROR': {
     state = {...state, error:action.content};
     break;
    }
  }
  return state;
}

export default combineReducers({
  images: imagesReducer,
  imagesFeed: imagesFetch
})