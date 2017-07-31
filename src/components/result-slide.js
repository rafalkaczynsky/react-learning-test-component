import React from 'react'

import Styles from '../App.css';

import {
    ClassroomDescription, 
    DistanceLearningDescription, 
    LiveOnlineDescription, 
    OnDemandDescription, 
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

    render(){
    
    const {answers, studyMethods, questions, qualificationSelected} = this.props
    const result = answers.reduce((prev, curr, i) => {

        let final = []
        let onDemand = 0

        let distanceLearning = parseInt(prev) + parseInt(questions[i].answers.filter(a => a.answer === curr)[0].distanceLearning);
        let liveOnline = parseInt(prev) + parseInt(questions[i].answers.filter(a => a.answer === curr)[0].liveOnline);
        let classroom = parseInt(prev) + parseInt(questions[i].answers.filter(a => a.answer === curr)[0].classroom);
        if (qualificationSelected !== 'ACCA') {
            onDemand = parseInt(prev) + parseInt(questions[i].answers.filter(a => a.answer === curr)[0].onDemand);
        }
         
        final = [classroom, liveOnline, onDemand ,distanceLearning ] 

        return final 
    }, 0);

   let winner = Math.max.apply(null, [result[0], result[1], result[2], result[3]])
    
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
