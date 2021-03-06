import React from 'react'
import Styles from '../../App.css';

import ResultImage from '../../images/book-icon-trans.png';

export default class LiveOnlineDescription extends React.Component {
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
        {qualificationSelected === 'ACCA' && (
        <div className={Styles.slide}>
            <div className={Styles.resultsContainer}>
                 <div className={Styles.topDescription}>
                    <div className={Styles.yourResults}>Your results</div>
                    <img src={ResultImage} className={Styles.imageResult} alt="Result" />
                    <p className={Styles.theBestCaption}>
                        You would suit...
                    </p>
                    <p className={Styles.theBestResult}>
                        Live Online - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/free-live-online-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-ACCA-DEMO"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Live Online for ACCA, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Interactive classes; ask questions, make comments, get involved in the class – just like a traditional classroom.</li>
                                <li>Discussion forum; between classes, keep in touch with your tutor and fellow students.</li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat or email. UK based students can request a callback.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/ACCA/Pages/live-online.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-ACCA-LEARN">
                                    Learn more about Live Online
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p>
                                You may also enjoy:
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=CR-ACCA-TIMETABLE"> View your local timetable</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/free-distance-learning-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=DL-ACCA-DEMO"> Get your free demo</a>
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
                        Live Online - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-live-online-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-AAT-DEMO"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Live Online for AAT, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Interactive classes; ask questions, make comments, get involved in the class – just like a traditional classroom.</li>
                                <li>Discussion forum; between classes, keep in touch with your tutor and fellow students.</li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat or email. UK based students can request a callback.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/live-online.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-AAT-LEARN">
                                    Learn more about Live Online
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
                                    This fully online course allows you to progress and study when it suits you, but includes extensive tutor support and guidance giving you structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-ondemand-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=OD-AAT-DEMO"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/timetables.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=CR-AAT-TIMETABLE"> View your local timetable</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-distance-learning-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=DL-AAT-DEMO"> Get your free demo</a>
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
                        Live Online - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you?
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-CIMA-DEMO"
                            >
                                   Try your free demo now!
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan Live Online for CIMA, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Interactive classes; ask questions, make comments, get involved in the class – just like a traditional classroom.</li>
                                <li>Discussion forum; between classes, keep in touch with your tutor and fellow students.</li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat or email. UK based students can request a callback</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/live-online.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-CIMA-LEARN">
                                    Learn more about Live Online
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
                                    This fully online course allows you to progress and study when it suits you, but includes extensive tutor support and guidance giving you structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=OD-CIMA-DEMO"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-distance-learning-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=DL-CIMA-DEMO"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                     If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/cima-timetables.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=CR-CIMA-TIMETABLE"> View your local timetable</a>
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
                        Live Online - {qualificationSelected}
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere.
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        Unsure which accountancy qualification is right for you? Learn more about each course via the links below:
                        <div>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px", "color": "grey", "display": "inline-block" }} href="https://kaplan.co.uk/courses/why-study/aat">Why Study AAT?</a>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px","color": "grey", "display": "inline-block"}} href="https://kaplan.co.uk/courses/why-study/cima">Why Study CIMA?</a>
                            <a className="paragraphResultTwo" style={{"padding":"12px","font-weight": "bold", "font-size": "20px", "color": "grey", "display": "inline-block"}} href="https://kaplan.co.uk/courses/why-study/acca">Why Study ACCA?</a>
                        </div>
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        If you are new to accountancy, AAT may be the right choice for you.
                    </p>
                    <div className={Styles.tryWrapper}>
                        <a  style={{"font-size":"10px"}}
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-live-online-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=LO-AAT-DEMO"
                            >
                                   Try our free AAT Live Online demo now
                        </a>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                               With Kaplan Live Online for AAT, you get:
                            </p>
                            <ul>
                                <li>A timetabled series of classes, so you will always know when they're running to plan your schedule.</li>
                                <li>Interactive classes; ask questions, make comments, get involved in the class – just like a traditional classroom.</li>
                                <li>Discussion forum; between classes, keep in touch with your tutor and fellow students.</li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat or email. UK based students can request a callback</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/live-online.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=DL-AAT-LEARN">
                                    Learn more about Live Online
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
                                    This fully online course allows you to progress and study when it suits you, but includes extensive tutor support and guidance giving you structure and helping you keep on track.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=OD-CIMA-DEMO"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                     If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=CR-ACCA-TIMETABLE"> View your local timetable</a>
                                </p>}
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx?utm_source=resource&utm_medium=referral&utm_campaign=s17-5005a-b2c-study-method-quiz&utm_content=DL-CIMA-DEMO"> Get your free demo</a>
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
