import { request } from './config';

const onReceiveMovieList = query => {
  return request
    .get('', { params: { query } })
    .then(result => {
      return result;
    })
    .catch(error => {
      console.log(error);
    });
};

export default onReceiveMovieList;
