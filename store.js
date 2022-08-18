import {createStore} from "redux";
// import { persistStore} from 'redux-persist';

import rootReducers from "./reducer/rootReducer";

const store =  createStore(
    rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// let persistor = persistStore(store);
// export {store,persistor};
export default store;



