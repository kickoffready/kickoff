import axios from 'axios';

export function feedFetch(url, dispatch = dispatch) {
  return (dispatch) => {
    axios.get('http://swapi.co/api/' + url)
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
