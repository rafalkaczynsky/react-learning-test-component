import QuestionOneImage from '../images/question1.png'; // needs to be changed
import QuestionTwoImage from '../images/question2.png'; // needs to be changed

export default { 
  introParagraphOne: `You've decided on your qualification and you're excited to get started. But there is one more question for you to answer - and it may be the most important. How should you study? `,
  introParagraphTwo: `Your unique learning style can make all the difference to your exam success. Pick the wrong study method and you may face a tough journey, even if you are well suited to the subject. `,
  title:'FIND YOUR IDEAL STUDY METHOD IN JUST & QUESTIONS',
  questions: [{
    question: 'Do you prefer to work in a team or on your own?',
    image: QuestionOneImage,
    answers: [{
      answer: 'I much prefer to work on my own', 
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
      //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'I like working on my own but not all the time',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
      //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2
      }, {
      answer: 'I like working in a small team of 2 or 3',
      distanceLearning: 0,
      onDemand: 0,
      liveOnline: 0,
      classroom: 0,
      // Unsure/other
      }, {
      answer: 'I like being part of a big team',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
      //Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      }]
    },{
    question: 'How self-motivated are you?',
    image: QuestionTwoImage,
    answers: [{
      answer: 'I find it very easy to motivate myself and create my own goals ',
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
        //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'I can motivate myself, but I like to check in with someone to stay on track',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
        //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2
      }, {
      answer: 'I like to have regular contact with others, but can motivate myself',
      distanceLearning: 2,
      onDemand: 1,
      liveOnline: 4,
      classroom: 3,
        // Distance Learning = 2 OnDemand = 1 Live Online=4 Classroom = 3
      }, {
      answer: 'I need a lot of  help from others to stay motvated and meet deadlines',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      },]
    },{
    question: 'How important is course flexibility when studying?',
    image: QuestionTwoImage,
    answers: [{
      answer: 'It is very important that studying works around my current lifestyle',
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
        //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'I like a course to be flexible, but it is not the most important factor',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
        //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2    
      }, {
      answer: 'I should be able to fit current priorities around my studies , as long as it doesnt take up too much of my time',
      distanceLearning: 2,
      onDemand: 1,
      liveOnline: 4,
      classroom: 3,
        // Distance Learning = 2 OnDemand = 1 Live Online=4 Classroom = 3
      }, {
      answer: 'I am happy to rearrange my current priorites around my studies',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      },]
    },{
    question: 'Do you enjoy learning online? ',
    image: QuestionTwoImage,
    answers: [{
      answer: 'I prefer to do almost all of my studying online',
      distanceLearning: 2,
      onDemand: 4,
      liveOnline: 3,
      classroom: 1,
        //Distance Learning =2 , OnDemand = 4 Live Online=3  Classroom = 1
      }, {
      answer: 'I like to study online, but complement this with other methods',
      distanceLearning: 1,
      onDemand: 3,
      liveOnline: 4,
      classroom: 1,
        //Distance Learning = 2 OnDemand = 3 Live Online=4 Classroom = 1  
      }, {
      answer: 'I quite enjoy having some online content available, but it is not essential',
      distanceLearning: 4,
      onDemand: 2,
      liveOnline: 3,
      classroom: 1,
        // Distance Learning = 4 OnDemand = 2  Live Online=3 Classroom = 1
      }, {
      answer: 'I dont enjoy online learning at all',
      distanceLearning: 1,
      onDemand: 1,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 1 Live Online=3 Classroom = 4
      },]
    },{
    question: 'Do you find it easy to organise yourself and meet deadlines? ',
    image: QuestionTwoImage,
    answers: [{
      answer: 'I can easily plan ahead and dont require set deadlines to organise myself',
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
        //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'I am fairly well organised, but appreciate some reminders to stay on track',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
        //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2  
      }, {
      answer: 'I find it easier to organise myself when I have key dates planned in advance',
      distanceLearning: 2,
      onDemand: 1,
      liveOnline: 4,
      classroom: 3,
        // Distance Learning = 2 OnDemand = 1 Live Online=4 Classroom = 3
      }, {
      answer: 'I much prefer someone else to organise my work and remind me of deadlines',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      },]
    },{
    question: 'Do you like to have things planned in advance? ',
    image: QuestionTwoImage,
    answers: [{
      answer: 'I am happy to go with the flow and plan things on the go',
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
        //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'I like to be flexible, but a general plan for what I should complete and when is helpful',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
        //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2
      }, {
      answer: 'I find it easier to work to a schedule, but with the option to change things if I need to',
      distanceLearning: 2,
      onDemand: 1,
      liveOnline: 4,
      classroom: 3,
        // Distance Learning = 2 OnDemand = 1 Live Online=4 Classroom = 3
      }, {
      answer: 'I enjoy having a long term structured plan for the future',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      },]
    },{
    question: 'How much support do you like to have when studying? ',
    image: QuestionTwoImage,
    answers: [{
      answer: 'I dont feel the need for regular contact and I am happy to work independently',
      distanceLearning: 4,
      onDemand: 3,
      liveOnline: 2,
      classroom: 1,
        //Distance Learning = 4, OnDemand = 3 Live Online=2  Classroom = 1
      }, {
      answer: 'Knowing that I have support when needed is important, but I am usually happy to work independently ',
      distanceLearning: 3,
      onDemand: 4,
      liveOnline: 1,
      classroom: 2,
        //Distance Learning = 3 OnDemand = 4 Live Online=1 Classroom = 2
      }, {
      answer: 'I like regular contact, but can study independently if necessary',
      distanceLearning: 2,
      onDemand: 1,
      liveOnline: 4,
      classroom: 3,
        // Distance Learning = 2 OnDemand = 1 Live Online=4 Classroom = 3
      }, {
      answer: 'I need consistant contact and support to suceed',
      distanceLearning: 1,
      onDemand: 2,
      liveOnline: 3,
      classroom: 4,
        // Distance Learning = 1 OnDemand = 2 Live Online=3 Classroom = 4
      },]
    }],
  careers: [{
    name: 'Classroom',
    subtitle: 'Classroom Win',
    description: 'Description needs to be done',
    link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-financial-accountant',
  },{
    name: 'Live Online',
    subtitle: 'Live Online Win',
    description: 'Description needs to be done',
    link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-bookkeeper',
  },{
    name: 'OnDemand',

    subtitle: 'OnDemand',
    description: 'Description needs to be done',
    link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-management-accountant',
  },{
    name: 'Distance Learning',
    subtitle: 'Distance Learning Win',
    description: 'Description needs to be done',
    link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-management-accountant',
  }]
}
