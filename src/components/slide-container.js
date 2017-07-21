import React from 'react'


import Styles from '../App.css';

import {IntroSlide, QuestionSlide, ResultSlide} from './'

import {OtherDescription} from './description'

export default class SlideContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            qualification: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({qualification: event.target.value})
    }


    render(){

        const { 
            studyMethods,
             questions, 
             answers, 
             begun, 
             onAnswered, 
             onPrevius, 
             onBegin, 
             mainTitle, 
             title, 
             introParagraphOne, 
             introParagraphTwo, 
             introParagraphThree, 
             introParagraphFour 
            } = this.props

        const width = `${questions.length+2}00%`;
        const marginLeft = `-${answers.length+begun}00%`;

        const renderQuestions = (onAnswered, numberOfQuestions) => {
            return questions.map((question, i) => {
                return <QuestionSlide 
                            key={i} 
                            index={i}
                            question={question} 
                            onAnswered={onAnswered} 
                            onPrevius={onPrevius}
                            numberOfQuestions={numberOfQuestions}  
                            />;
            });
        }


        const XXX = () => {
            return <div> Xxxxxxasxax</div>
        }

        return(
            <div className={Styles.slides} style={{width, marginLeft, opacity: 1}}>
                <IntroSlide 
                    onBegin={onBegin} 
                    mainTitle={mainTitle}
                    title={title} 
                    introParagraphOne={introParagraphOne} 
                    introParagraphTwo={introParagraphTwo}
                    introParagraphThree={introParagraphThree} 
                    introParagraphFour={introParagraphFour}
                    qualificationSelected={this.state.qualification} 
                    onChange={this.handleChange}

                /> 
                {renderQuestions(onAnswered, questions.length)}
                <ResultSlide 
                    answers={answers} 
                    studyMethods={studyMethods} 
                    questions={questions} 
                    qualificationSelected={this.state.qualification} 
                />}
            </div>
        )
    }
}


// Choose the qualification you are interested in: 
// ACCA
// CIMA
// AAT 