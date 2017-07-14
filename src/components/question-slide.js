import React from 'react'

import Styles from '../App.css';

export default class QuestionSlide extends React.Component {

    render(){

        const {question, onAnswered} = this.props

        const answers = question.answers.map((answer) => {
            return <span className={Styles.answer}
                 key={answer.answer}
                 onClick={() => onAnswered(answer.answer)}>
             {answer.answer}
           </span>
        });

        return(
            <div className={Styles.slide}>
                <img src={question.image} className={Styles.questionImage} alt="Begin Quiz" />
                <h1 className={Styles.questionTitle}>{question.question}</h1>
                <div className={Styles.answers}>
                    {answers}
                </div>
            </div>
        )
    }
}


