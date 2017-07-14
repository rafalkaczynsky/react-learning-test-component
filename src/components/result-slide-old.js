import React from 'react'

import Styles from '../App.css';
import ResultImage from '../images/result.png';

export default class ResultSlide extends React.Component {
    render(){

    const {answers, careers, questions} = this.props

    const result = answers.reduce((prev, curr, i) => {
        return prev + questions[i].answers.find(a => a.answer === curr).weight;
    }, 0);
  
    const career = careers.find((career) => {
        return result >= career.range[0] && result <= career.range[1];
    }) 
    
    return(
        <div className={Styles.slide}>
            <img src={ResultImage} className={Styles.image} alt="Result" />
            <h1 className={Styles.resultTitle}>Have you considered {career.name}?</h1>
            <h3 className={Styles.resultSubtitle}>{career.subtitle}</h3>
            <p className={Styles.resultDescription}>{career.description}</p>
            <a href={career.link} className={Styles.findOutMore}>Find Out More</a>
        </div>)
    }
}
