import React, {Component} from 'react'
import Article from './Article'

class News extends Component {
  render() {
    let newsData = this.props.data;

    let newsTemplate;

    if (newsData.length > 0) {
      newsTemplate = newsData.map((item, index) => {
        return (
          <div key={index}>
            <Article data={item}/>
          </div>
        )
      });
    } else {
      newsTemplate = <p>Unfortunately there is no news</p>
    }
    return (
      <div className="news">
        {newsTemplate}
        <strong className={newsData.length > 0 ? "" : "none"}>Total News: {newsData.length}</strong>
      </div>
    );
  }
}

export default News;

