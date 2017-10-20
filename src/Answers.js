import React, { Component } from 'react';
import {AnswerItem} from './AnswerItem';
import {Overlay} from './Overlay';

export class Answers extends Component {
  render() {
    return (
      <div id="answer-block">
        <div className="list-group">
          {this.props.answers.map((answer, i) =>
            <AnswerItem key={i} answer={answer} checkAnswer={this.props.checkAnswer} />
          )}
        </div>
        
        { this.props.overlay &&
          <Overlay />
        }
      </div>
    );
  }
}
