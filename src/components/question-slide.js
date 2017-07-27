import React from 'react'

import Styles from '../App.css';

export default class QuestionSlide extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            buttonDisabled: true,
            chosenAnswer: null,
            buttonFocused: false,
        }
    }

    handleClick(e){
        let nodeClicked = e.target.nodeName
        let parentNodeName = e.target.parentNode.nodeName
        let answer = null
        e.preventDefault();
        if  ((nodeClicked === 'BUTTON') || (nodeClicked === 'SPAN')) {

            if (parentNodeName === 'BUTTON') {
                answer = e.target.parentNode.value
                e.target.parentNode.blur()
                e.target.parentNode.focus()
            } else {
                e.target.focus()
                answer = e.target.value
            } 
            
 
            this.setState({chosenAnswer: answer, buttonDisabled: false, buttonFocused: true, })
            if (answer){
                console.log('Chosen answer: ' + answer)
            } else {
                console.log('No answer chosen yet ...Please select answer!')
            }
        } else {
            this.setState({chosenAnswer: null, buttonDisabled: true, buttonFocused: false})
            console.log('Answer disselected. Please select answer!')
        }
               
    }

    render(){
        const {question, onAnswered, numberOfQuestions, index} = this.props
        const answersButton = question.answers.map((answer, i) => {
            return (
                <div className={Styles.answerContainer} key={answer.answer}>
                    <button 
                        type="button"
                        className={Styles.answerCircle}
                        value={answer.answer}
                        onClick={(e)=> e.target.focus()}
                        >
                       
                            <span
                                className={Styles.answerText}
                                key={answer.answer + 'text'}
                        
                                >
                                {answer.answer}
                            </span>
                            <span 
                            key={answer.answer + i}
                            className={Styles.whiteCircle}
                            ></span>
                     </button>
                </div>
            )
        });
        
        const currentQuestion = index + 1;
        return(
            <div className={Styles.slide}>
                <div className={Styles.questionContainer} onClick={this.handleClick.bind(this)}>
   
                    <div className={Styles.questionContentContainer}>
                        <p className={Styles.counter}>{currentQuestion}/{numberOfQuestions}</p>
                        <img src={question.image} className={Styles.questionImage} alt="Next" />
                        <h2 className={Styles.questionTitle}>{question.question}</h2>
                        <div className={Styles.answers}>
                            {answersButton}
                          {/*  <div className={Styles.horizontalrule}></div>*/}
                        </div>
                    </div>
                    <div className={Styles.prevNextButtonWrapper}>
                        <div className={Styles.beginButtonWrapper}>
                            <button 
                                
                                className={Styles.beginButtonNew}
                                disabled={this.state.buttonDisabled}
                                onClick={() => {
                                        if(this.state.chosenAnswer && this.state.buttonFocused){
                                            onAnswered(this.state.chosenAnswer)
                                        }
                                    }}>
                                    Next
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


