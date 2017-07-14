import React from 'react'


import Styles from '../App.css';

import {IntroSlide, QuestionSlide, ResultSlide} from './'

export default class SlideContainer extends React.Component {
    render(){

        const { careers, questions, answers, begun, onAnswered, onBegin, title, introParagraphOne, introParagraphTwo } = this.props

        const width = `${questions.length+2}00%`;
        const marginLeft = `-${answers.length+begun}00%`;

        const renderQuestions = (onAnswered) => {
            return questions.map((question, i) => {
                return <QuestionSlide key={i} question={question} onAnswered={onAnswered} />;
            });
        }
 
        return(
            <div className={Styles.slides} style={{width, marginLeft}}>
                <IntroSlide onBegin={onBegin} title={title} introParagraphOne={introParagraphOne} introParagraphTwo={introParagraphTwo}/>
                      {renderQuestions(onAnswered)}
                <ResultSlide answers={answers} careers={careers} questions={questions}/>
            </div>
        )
    }
}

