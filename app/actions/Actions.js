import axios from "axios";

import AppDispatcher from "../dispatcher/AppDispatcher";
import ActionTypes from "../constants/AppConstants";

const Actions = {
  loadNews() {
    AppDispatcher.dispatch({ type: ActionTypes.FETCH_NEWS });
    const url =
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b0d412a4584d4627a5b852e0bcbb3b9d";
    axios
      .get(url)
      .then(response => {
        window.console.log(response);
        AppDispatcher.dispatch({
          type: ActionTypes.RECEIVE_NEWS,
          response: response.data.results
        });
      })
      .catch(error => window.console.log(error));
  }
};

export default Actions;
