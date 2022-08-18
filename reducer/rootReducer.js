import userReducer from "./userReducer";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//     key: 'root',
//     storage,
// };
const rootReducer=combineReducers({
    // list:userReducer,
    UserReducer:userReducer
});

export default rootReducer;
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default persistedReducer;