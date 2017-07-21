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
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}> 
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />  
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Distance Learning. 
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you? 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <button 
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/free-distance-learning-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </button>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Distance Learning for ACCA, you get: 
                            </p>
                            <ul>
                                <li>Up to 16 hours of video tutorials</li>
                                <li>Study materials include Study Text, Exam Kit and Pocket Notes.</li>
                                <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                                <li>Tutor support with your own Personal Tutor</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/TRAININGANDQUALS/ACCOUNTANCY/ACCA/skills-essentials-options/Pages/distance-learning-premier.aspx">
                                    Learn more about Distance Learning
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p className={Styles.otherChoice}>
                                <strong>OnDemand</strong>  
                                {/*This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.  Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx*/}
                            </p>
                            <p className={Styles.otherChoice}>
                                <strong>Live Online</strong>  
                                {/*If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures. Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx*/}
                            </p>
                            <p className={Styles.otherChoice}>
                                <strong>Classroom</strong>  
                                {/*A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning. View your local timetable: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx*/}
                            </p> 
                    </div>
                </div>    
            </div> 
        </div>
       {false && <SlideContainer answers={this.state.answers} 
                        begun={this.state.begun}
                        onAnswered={(answer) => this.answerQuestion(answer)}
                        onPrevius={(answer) => this.onPrevius()}
                        onBegin={this.begin} 
                        mainTitle={data.mainTitle}
                        title={data.title}
                        introParagraphOne={data.introParagraphOne}
                        introParagraphTwo={data.introParagraphTwo}
                        questions={data.questions}     
                        studyMethods={data.studyMethods}           
        />      }                
      </div>
      </div>
    );
  }
}

export default App;


