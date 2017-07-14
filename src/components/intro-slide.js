import React from 'react'

import Styles from '../App.css';
import IntroImage from '../images/intro.png';

export default class IntroSlide extends React.Component {
    render(){

        const {onBegin, title, introParagraphOne, introParagraphTwo} = this.props

        return(
            <div className={Styles.slide}>
                <img src={IntroImage} className={Styles.image} alt="Begin Quiz" />
                <h1>{title}</h1>
                <div className={Styles.introParagraphContainer}>
                    <p>{introParagraphOne}</p>
                    <p>{introParagraphTwo}</p>
                </div>
                 <button onClick={onBegin} className={Styles.beginButton}>Begin</button>
            </div>
        )
    }
}
