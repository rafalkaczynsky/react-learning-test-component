import React from 'react'
import Styles from '../../App.css';

import ResultImage from '../../images/book-icon-trans.png';

export default class ClassroomDescription extends React.Component {
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
                        Classroom - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You prefer face-to-face learning in a classroom environment, with an expert tutor to guide you and your classmates through the course.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        If you are new to accountancy, AAT may be the right choice for you.
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/timetables.aspx?timetable=aat-professional"
                            >
                                   View your local AAT timetable now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Classroom for AAT, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Chat directly with your tutor and your classmates during collaborative group discussions.</li>
                                <li>Dedicated tutor support outside the classroom hours – including evenings and weekends – by LiveChat, email or you can request a callback.</li>
                                <li>Improved MyKaplan with extra online content to help you study and revise outside the timetabled classes.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/classroom.aspx">
                                    Learn more about Classroom courses
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
                                    Live Online allows you to attend timetabled lectures remotely. You still have the structure of a timetabled course, but with the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up on recordings if you miss any.
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
                        Classroom - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You prefer face-to-face learning in a classroom environment, with an expert tutor to guide you and your classmates through the course.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/timetables.aspx?timetable=aat-professional"
                            >
                                   View your local timetable now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Classroom for AAT, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Chat directly with your tutor and your classmates during collaborative group discussions.</li>
                                <li>Dedicated tutor support outside the classroom hours – including evenings and weekends – by LiveChat, email or you can request a callback.</li>
                                <li>Improved MyKaplan with extra online content to help you study and revise outside the timetabled classes.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/classroom.aspx">
                                    Learn more about Classroom courses
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                   This course also allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-distance-learning-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like a little more flexibility, you can study when it suits you with OnDemand. This online course allows you to progress when it suits you, but includes extensive tutor support giving you course structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-ondemand-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    Live Online allows you to attend timetabled lectures remotely. You still have the structure of a timetabled course, but with the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up on recordings if you miss any.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-live-online-demo-signup.aspx"> Get your free demo</a>
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
                        Classroom - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You prefer face-to-face learning in a classroom environment, with an expert tutor to guide you and your classmates through the course.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/cima-timetables.aspx?timetable=cima-professional"
                            >
                                   View your local timetable now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Classroom for CIMA, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Chat directly with your tutor and your classmates during collaborative group discussions.</li>
                                <li>Dedicated tutor support outside the classroom hours – including evenings and weekends – by LiveChat, email or you can request a callback.</li>
                                <li>Improved MyKaplan with extra online content to help you study and revise outside the timetabled classes.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/classroom.aspx">
                                   Learn more about Classroom courses
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
                                    If you would like a little more flexibility, you can study when it suits you with OnDemand. This online course allows you to progress when it suits you, but includes extensive tutor support giving you course structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    Live Online allows you to attend timetabled lectures remotely. You still have the structure of a timetabled course, but with the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up on recordings if you miss any.
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
                        Classroom - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You prefer face-to-face learning in a classroom environment, with an expert tutor to guide you and your classmates through the course.
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
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/timetables.aspx?timetable=aat-professional"
                            >
                                   View your local AAT timetable now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Classroom for AAT, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Chat directly with your tutor and your classmates during collaborative group discussions.</li>
                                <li>Dedicated tutor support outside the classroom hours – including evenings and weekends – by LiveChat, email or you can request a callback.</li>
                                <li>Improved MyKaplan with extra online content to help you study and revise outside the timetabled classes.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/classroom.aspx">
                                    Learn more about Classroom courses
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
                                    If you would like a little more flexibility, you can study when it suits you with OnDemand. This online course allows you to progress when it suits you, but includes extensive tutor support giving you course structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Live Online</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    Live Online allows you to attend timetabled lectures remotely. You still have the structure of a timetabled course, but with the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up on recordings if you miss any.
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
