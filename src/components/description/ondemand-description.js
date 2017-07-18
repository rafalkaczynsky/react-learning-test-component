import React from 'react'

const OnDemandDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <h2>
                OnDemand - ACCA, description placeholder 
            </h2>
        )

        if (qualificationSelected === 'AAT') return (
            <h2>
                OnDemand - AAT, description placeholder
            </h2>
        )

        if (qualificationSelected === 'CIMA') return (
            <h2>
                OnDemand - CIMA, description placeholder
            </h2>
        )
    }

    export default OnDemandDescription