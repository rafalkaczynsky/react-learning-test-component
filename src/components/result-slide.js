
import React from 'react'

import Styles from '../App.css';
import ResultImage from '../images/result-image.png';

import {
    ClassroomDescription, 
    DistanceLearningDescription, 
    LiveOnlineDescription, 
    OnDemandDescription, 
    OtherDescription 
} from './description'


var  indx = 0;

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

    let winner = Math.max(...result)
    let prc = parseInt(parseFloat(winner/28)*100) + '%'
    if (result !== 0 ){
        indx = result.indexOf(winner)
    }


    const bestStudyMethod = studyMethods[indx]

/**
 * 
 *  render 
 */

    const RenderDescription = (bestStudyMethod, qualificationSelected) => {
    
        if (qualificationSelected !== 'Other') { 
            if (bestStudyMethod.name === 'Classroom') return ClassroomDescription(qualificationSelected)
            if (bestStudyMethod.name === 'OnDemand') return OnDemandDescription(qualificationSelected)
            if (bestStudyMethod.name === 'Live Online') return LiveOnlineDescription(qualificationSelected)
            if (bestStudyMethod.name === 'Distance Learning') return DistanceLearningDescription(qualificationSelected)
        } 
    }

    return(
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                <div className={Styles.yourResults}>Your results</div>
                <img src={ResultImage} className={Styles.image} alt="Result" />
                {qualificationSelected!== 'Other' &&
                <div>
                    <div className={Styles.theBestCaption}>The best study method for you is:</div>
                    <div className={Styles.theBestResult}><strong>{bestStudyMethod.name}</strong></div>
                </div>}
                <div>
                    {qualificationSelected === 'Other' && OtherDescription()}
                    {RenderDescription(bestStudyMethod, qualificationSelected)}
                </div>
                <div>
                    Apply for your course today!
                </div>
                <div className={Styles.beginButtonWrapper}>
                    <button  className={Styles.beginButton}>Apply now</button>
                </div>
            </div>
        </div>)
    }
}
 /*

If ACCA Selected, no weighting given to OnDemand in questions and only ACCA Demos presented
CIMA	If CIMA selected, only CIMA Demos presented 
AAT	If AAT Selected, only AAT Demos presented
Other/Unsure	If Unsure selected, a range of demos and more course info presented



            {qualificationSelected!== 'Other' &&
            <div>
                <h1 className={Styles.resultTitle}>Have you considered {bestStudyMethod.name}?</h1>
                <h3 className={Styles.resultSubtitle}>{bestStudyMethod.subtitle}</h3>
                <p className={Styles.resultDescription}>{bestStudyMethod.description}</p>
                <a href={bestStudyMethod.link} className={Styles.findOutMore}>Find Out More</a>
                <h1>{prc}</h1>
                <h4>Results:</h4>
                <h5>classroom: {result[0]}</h5>
                <h5>live online: {result[1]}</h5>
                <h5>onDemand: {result[2]}</h5>
                <h5>distance learning: {result[3]}</h5>
            </div>}
*/