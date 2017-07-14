import React from 'react'

import Styles from '../App.css';
import IntroImage from '../images/intro.png';

export default class IntroSlide extends React.Component {
    render(){

        const {onBegin} = this.props

        const introParagraphOne = `
        Have you thought about becoming an Accountant, but don't know whether you'd be better as a Financial or Management Accountant? Don't know the difference between an Auditor or a Bookkeeper?
        `;
        const introParagraphTwo = `
        Take this short quiz to discover the accounting careers and salaries that might suit you.
        `;
        
        return(
            <div className={Styles.slide}>
                <img src={IntroImage} className={Styles.image} alt="Begin Quiz" />
                <h1>WHICH ACCOUNTANCY PROFESSION SUITS YOU?</h1>
                <div className={Styles.introParagraphContainer}>
                    <p>{introParagraphOne}</p>
                    <p>{introParagraphTwo}</p>
                </div>
                 <button onClick={onBegin} className={Styles.beginButton}>Begin</button>
            </div>
        )
    }
}
