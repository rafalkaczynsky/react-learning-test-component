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
            'LiveOnline - ACCA - N/A'
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
                        Live Online
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you? 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <button 
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-live-online-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </button>
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
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/live-online.aspx">
                                    Learn more about Live Online
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>  
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    This fully online course allows you to progress and study when it suits you, but includes extensive tutor support and guidance giving you structure and helping you keep on track. 
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>  
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx">View your local timetable: </a>
                                </p>}                              
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>  
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx">View your local timetable</a>
                                </p>}                                 
                            </p> 
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
                        Live Online
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        You want the structure of a traditional timetabled classroom course, but with the flexibility to take the classes online from anywhere. 
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you? 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <button 
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </button>
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
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/live-online.aspx">
                                    Learn more about Live Online
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>OnDemand</strong>  
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    This fully online course allows you to progress and study when it suits you, but includes extensive tutor support and guidance giving you structure and helping you keep on track.  
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}
                            </p>
                            <p onClick={this.handleLiveOnline.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>  
                                {this.state.liveOnlineShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                    If you would like more flexibility with your studies, this course allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
                                    <a href=" http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"> Get your free demo</a>
                                </p>}                              
                            </p>
                            <p onClick={this.handleClassroom.bind(this)} className={Styles.otherChoice}>
                                <strong>Classroom</strong>  
                                {this.state.classroomShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                     If you enjoy structured learning, Classroom may also be ideal for you.  A traditional scheduled programme with face to face tutor led classes, your tutor will guide you and your classmates through the course and help build your confidence ready for sitting your exams. 
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx">View your local timetable</a>
                                </p>}                                 
                            </p> 
                    </div>
                </div>    
            </div> 
        </div>
        )}
    </div>
     )
    }

}
