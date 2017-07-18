import React from 'react'
import Styles from '../../App.css';

const OnDemandDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <div className={Styles.descriptionContainer}>
                OnDemand - ACCA, description placeholder 
            </div>
        )

        if (qualificationSelected === 'AAT') return (
            <div className={Styles.descriptionContainer}>
                OnDemand - AAT, description placeholder
            </div>
        )

        if (qualificationSelected === 'CIMA') return (
            <div className={Styles.descriptionContainer}>
                OnDemand  - CIMA, description placeholder
            </div>
        )
    }

    export default OnDemandDescription