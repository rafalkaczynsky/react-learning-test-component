
import React from 'react'

import Styles from '../App.css';
import ResultImage from '../images/result.png';

var  indx = 0;

export default class ResultSlide extends React.Component {

    constructor(props){
        super(props)

    }

    render(){

    const {answers, careers, questions} = this.props

    const result = answers.reduce((prev, curr, i) => {

        let final = []
        let distanceLearning = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).distanceLearning)
        let onDemand = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).onDemand)
        let liveOnline = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).liveOnline)
        let classroom = parseInt(prev) + parseInt(questions[i].answers.find(a => a.answer === curr).classroom)
         
        final = [classroom, liveOnline, onDemand ,distanceLearning ] 

        return final 
    }, 0);

    let winner = Math.max(...result)
    let prc = parseInt(parseFloat(winner/28)*100) + '%'
    if (result !== 0 ){
        indx = result.indexOf(winner)
    }


    const career = careers[indx]

    return(
        <div className={Styles.slide}>
            <img src={ResultImage} className={Styles.image} alt="Result" />
            <h1 className={Styles.resultTitle}>Have you considered {career.name}?</h1>
            <h3 className={Styles.resultSubtitle}>{career.subtitle}</h3>
            <p className={Styles.resultDescription}>{career.description}</p>
            <a href={career.link} className={Styles.findOutMore}>Find Out More</a>
            <h1>{prc}</h1>
            <h4>Results:</h4>
            <h5>classroom: {result[0]}</h5>
            <h5>live online: {result[1]}</h5>
            <h5>onDemand: {result[2]}</h5>
            <h5>distance learning: {result[3]}</h5>
        </div>)
    }
}
