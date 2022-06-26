import { combineReducers } from 'redux';
import posts from './userPots.reducer';

const reducers = combineReducers({
  userPosts: posts,
});

export default reducers;
