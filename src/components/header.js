import React from 'react';

import Styles from '../App.css';
import Image from '../images/kaplan-icon-trans.png';

export default class Header extends React.Component {
    render(){
        return(
            <div className={Styles.header}>
                <img src={Image} alt="kaplan logo" className={Styles.headerLogo}/>
            </div>
        )
    }
}