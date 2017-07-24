import React, { Component } from 'react';

import './App.css';

import ResultImage from './images/book-icon-trans.png';

import {SlideContainer, Header} from './components'
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

  onPrevius = (answer) => {
    let answers = this.state.answers;
    let newAnswers = answers.pop()
    this.setState({anserws: newAnswers})
  }

  render() {

    console.log(this.state.answers)
    return (
        <div>
            <div className="app">
                <Header/>
                <SlideContainer answers={this.state.answers} 
                        begun={this.state.begun}
                        onAnswered={(answer) => this.answerQuestion(answer)}
                        onPrevius={(answer) => this.onPrevius()}
                        onBegin={this.begin} 
                        mainTitle={data.mainTitle}
                        title={data.title}
                        introParagraphOne={data.introParagraphOne}
                        introParagraphTwo={data.introParagraphTwo}
                        introParagraphThree={data.introParagraphThree}
                        introParagraphFour={data.introParagraphFour}
                        questions={data.questions}     
                        studyMethods={data.studyMethods}           
                />                
            </div>
        </div>
    );
  }
}

export default App;


