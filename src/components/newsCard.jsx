import React from 'react'

class NewsCard extends React.Component {
  render () {
    const { urlToImage, title, source } = this.props.data
    // console.log('NewsCard', this.props.data.urlToImage);
    return (
      <div className="news-card">
        <img width="300px" src={urlToImage} alt={title}/>
        <h3>{title}</h3>
        <p>{source.name}</p>
      </div>
    )
  }
}

export default NewsCard;
