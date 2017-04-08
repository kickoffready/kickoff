import axios from 'axios';

export function feedFetch(dispatch) {
  return (dispatch) => {
    axios.get('http://swapi.co/api/people/?page=1')
      .then((response) => {
        dispatch({type: 'RECEIVE', content: response.data})
      })
      .catch((err) => {
        dispatch({type: 'ERROR', content: err})
      })
  }
}

export function addImage(size){
  return {
    type:'ADD_IMAGE',
    content: {
      size
    }
  }
}
