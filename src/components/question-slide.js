import React from 'react'

import Styles from '../App.css';

export default class QuestionSlide extends React.Component {

    render(){

        const {question, onAnswered, numberOfQuestions, index} = this.props

        const answersButton = question.answers.map((answer, i) => {
            return (
                <div className={Styles.answerContainer}>
                    <div 
                        className={Styles.answerCircle}
                        key={answer.answer}
                        onClick={() => onAnswered(answer.answer)}>
                        <div 
                            className={Styles.answerText}
                            key={answer.answer + 'text'}>
                            {answer.answer}
                        </div>
                     </div>
                </div>
            )
        });


        const currentQuestion = index + 1;
        return(
            <div className={Styles.slide}>
                <div className={Styles.questionContainer}>
                    <div className={Styles.questionContentContainer}>
                        <p>{currentQuestion}/{numberOfQuestions}</p>
                        {/*<img src={question.image} className={Styles.questionImage} alt="Begin Quiz" />*/}
                        <h2 className={Styles.questionTitle}>{question.question}</h2>
                        <div className={Styles.answers}>
                            {answersButton}
                            <div className={Styles.horizontalrule}></div>
                        </div>
                    </div>
                    <div className={Styles.beginButtonWrapper}>
                        <button className={Styles.beginButton}>Take the quiz!</button>
                    </div>
                </div>
            </div>
        )
    }
}


