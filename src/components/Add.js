import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import my_news from "../my_news.js"
import PropTypes from 'prop-types';
import News from "./News.js";
import { EventEmitter } from 'events';


class Add extends Component {
  static contextTypes = {
    onAdd: PropTypes.func
  }

  constructor(props) {
    super(props);
    //this.onFieldChange = this.onFieldChange.bind(this);

    this.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    }
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({[fieldName]: false})
    } else {
      this.setState({[fieldName]: true})
    }
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.author).focus()
  }

  showInputValue = (e) => {
    e.preventDefault();


    let author = ReactDOM.findDOMNode(this.refs.author).value;

    let text = ReactDOM.findDOMNode(this.refs.text).value;


    console.log(author + '\n' + text);

    let shortText = text.slice(0, 40);

    let item = {
      author: author,
      text: `${shortText}...`,
      bigText: text
    };

    console.log(my_news);

    // window.ee.emit('add', item);
    this.context.onAdd(item);

    ReactDOM.findDOMNode(this.refs.text).value = '';
    this.setState({textIsEmpty: true});
    console.log(author, text, "tadam");
  }

  onCheckRuleClick = () => {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked})
  }

  render() {
    console.log(this.context);


    return (
      <form className='add cf'>
        <input type='text' className="add__author" placeholder="Your name" ref="author"
               onChange={this.onFieldChange.bind(this, "authorIsEmpty")}/>
        <textarea className="add__text" placeholder="Type your news here" ref="text"
                  onChange={this.onFieldChange.bind(this, "textIsEmpty")}/>
        <label className="add__checkrule">
          <input type="checkbox" ref="checkrule" onChange={this.onCheckRuleClick}/>I accept the rules
        </label>
        <button className="add__btn" onClick={this.showInputValue} ref="alertButton"
                disabled={this.state.authorIsEmpty || this.state.textIsEmpty || this.state.agreeNotChecked}>Add news
        </button>
      </form>

    )
  }

}

export default Add;