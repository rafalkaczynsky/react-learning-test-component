import QuestionOneImage from '../images/question1.png';
import QuestionTwoImage from '../images/question2.png';

export default { 
  introParagraphOne: `Have you thought about becoming an Accountant, but don't know whether you'd be better as a Financial or Management Accountant? Don't know the difference between an Auditor or a Bookkeeper?`,
  introParagraphTwo: `Take this short quiz to discover the accounting careers and salaries that might suit you.`,
  title:'WHICH ACCOUNTANCY PROFESSION SUITS YOU?',
  questions: [{
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
    },{
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
    }],
  careers: [{
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
  }]
}