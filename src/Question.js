import React, { Component } from 'react';
import {Image} from './Image';
import {Answers} from './Answers';
import {Button} from './Button';


export class Question extends Component {
  
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.state = {
      questionIndex: 0,
      correctAnswerSelected: false
    }
  }

  checkAnswer(correctAnswer, e) {
    var selectedAnswer = e.target.innerHTML;
    var returnResult = (selectedAnswer === correctAnswer);

    this.setState({ correctAnswerSelected: returnResult }) 

    return returnResult;
  }

  goToNext(questions, e) {
    var nextResult = this.state.questionIndex + 1;
    console.log(nextResult, questions.length);
    if (nextResult < questions.length) {
      this.setState({questionIndex: this.state.questionIndex + 1, correctAnswerSelected: false})

      //clear state on answers.js???
    }
  }

  clearAnswers(e) {
    
  }

  render() {
    
    const questions = [{
        answers: 
        [
          "Tiger",
          "Lion",
          "Kangaroo",
          "Rhinocerous"
        ],
      
        imgSrc: "https://c402277.ssl.cf1.rackcdn.com/photos/1620/images/carousel_small/bengal-tiger-why-matter_7341043.jpg?1345548942",
        correctAnswer: "Tiger"
      },
      {
        answers: 
        [
          "Cat",
          "Dog",
          "Lion",
          "Mouse"
        ],
      
        imgSrc: "https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/H-P/photoark-lion.ngsversion.1466004832449.adapt.945.1.png",
        correctAnswer: "Lion"
      }
    ]
    
    const question = questions[this.state.questionIndex];

    return (
      <div id="question" className="row">
        <div className="col-4">
          <Image src={question.imgSrc} />
        </div>
        <div className="col-8">
          <Answers answers={question.answers} checkAnswer={this.checkAnswer.bind(this, question.correctAnswer)} overlay={this.state.correctAnswerSelected} />
          <Button showButton={this.state.correctAnswerSelected} goToNext={this.goToNext.bind(this, questions)} />
        </div>
      </div>

      

    );
  }
}
