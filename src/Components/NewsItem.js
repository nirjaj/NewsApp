import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className='my-3'>
        <div class="card" style={{ width: "18rem;" }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
                {source}
              </span>
          <img src={!imageUrl ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}  
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' class="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>      </div>
    )
  }
}

export default NewsItem