import React, { Component } from 'react';

export class AnswerItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected: false,
      correct: false,
    }
  }
  
  handleClick(e) {
    //returns true/false on whether the correct answer was selected
    const isCorrect = this.props.checkAnswer(e);
    this.setState({
      selected: true,
      correct: isCorrect
    })
  }

  render() {
    return (
      <a onClick={this.handleClick} className={"list-group-item " + (this.state.selected ? 'selected ' : '') + (this.state.correct ? 'correct' : '')}>{this.props.answer}</a>
    );
  }
}
