import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './app.css';
import Add from './components/Add.js'
import News from './components/News.js'
import my_news from './my_news.js'
import { EventEmitter } from 'events';

const ee = new EventEmitter();
window.ee = ee;

class App extends Component {
  state = {
    news: my_news
  };

  static childContextTypes = {
    onAdd: PropTypes.func
  }

  // componentDidMount() {
  //   ee.on('add', (item) => {
  //
  // }

  // componentWillUnmount() {
  //   ee.removeAllListeners();
  //   window.ee = null;
  // }

  getChildContext() {
    return {
      onAdd: (item) => {
        this.setState({
          news: [...this.state.news, item] });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>News</h1>
        <Add />
        <News data={this.state.news}/>

      </div>
    )
  }
}

export default App;
