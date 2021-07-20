import { createStore } from "redux";
import rootreducer from './reducers/rootReducer';

export const store = createStore(rootReducer);