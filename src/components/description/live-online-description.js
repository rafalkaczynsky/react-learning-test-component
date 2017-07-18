import React from 'react'
import Styles from '../../App.css';

const LiveOnlineDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <div className={Styles.descriptionContainer}>
                Live Online - ACCA, description placeholder 
            </div>
        )

        if (qualificationSelected === 'AAT') return (
            <div className={Styles.descriptionContainer}>
                Live Online - AAT, description placeholder
            </div>
        )

        if (qualificationSelected === 'CIMA') return (
            <div className={Styles.descriptionContainer}>
                Live Online  - CIMA, description placeholder
            </div>
        )
}

export default LiveOnlineDescription