// here store accept reducers , initial state and middleware
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(reducers,{},applyMiddleware(thunk))