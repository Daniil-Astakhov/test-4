import { combineReducers } from "redux";
import theme from "./slices/themeSlice";
import auth from "./slices/authSlice";
import user from "./slices/userSlise";
import scheduler from "./slices/schedulerSlise";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    user,
    scheduler,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
