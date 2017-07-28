import React from 'react'
import Styles from '../../App.css';

import ResultImage from '../../images/book-icon-trans.png';

export default class DistanceLearningDescription extends React.Component {
    constructor(props){
        super()

        this.state ={
            liveOnlineShowDesc: false,
            onDemandShowDesc: false,
            classroomShowDesc: false,
        }
    }

    handleClassroom(){
        this.setState({classroomShowDesc: !this.state.classroomShowDesc})
    }

    handleLiveOnline(){
        this.setState({liveOnlineShowDesc: !this.state.liveOnlineShowDesc})
    }

    handleOnDemand(){
        this.setState({onDemandShowDesc: !this.state.onDemandShowDesc})
    }

    render(){

     const {qualificationSelected} = this.props

     return (
    <div>
    {qualificationSelected === 'ACCA' &&  (
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Distance Learning - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/free-distance-learning-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Distance Learning for ACCA, you get:
                            </p>
                            <ul>
                                <li>Up to 16 hours of video tutorials.</li>
                                <li>Study materials include Study Text, Exam Kit and Pocket Notes.</li>
                                <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                                <li>Tutor support with your own Personal Tutor.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/TRAININGANDQUALS/ACCOUNTANCY/ACCA/skills-essentials-options/Pages/distance-learning-premier.aspx">
                                    Learn more about Distance Learning
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx">View your local timetable</a>
                                </p>}
                            </p>
                    </div>
                    <div className={Styles.demopadding}>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.facebook.com/KaplanFinancialUK/'}><i id={Styles.fb} className='fa fa-facebook'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://twitter.com/kaplanUK'}><i className='fa fa-twitter'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.linkedin.com/company/kaplan_uk'}><i className='fa fa-linkedin'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.instagram.com/kaplaninternational/?hl=en'}><i className='fa fa-instagram'></i></div>
                    </div>                    
                </div>
            </div>
        </div>
        )}

        {qualificationSelected === 'AAT' && (
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Distance Learning - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-distance-learning-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Distance Learning for AAT, you get:
                            </p>
                            <ul>
                                <li>AAT study materials including Study Text, Exam Practice Kit and Revision Cards. </li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback.</li>
                                <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                                <li>Online learning resources covering the full syllabus. Interactive study guides, regular knowledge checks and practice questions.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/distance-learning.aspx">
                                    Learn more about Distance Learning
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-ondemand-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-live-online-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/timetables.aspx"> View your local timetable</a>
                                </p>}
                            </p>
                    </div>
                    <div className={Styles.demopadding}>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.facebook.com/KaplanFinancialUK/'}><i id={Styles.fb} className='fa fa-facebook'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://twitter.com/kaplanUK'}><i className='fa fa-twitter'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.linkedin.com/company/kaplan_uk'}><i className='fa fa-linkedin'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.instagram.com/kaplaninternational/?hl=en'}><i className='fa fa-instagram'></i></div>
                    </div>                   
                </div>
            </div>
        </div>
        )}

        {qualificationSelected === 'CIMA' &&  (
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Distance Learning - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-distance-learning-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Distance Learning for CIMA, you get:
                            </p>
                            <ul>
                                <li>Official CIMA study materials including Study Text, Exam Practice Kit and Revision Cards. </li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback.</li>
                                <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                                <li>Online learning resources covering the full syllabus. Interactive study guides, regular knowledge checks and practice questions.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/distance-learning.aspx">
                                    Learn more about Distance Learning
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx"> View your local timetable</a>
                                </p>}
                            </p>
                    </div>
                    <div className={Styles.demopadding}>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.facebook.com/KaplanFinancialUK/'}><i id={Styles.fb} className='fa fa-facebook'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://twitter.com/kaplanUK'}><i className='fa fa-twitter'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.linkedin.com/company/kaplan_uk'}><i className='fa fa-linkedin'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.instagram.com/kaplaninternational/?hl=en'}><i className='fa fa-instagram'></i></div>
                    </div>                    
                </div>
            </div>
        </div>
        )}
        {qualificationSelected === 'Other' &&  (
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Distance Learning - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        Unsure which accountancy qualification is right for you? Learn more about each course via the links below:
                        <div>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px", "color": "grey", "display": "inline-block" }} href="https://kaplan.co.uk/courses/why-study/aat">Why Study AAT?</a>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px", "color": "grey", "display": "inline-block"}} href="https://kaplan.co.uk/courses/why-study/cima">Why Study CIMA?</a>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px", "color": "grey", "display": "inline-block"}} href="https://kaplan.co.uk/courses/why-study/acca">Why Study ACCA?</a>
                        </div>
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        If you are new to accountancy, AAT may be the right choice for you. 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a  style={{"font-size":"10px"}}
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-distance-learning-demo-signup.aspx"
                            >
                                   Try our free AAT Distance Learning demo now
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                               With Kaplan Distance Learning for AAT, you get:
                            </p>
                            <ul>
                                <li>AAT study materials including Study Text, Exam Practice Kit and Revision Cards.</li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback.</li>
                                <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                                <li>Online learning resources covering the full syllabus. Interactive study guides, regular knowledge checks and practice questions.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/distance-learning.aspx">
                                    Learn more about Distance Learning
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                     A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx"> View your local timetable</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                     If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                    </div>
                    <div className={Styles.demopadding}>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.facebook.com/KaplanFinancialUK/'}><i id={Styles.fb} className='fa fa-facebook'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://twitter.com/kaplanUK'}><i className='fa fa-twitter'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.linkedin.com/company/kaplan_uk'}><i className='fa fa-linkedin'></i></div>
                        <div className={Styles.iconSocial} onClick={() => window.location.href='https://www.instagram.com/kaplaninternational/?hl=en'}><i className='fa fa-instagram'></i></div>
                    </div>                    
                </div>
            </div>
        </div>
        )}
    </div>
     )
    }

}
