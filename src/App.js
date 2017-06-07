import React, { Component } from 'react';

import Styles from './App.css';

import IntroImage from './images/intro.png';
import ResultImage from './images/result.png';
import QuestionOneImage from './images/question1.png';
import QuestionTwoImage from './images/question2.png';


const IntroSlide = ({onBegin}) => {
  return (
    <div className={Styles.slide}>
      <img src={IntroImage} className={Styles.image} alt="Begin Quiz" />
      <h1>WHICH ACCOUNTANCY PROFESSION SUITS YOU?</h1>
      <div>
        <p>{introParagraphOne}</p>
        <p>{introParagraphTwo}</p>
      </div>
      <button onClick={onBegin} className={Styles.beginButton}>Begin</button>
    </div>
  )
};

const ResultSlide = ({answers}) => {
  const result = answers.reduce((prev, curr, i) => {
    return prev + questions[i].answers.find(a => a.answer === curr).weight;
  }, 0);
  
  const career = careers.find((career) => {
    return result >= career.range[0] && result <= career.range[1];
  }) 

  return (
    <div className={Styles.slide}>
      <img src={ResultImage} className={Styles.image} alt="Result" />
      <h1 className={Styles.resultTitle}>Have you considered {career.name}?</h1>
      <h3 className={Styles.resultSubtitle}>{career.subtitle}</h3>
      <p className={Styles.resultDescription}>{career.description}</p>
      <a href={career.link} className={Styles.findOutMore}>Find Out More</a>
    </div>
  )
};

const QuestionSlide = ({question, onAnswered}) => {
  const answers = question.answers.map((answer) => {
    return <span className={Styles.answer}
                 key={answer.answer}
                 onClick={() => onAnswered(answer.answer)}>
             {answer.answer}
           </span>
  });

  return (
    <div className={Styles.slide}>
      <img src={question.image} className={Styles.questionImage} alt="Begin Quiz" />
      <h1 className={Styles.questionTitle}>{question.question}</h1>
      <div className={Styles.answers}>
        {answers}
      </div>
    </div>
  );
};

const SlideContainer = ({ answers, begun, onAnswered, onBegin }) => {
  const width = `${questions.length+2}00%`;
  const marginLeft = `-${answers.length+begun}00%`;
  return (
    <div className={Styles.slides} style={{width, marginLeft}}>
      <IntroSlide onBegin={onBegin} />
      {renderQuestions(onAnswered)}
      <ResultSlide answers={answers}/>
    </div>
  );
};

const renderQuestions = (onAnswered) => {
  return questions.map((question, i) => {
    return <QuestionSlide key={i} question={question} onAnswered={onAnswered} />;
  });
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      begun: false,
    };
  }

  begin = () => {
    this.setState({begun: true});
  }

  answerQuestion = (answer) => {
    this.setState({answers: [...this.state.answers, answer]});
  }

  render() {
    return (
      <div className={Styles.app}>
        <SlideContainer answers={this.state.answers} 
                        begun={this.state.begun}
                        onAnswered={(answer) => this.answerQuestion(answer)}
                        onBegin={this.begin} />
      </div>
    );
  }
}

export default App;

const introParagraphOne = `
Have you thought about becoming an Accountant, but don't know whether you'd be better as a Financial or Management Accountant? Don't know the difference between an Auditor or a Bookkeeper?
`;

const introParagraphTwo = `
Take this short quiz to discover the accounting careers and salaries that might suit you.
`;

const questions = [{
  question: 'HOW WOULD YOU DESCRIBE YOUR ATTITUDE TO RULES?',
  image: QuestionOneImage,
  answers: [{
    answer: 'Rules should be followed to the letter',
    weight: 1,
  }, {
    answer: 'Rules are needed to give order and structure',
    weight: 2,
  }, {
    answer: 'Rules make it easier to understand tasks',
    weight: 3,
  }, {
    answer: 'Rules dont need to be followed to the letter',
    weight: 4,
  }, {
    answer: 'Rules are there to be challenged',
    weight: 5,
  }]
}, {
  question: 'DO YOU ENJOY PUZZLES E.G. SUDOKU, CROSSWORDS, WORD SEARCH?',
  image: QuestionTwoImage,
  answers: [{
    answer: 'Very much so',
    weight: 5,
  }, {
    answer: 'Enjoy them when I am on holiday',
    weight: 4,
  }, {
    answer: 'I cant find the time to do them',
    weight: 3,
  }, {
    answer: 'I would rather read a book',
    weight: 2,
  }, {
    answer: 'Not at all. I like more practical problems',
    weight: 1,
  }]
}];

const careers = [{
  name: 'FINANCIAL ACCOUNTING',
  range: [0, 3],
  subtitle: 'YOU COULD BE A CREDIT TO ANY BUSINESS!',
  description: 'Your best assets will be strong mathematical skills and ability to cope under pressure. With the right qualifications, your skills would suit a career as a Financial Accountant, Reporting Accountant or Finance Manager!',
  link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-financial-accountant',
},{
  name: 'BOOKKEEPING',
  range: [4, 7],
  subtitle: 'YOURE CERTAINLY NO LIABILITY!',
  description: 'Your best assets will be your independence and recognition of the need for a productive work-life balance. With the right qualifications, your skills would suit a career as a Bookkeeper, Accounting Technician or Accountants Assistant!',
  link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-bookkeeper',
},{
  name: 'MANAGEMENT ACCOUNTING',
  range: [7, 20],
  subtitle: 'YOUR RESULTS COULD FORECAST GREAT THINGS!',
  description: 'Your willingness to travel and to work in a small team, along with your rock-solid motivation and attitude are your best assets. With the right training and qualifications, you could suit a career as a Financial Controller, Commercial Analyst or Financial Manager!',
  link: 'http://www.kaplan.co.uk/insights/accountancy-tax/detail/insights/2016/09/20/how-to-become-a-management-accountant',
}];
