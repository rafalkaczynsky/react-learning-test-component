import React from 'react'

const ClassroomDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <h2>
                Classroom - ACCA, description placeholder 
            </h2>
        )

        if (qualificationSelected === 'AAT') return (
            <h2>
                Classroom - AAT, description placeholder
            </h2>
        )

        if (qualificationSelected === 'CIMA') return (
            <h2>
                Classroom- CIMA, description placeholder
            </h2>
        )
    }

export default ClassroomDescription