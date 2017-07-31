
import React from 'react'

import Styles from '../App.css';
import ResultImage from '../images/book-icon-trans.png';

import {
    ClassroomDescription, 
    DistanceLearningDescription, 
    LiveOnlineDescription, 
    OnDemandDescription, 
    OtherDescription 
} from './description'

var  indx = 0;

class RenderDescription extends React.Component  {
    render(){
        const { bestStudyMethod, qualificationSelected} = this.props

        const renderClassroom  = bestStudyMethod.name === 'Classroom' ? true : false
        const renderOnDemand  = bestStudyMethod.name === 'OnDemand' ? true : false
        const renderLiveOnline  = bestStudyMethod.name === 'Live Online' ? true : false
        const renderDistanceLearning  = bestStudyMethod.name === 'Distance Learning' ? true : false  

        return(
            <div>
                {renderClassroom && <ClassroomDescription qualificationSelected={qualificationSelected} /> }
                {renderOnDemand && <OnDemandDescription qualificationSelected={qualificationSelected} /> }
                {renderLiveOnline && <LiveOnlineDescription qualificationSelected={qualificationSelected} /> }
                {renderDistanceLearning &&  <DistanceLearningDescription qualificationSelected={qualificationSelected}/>}
            </div>
        )
    }
}

export default class ResultSlide extends React.Component {
    constructor(props){
        super(props)

    }

    render(){

    const {answers, studyMethods, questions, qualificationSelected} = this.props
    const result = answers.reduce((prev, curr, i) => {

        let final = []
        let distanceLearning = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).distanceLearning)
        let onDemand = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).onDemand)
        let liveOnline = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).liveOnline)
        let classroom = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).classroom)
         
        qualificationSelected === ' ACCA' ? onDemand = 0 : onDemand = onDemand

        final = [classroom, liveOnline, onDemand ,distanceLearning ] 

        return final 
    }, 0);

    var winner = Math.max(...result)
    
    let prc = parseInt(parseFloat(winner/28)*100) + '%'
    if (result !== 0 ){
        indx = result.indexOf(winner)
    }


    const bestStudyMethod = studyMethods[indx]

    return(
        <div className={Styles.slide}>
            <RenderDescription 
                bestStudyMethod={bestStudyMethod} 
                qualificationSelected={qualificationSelected}
            />       
        </div>)
    }
}
