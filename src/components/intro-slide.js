import React from 'react'

import Styles from '../App.css';
import {Classroom, OnDemand, LiveOnline, DistanceLearning} from '../images'

export default class IntroSlide extends React.Component {
    render(){

        const {
            onBegin, 
            title, 
            mainTitle, 
            introParagraphOne, 
            introParagraphTwo, 
            introParagraphThree,
            introParagraphFour,
            qualificationSelected, 
            onChange
        } = this.props

        return(
            <div className={Styles.slide} >
                <div className={Styles.introContainer}>
                    <div className={Styles.iconIntroContainer}>
                        <img src={Classroom} className={Styles.image} alt="Begin Quiz" />
                        <img src={LiveOnline} className={Styles.image} alt="Begin Quiz" />
                        <img src={OnDemand} className={Styles.image} alt="Begin Quiz" />
                        <img src={DistanceLearning} className={Styles.image} alt="Begin Quiz" />
                    </div>
                    <h1  className={Styles.mainTitle}>{mainTitle}</h1>
                    <div className={Styles.introParagraphContainer}>
                        <p>{introParagraphOne}</p>
                        <p>{introParagraphTwo}</p>
                        <p>{introParagraphThree}</p>
                        <p className={Styles.forthParagraph}>{introParagraphFour}</p>
                    </div>
                    <select className={Styles.select} onChange={onChange}>
                        <option disabled selected >Choose the qualification you are interested in:</option>
                        <option value="ACCA" >ACCA</option>
                        <option value="CIMA" >CIMA</option>
                        <option value="AAT" >AAT</option>  
                        <option value="Other">Other/Unsure</option>      
                    </select>
                    <div className={Styles.beginButtonWrapper}>
                        <button onClick={onBegin} className={Styles.beginButton}>Take the quiz!</button>
                    </div>
                </div>
            </div>
        )
    }
}
