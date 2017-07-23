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
            'OnDemand - ACCA - N/A'
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
                        OnDemand 
                    </p>
                    <p className={Styles.paragraphResultOne}>
                        OnDemand is perfect if you want all your course content online and enjoy the flexibility of studying in your own time when it suits you. Of course, you also have the reassurance of being guided through all of the printed and online resources. 
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you? 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <button 
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/AAT/Pages/free-ondemand-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </button>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan OnDemand for AAT, you get:
                            </p>
                            <ul>
                                <li>Online resources include tutor-led videos, practice questions, study materials and an integrated workbook. Printed study materials also included. </li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback</li>
                                <li>Guided by a learning coach so you know exactly what you need to complete and when. Designed to cover the whole syllabus</li>
                                <li>365 start dates a year so you can start studying anytime, matching the flexibility of the on demand exams</li>
                                <li>Over 600 practice questions including mock exams that look like the real exams with personalised feedback.</li>
                                <li>Immediate feedback when you complete a practice test or mock exam so you know the areas to improve on.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/aat/Pages/ondemand.aspx ">
                                    Learn more about OnDemand
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>  
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                   This course also allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification. 
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
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx">View your local timetable</a>
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
                        OnDemand 
                    </p>
                    <p className={Styles.paragraphResultOne}>
                       OnDemand is perfect if you want all your course content online and enjoy the flexibility of studying in your own time when it suits you. Of course, you also have the reassurance of being guided through all of the printed and online resources.
                    </p>
                    <p className={Styles.paragraphResultTwo}>
                        Does this sound like you? 
                    </p>
                    <div className={Styles.tryWrapper}>
                        <button 
                            className={Styles.tryButton}
                            href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx"
                            >
                                   Try your free demo now!
                        </button>
                    </div>
                </div>
                <div className={Styles.bottomDescription}>
                    <div className={Styles.youGet}>
                            <p>
                                With Kaplan OnDemand for CIMA, you get:
                            </p>
                            <ul>
                                <li>Online resources include tutor-led videos, practice questions, study materials and an integrated workbook. Printed study materials also included. </li>
                                <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback</li>
                                <li>Guided by a learning coach so you know exactly what you need to complete and when. Designed to cover the whole syllabus</li>
                                <li>365 start dates a year so you can start studying anytime, matching the flexibility of the on demand exams</li>
                                <li>Over 600 practice questions including mock exams that look like the real exams with personalised feedback.</li>
                                <li>Immediate feedback when you complete a practice test or mock exam so you know the areas to improve on.</li>
                            </ul>
                            <p>
                                <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/pages/ondemand.aspx">
                                    Learn more about OnDemand
                                </a>
                            </p>
                    </div>
                    <div className={Styles.youEnjoy}>
                            <p onClick={this.handleOnDemand.bind(this)} className={Styles.otherChoice}>
                                <strong>Distance Learning</strong>  
                                {this.state.onDemandShowDesc &&
                                <p className={Styles.studyMethodSmallDesc}>
                                   This course also allows you to study independently in your own time, at your own pace, using a range of online and printed learning materials.This can be a very cost-effective way of achieving your qualification.
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
                                    <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/acca-timetables.aspx">View your local timetable</a>
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
