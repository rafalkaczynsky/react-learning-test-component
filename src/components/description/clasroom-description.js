import React from 'react'
import Styles from '../../App.css';

const ClassroomDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <div className={Styles.descriptionContainer}>
                Classroom - ACCA, description placeholder 
            </div>
        )

        if (qualificationSelected === 'AAT') return (
            <div>
                Classroom - AAT, description placeholder
            </div>
        )

        if (qualificationSelected === 'CIMA') return (
            <div>
                Classroom- CIMA, description placeholder
            </div>
        )
    }

export default ClassroomDescription