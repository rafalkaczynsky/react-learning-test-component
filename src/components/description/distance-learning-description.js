import React from 'react'
import Styles from '../../App.css';

const DistanceLearningDescription = (qualificationSelected) => {

        if (qualificationSelected === 'ACCA') return (
            <div className={Styles.descriptionContainer}>               
                <div>
                    <p>
                        You would suit...Distance Learning. 
                    </p>
                    <p>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want.
                        Does this sound like you? 
                        <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/free-distance-learning-demo-signup.aspx">  
                            Try your free demo now!
                        </a> 
                    </p>
                    <p>
                        With Kaplan Distance Learning for ACCA, you get: 
                    </p>
                    <ul>
                        <li>Up to 16 hours of video tutorials</li>
                        <li>Study materials include Study Text, Exam Kit and Pocket Notes.</li>
                        <li>Mock exam, marked with feedback to help you prepare for the real thing.</li>
                        <li>Tutor support with your own Personal Tutor</li>
                    </ul>
                    <p>
                        <a href="http://financial.kaplan.co.uk/TRAININGANDQUALS/ACCOUNTANCY/ACCA/skills-essentials-options/Pages/distance-learning-premier.aspx">
                            Learn more about Distance Learning
                        </a>
                    </p>
                    <p>
                        You may also enjoy: 
                    </p>                
                    <p>
                        <strong>OnDemand.</strong>  
                        This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.  Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Live Online</strong>  
                        If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures. Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Classroom</strong>  
                        A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning. View your local timetable: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx
                    </p>                    
                </div> 
            </div>
        )

        if (qualificationSelected === 'AAT') return (
            <div className={Styles.descriptionContainer}>
                <div>
                    <p>
                        You would suit...Distance Learning. 
                    </p>
                    <p>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want. 
                        Does this sound like you?
                        <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/aat/Pages/free-distance-learning-demo-signup.aspx">  
                            Try your free demo now!
                        </a> 
                    </p>
                    <p>
                        With Kaplan Distance Learning for AAT, you get:
                    </p>
                    <ul>
                        <li>AAT study materials including Study Text, Exam Practice Kit and Revision Cards. </li>
                        <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback.</li>
                        <li>Mock exam, marked with feedback to help you prepare for the real thing. </li>
                        <li>Online learning resources covering the full syllabus. Interactive study guides, regular knowledge checks and practice questions.</li>
                    </ul>
                    <p>
                        <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/distance-learning.aspx">
                            Learn more about Distance Learning
                        </a>
                    </p>
                    <p>
                        You may also enjoy: 
                    </p>                
                    <p>
                        <strong>OnDemand.</strong>  
                        This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.  Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Live Online</strong>  
                        If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures. Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Classroom</strong>  
                        A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning. View your local timetable: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx
                    </p> 
                </div> 
            </div>
        )

        if (qualificationSelected === 'CIMA') return (
            <div className={Styles.descriptionContainer}>
                <div>
                    <p>
                        You would suit...Distance Learning. 
                    </p>
                    <p>
                        You have the ability to stay motivated even when studying on your own and you enjoy the freedom to learn when and where you want. 
                        Does this sound like you? 
                        <a href="http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-distance-learning-demo-signup.aspx">  
                            Try your free demo now!
                        </a> 
                    </p>
                    <p>
                        With Kaplan Distance Learning for CIMA, you get:
                    </p>
                    <ul>
                        <li>Official CIMA study materials including Study Text, Exam Practice Kit and Revision Cards. </li>
                        <li>Dedicated tutor support when you need it – including evenings and weekends – by LiveChat, email and UK based students can request a callback.</li>
                        <li>Mock exam, marked with feedback to help you prepare for the real thing. </li>
                        <li>Online learning resources covering the full syllabus. Interactive study guides, regular knowledge checks and practice questions.</li>
                    </ul>
                    <p>
                        <a href="http://financial.kaplan.co.uk/trainingandquals/accountancy/cima/Pages/distance-learning.aspx">
                            Learn more about Distance Learning
                        </a>
                    </p>
                    <p>
                        You may also enjoy: 
                    </p>                
                    <p>
                        <strong>OnDemand.</strong>  
                        This fully online course also allows you to progress and study when it suits you, but includes extensive tutor support giving you more structure and helping you keep on track.  Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/professional-levels/ondemand/Pages/free-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Live Online</strong>  
                        If you would like a little more structure, Live Online allows you to attend timetabled lectures remotely. Though you have the structure of a timetabled course, you still get the flexibility to watch lectures live at home - or anywhere else for that matter! Plus you can catch up with recordings if you miss any lectures. Get your free demo: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/CIMA/Pages/free-live-online-demo-signup.aspx
                    </p>
                    <p>
                        <strong>Classroom</strong>  
                        A traditional scheduled programme with face to face tutor led classes, classroom learning offers a very different experience to distance learning. View your local timetable: http://financial.kaplan.co.uk/TrainingandQuals/Accountancy/ACCA/Pages/acca-timetables.aspx
                    </p> 
                </div> 
            </div>
        )
    }

    export default DistanceLearningDescription

/*



*/