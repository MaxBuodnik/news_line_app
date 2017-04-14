import React, {Component} from 'react'
import './app.css';
import Add from './components/Add.js'
import News from './components/News.js'
import my_news from './my_news.js'

class App extends Component {
  state = {
    news: my_news
  };

  addNews = (item) => {
    this.setState({
      news: [...this.state.news, item] });
  }

  render() {
    return (
      <div className="App">
        <h1>News</h1>
        <Add onAdd={this.addNews} />
        <News data={this.state.news}/>

      </div>
    )
  }
}

export default App;
