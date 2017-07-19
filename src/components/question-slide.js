import React from 'react'

import Styles from '../App.css';
import IntroImage from '../images/circle.png';

export default class QuestionSlide extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            answserSelected: '', 
            buttonDisabled: true,
        }
    }

    render(){

        const {question, onAnswered, numberOfQuestions, index} = this.props
        
        const answersButton = question.answers.map((answer, i) => {
            return (
                <div className={Styles.answerContainer}>
                    <button 
                        className={Styles.answerCircle}
                        key={answer.answer}
                        onClick={() => this.setState({answerSelected: answer.answer, buttonDisabled: false})}>
                        <div 
                            className={Styles.answerText}
                            key={answer.answer + 'text'}>
                            {answer.answer}
                        </div>
                        {/*<span className={Styles.whiteCircle}></span>*/}
                     </button>
                </div>
            )
        });


        const currentQuestion = index + 1;
        return(
            <div className={Styles.slide}>
                <div className={Styles.questionContainer}>
                    <div className={Styles.questionContentContainer}>
                        <p className={Styles.counter}>{currentQuestion}/{numberOfQuestions}</p>
                        <img src={question.image} className={Styles.questionImage} alt="Next" />
                        <h2 className={Styles.questionTitle}>{question.question}</h2>
                        <div className={Styles.answers}>
                            {answersButton}
                          {/*  <div className={Styles.horizontalrule}></div>*/}
                        </div>
                    </div>
                <div className={Styles.nextButtonWrapper}>
                    <button 
                        className={Styles.beginButton}
                        disabled={this.state.buttonDisabled}
                        onClick={() => onAnswered(this.state.answerSelected)}>
                            Next
                    </button>
                </div>
                </div>

            </div>
        )
    }
}


