import React, { Component } from 'react';
//import ReactGA from 'react-ga';

import './App.css';
import {SlideContainer} from './components'
import {default as data} from './data/set-of-questions-two'

/*
ReactGA.initialize('UA-103223070-1',{
  debug: true,
  titleCase: false,
});
var ga = ReactGA.ga();

//ga('send', 'pageview');
ga('send', 'event', 'eventCategory', 'eventAction');
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      begun: false,
      spinnerShow: false,
    };
  }

  begin = () => {
    this.setState({begun: true});
    /*
    ReactGA.event({
        category: 'Quiz',
        action: 'Clicked Link',
    });
    */
  }   

  answerQuestion = (answer) => {
    if (this.state.answers.length === 6){
        this.setState({spinnerShow: true})
        setTimeout(() => {
          this.setState({answers: [...this.state.answers, answer], spinnerShow: false})
        } , 2000)
    }else
      this.setState({answers: [...this.state.answers, answer]});
  }

  onPrevius = (answer) => {
    let answers = this.state.answers;
    let newAnswers = answers.pop()
    this.setState({anserws: newAnswers})
  }

  render() {
    return (
        <div>
            <div className="app">
  
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
                        spinnerShow={this.state.spinnerShow}      
                />                
            </div>
        </div>
    );
  }
}

export default App;


