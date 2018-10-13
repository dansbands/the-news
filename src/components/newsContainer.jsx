import React from 'react'
import { getNews } from '../utils/api.js'
import NewsCard from './newsCard'



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

  filterByImage = articles => {
    return articles.filter(a => a.urlToImage)
  }

  renderArticles = () => {
    return this.state.articles.map(a => {
      return (
        <NewsCard
          key={a.title}
          data={a} />
      )
    })
  }

  render () {
    console.log('news', this.filterByImage(this.state.articles));
    return (
      <div>
        <h3>News</h3>
        {this.renderArticles()}
      </div>
    )
  }
}

export default NewsContainer;
