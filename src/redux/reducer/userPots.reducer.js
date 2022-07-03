const INIT_STATE = {
  posts: [],
};

const postReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'STORE_POSTS':
      return { ...state, ...action.payload };
    case 'SEARCH_POSTS':
      return { ...state, ...action.payload };
    case 'DELETE_POST':
      // console.log('Delte by id ', [
      //   ...state.posts.filter((_, i) => i !== action.payload),
      // ]);
      return {
        ...state,
        posts: [...state.posts.filter((_, i) => i !== action.payload)],
      };
    case 'UPDATE_POST':
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      ); //finding index of the item
      console.log('index ', index);

      const newArray = [...state.posts]; //making a new array
      newArray[index].alt_description = action.payload.description;
      newArray[index].description = action.payload.title;
      return {
        ...state, //copying the original state
        posts: newArray, //reassingning Data to new array
      };
    default:
      return state;
  }
};
export default postReducer;
