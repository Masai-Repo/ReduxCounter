import { legacy_createStore } from "redux";
import reducer from "./reducer";

const initState = { count: 0 };
// const store = new Store(reducer, initState);
const store = legacy_createStore(reducer, initState);

store.subscribe(() => {
  console.log(`store has got updated`, store.getState());
});

export default store;
