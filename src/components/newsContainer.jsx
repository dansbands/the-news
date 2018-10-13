import React from 'react'
import { getNews } from '../utils/api.js'



class NewsContainer extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    getNews()
    .then(news => {
      this.setState({ news: news });
    })
  }

  render () {
    console.log('news', this.state.news);
    return (
      <div>News</div>
    )
  }
}

export default NewsContainer;
