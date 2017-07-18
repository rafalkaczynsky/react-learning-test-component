import React from 'react'

const LiveOnlineDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <h2>
                Live Online - ACCA, description placeholder
            </h2>
        )

        if (qualificationSelected === 'AAT') return (
            <h2>
                Live Online - AAT, description placeholder
            </h2>
        )

        if (qualificationSelected === 'CIMA') return (
            <h2>
                Live Online - CIMA, description placeholder
            </h2>
        )
}

export default LiveOnlineDescription