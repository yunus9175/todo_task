import store from '../store';

export const getAccountInfo = () => {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((result) => {
        resolve(result);

        // console.log('res.data ', result);
        store.dispatch({
          type: 'STORE_POSTS',
          payload: {
            posts: result,
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
