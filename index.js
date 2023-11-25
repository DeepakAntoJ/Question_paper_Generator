const prompt = require('prompt-sync')();
const { QuestionBank } = require('./src/QuestionBank');
const { QuestionPaperGenerator } = require('./src/QuestionPaperGenerator');

const questionBank = new QuestionBank();
questionBank.loadQuestionsFromFile('./questions.json');


const questionPaperGenerator = new QuestionPaperGenerator(questionBank);

var a = prompt('Enter the Difficulty percentage of Easy Problems ');
var b = prompt('Enter the Difficulty percentage of Medium Problems ');
var c = prompt('Enter the Difficulty percentage of Hard Problems ');

var total_marks = 100;

function sum(...values) {

  var sum = 0;
  var i = values.length;
  while( i-- ) {
    sum += parseInt( values[i], 10 ) || 0; 
}

  console.log(sum)
  if (sum!==total_marks) {
    throw new TypeError("Difficulty Percentages must sum upto to 100");
  }

  if (total_marks%10 !== 0) {
    throw new TypeError("Total Marks must be multiple of 10s");
  }

  let x = false;
  for (let i = 0; i < values.length; i++ ) {
  if(values[i]%10 !== 0)
  {
    x = true;
  }
  }
  if (x === true) {
    throw new TypeError("Every Percentage value must be a multiple of 10");
  }

  return sum;
}

try {

  sum(a,b,c);
  
const difficultyDistribution = [
  { difficulty: "Easy", percentage: a },
  { difficulty: "Medium", percentage: b },
  { difficulty: "Hard", percentage: c },
];

const generatedQuestionPaper = questionPaperGenerator.generateQuestionPaper(difficultyDistribution);
console.log(generatedQuestionPaper);

  
} catch (e) {
  console.log(e);
}


