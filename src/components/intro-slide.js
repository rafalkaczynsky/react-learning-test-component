import React from 'react'

import Styles from '../App.css';
import IntroImage from '../images/circle.png';

export default class IntroSlide extends React.Component {
    render(){

        const {onBegin, title, mainTitle, introParagraphOne, introParagraphTwo, qualificationSelected, onChange} = this.props

        return(
            <div className={Styles.slide} >

                <div className={Styles.introContainer}>
                <img src={IntroImage} className={Styles.image} alt="Begin Quiz" />
                <h1  className={Styles.mainTitle}>{mainTitle}</h1>
                <div className={Styles.introParagraphContainer}>
                    <p>{introParagraphOne}</p>
                  
                </div>
              {/*  <h4 className={Styles.selectLable}>Choose the qualification you are interested in: </h4>*/}
                <select className={Styles.select} value={qualificationSelected} onChange={onChange}>
                    <option value="" disabled selected>Choose the qualification</option>
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
