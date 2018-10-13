import React from 'react'

class NewsCard extends React.Component {
  render () {
    console.log('NewsCard', this.props.data.urlToImage);
    return (
      <div className="news-card">
        <img width="300px" src={this.props.data.urlToImage} alt="image" />
        <h3>{this.props.data.title}</h3>
      </div>
    )
  }
}

export default NewsCard;
