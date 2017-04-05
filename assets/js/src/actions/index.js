import axios from 'axios';

export function imagesFetch(dispatch) {
  return (dispatch) => {
    axios.get('//localhost:8080/api/images.json')
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
