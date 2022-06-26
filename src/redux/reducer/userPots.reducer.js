const INIT_STATE = {
  posts: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'STORE_POSTS':
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
