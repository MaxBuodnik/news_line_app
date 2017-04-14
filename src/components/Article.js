import React, {Component} from 'react'

class Article extends Component {
  state = {
    visible: false
  }

  readMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: true});
  };

  hideMoreClick = (e) => {
    e.preventDefault();
    this.setState({visible: false});
  };

  render() {
    const author = this.props.data.author,
      text = this.props.data.text,
      bigText = this.props.data.bigText,
      visible = this.state.visible;
    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className={'news__text' + (visible ? '' : "none")}>{text}</p>
        <a href='#' className={'news__readmore' + (visible ? "none" : "")} onClick={this.readMoreClick}>Read more</a>
        <p className={'news__big-text' + (visible ? "" : "none")}>{bigText}</p>
        <a href='#' className={'hide__news' + (visible ? "" : "none")} onClick={this.hideMoreClick}>Hide</a>
      </div>
    );
  }
}

export default Article;