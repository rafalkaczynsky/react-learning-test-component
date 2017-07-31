import React from 'react'

import Styles from '../App.css';  

export default class Spinner extends React.Component {
    render(){
            return(
                <div className={Styles.ldsCss}>
                    <div style={{"width":"100%", "height":"100%"}} className={Styles.ldsFacebook}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )
    }
}
    