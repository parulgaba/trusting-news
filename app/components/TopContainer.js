import React, { Component } from "react";
import { Container } from "flux/utils";
import Store from "../stores/Store";
import Actions from "../actions/Actions";

import NewsItem from "./NewsItem";

class TopContainer extends Component {
  static getStores() {
    return [Store];
  }

  static calculateState() {
    return {
      ...Store.getState()
    };
  }

  componentDidMount() {
    Actions.loadNews();
  }

  renderItems() {
    const { response: news } = this.state;
    window.console.log(news);
    return news.map(item => <NewsItem key={item.url} article={item} />);
  }

  render() {
    window.console.log(this.state);
    const { isLoading } = this.state;
    return <div>{!isLoading ? this.renderItems() : "Loading"}</div>;
  }
}

export default Container.create(TopContainer);
