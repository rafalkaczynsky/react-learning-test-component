import React, { Component } from 'react';

import './App.css';

import {SlideContainer} from './components'
import Styles from './App.css';
import {default as data} from './data/set-of-questions-two'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      begun: false,
      
    };
  }

  begin = () => {
    this.setState({begun: true});
  }

  answerQuestion = (answer) => {
    this.setState({answers: [...this.state.answers, answer]});
  }

  render() {

    console.log(this.state.answers)
    return (
      <div>
      <div className="app">
        <SlideContainer answers={this.state.answers} 
                        begun={this.state.begun}
                        onAnswered={(answer) => this.answerQuestion(answer)}
                        onBegin={this.begin} 
                        title={data.title}
                        introParagraphOne={data.introParagraphOne}
                        introParagraphTwo={data.introParagraphTwo}
                        questions={data.questions}     
                        studyMethods={data.studyMethods}           
        />                      
      </div>
      </div>
    );
  }
}

export default App;


