import axios from 'axios';

export function feedFetch(url, dispatch = dispatch) {
  return (dispatch) => {
    dispatch({type:'FETCHING'});
    axios.get('http://swapi.co/api/' + url)
      .then((response) => {
        dispatch({type: 'RECEIVE', content: response.data});
        dispatch({type:'UPDATE API FETCHED', content: url});
      })
      .catch((err) => {
        dispatch({type: 'ERROR', content: err})
      })
    dispatch({type:'UPDATE API TARGET', content: url});
  }
}

export function addImage(size){
  return {
    type:'ADD_IMAGE',
    content: {
    }
  }
}
