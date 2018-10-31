import { ReduceStore } from "flux/utils";
import ActionTypes from "../constants/AppConstants";
import AppDispatcher from "../dispatcher/AppDispatcher";

class Store extends ReduceStore {
  getInitialState() {
    return {
      news: [],
      isLoading: true
    };
  }

  reduce(state, action) {
    let result;
    switch (action.type) {
      case ActionTypes.FETCH_NEWS:
        result = { isLoading: true };
        return result;
      case ActionTypes.RECEIVE_NEWS:
        result = { isLoading: false, response: action.response };
        return result;
      default:
        return this.state;
    }
  }
}

export default new Store(AppDispatcher);
