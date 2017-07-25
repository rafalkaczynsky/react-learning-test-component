import React from 'react'


import Styles from '../App.css';

import {IntroSlide, QuestionSlide, ResultSlide, Spinner} from './'

export default class SlideContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            qualification: '',
            beginButtonDisabled: true,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({qualification: event.target.value, beginButtonDisabled: false})
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
             introParagraphFour,
             spinnerShow,
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


        return(
            <div className={Styles.slides} style={{width, marginLeft, opacity: 1}}>
                {spinnerShow && <Spinner />}
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
                    beginButtonDisabled={this.state.beginButtonDisabled}

                /> 
                {renderQuestions(onAnswered, questions.length)}
                <ResultSlide 
                    answers={answers} 
                    studyMethods={studyMethods} 
                    questions={questions} 
                    qualificationSelected={this.state.qualification} 
                />
            </div>
        )
    }
}


// Choose the qualification you are interested in: 
// ACCA
// CIMA
// AAT 