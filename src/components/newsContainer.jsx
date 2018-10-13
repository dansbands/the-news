import React from 'react'
import { getNews } from '../utils/api.js'



class NewsContainer extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    getNews()
    .then(news => {
      this.setState({ articles: news.articles });
    })
  }

  renderArticles = () => {
    return this.state.articles.map(a => {
      return (
        <div>{a.title}</div>
      )
    })
  }

  render () {
    console.log('news', this.state.articles);
    return (
      <div>
        <h3>News</h3>
        {this.renderArticles()}
      </div>
    )
  }
}

export default NewsContainer;
