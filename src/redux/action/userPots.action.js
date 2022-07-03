import store from '../store';

export const getAccountInfo = () => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/search/photos/?query=random&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        resolve(result.results);

        // console.log('res.data ', result);
        store.dispatch({
          type: 'STORE_POSTS',
          payload: {
            posts: result.results,
          },
        });
      })
      .catch((err) => {
        if (err) {
          reject(err);
        }
      });
  });
};

export const getSeacrchData = (query) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        resolve(result.results);

        // console.log('res.data ', result);
        store.dispatch({
          type: 'SEARCH_POSTS',
          payload: {
            posts: result.results,
          },
        });
      })
      .catch((err) => {
        if (err) {
          reject(err);
        }
      });
  });
};
