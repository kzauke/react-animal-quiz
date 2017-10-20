import React, { Component } from 'react';
import {Image} from './Image';
import {Answers} from './Answers';
import {Button} from './Button';
import {Overlay} from './Overlay';

export class Question extends Component {
  
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      correctAnswerSelected: false
    }
  }

  checkAnswer(correctAnswer, e) {
    var selectedAnswer = e.target.innerHTML;
    var returnResult = (selectedAnswer === correctAnswer);

    if (returnResult) {
      this.setState({ correctAnswerSelected: true }) 
    }

    return returnResult;
  }

  render() {
    
    const question = {
      answers: 
      [
        "Tiger",
        "Lion",
        "Kangaroo",
        "Rhinocerous"
      ],
    
      imgSrc: "https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942",
      correctAnswer: "Tiger"
    }
    
    return (
    	<div id="question" className="row">
      	<div className="col-4">
  	      <Image src={question.imgSrc} />
      	</div>
      	<div className="col-8">
  	      <Answers answers={question.answers} checkAnswer={this.checkAnswer.bind(this, question.correctAnswer)} overlay={this.state.correctAnswerSelected} />
          <Button showButton={this.state.correctAnswerSelected} />
      	</div>
      </div>

      

    );
  }
}
