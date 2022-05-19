import { request } from './config';

export const onReceiveMovieList = query => {
  return request
    .get('', { params: { query } })
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
    });
};
export const onReceiveMovieListWithLength = props => {
  return request
    .get('', { params: { query: props.txt, display: props.num } })
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
    });
};
