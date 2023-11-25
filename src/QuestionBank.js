const fs = require('fs');

class QuestionBank {
  constructor() {
    this.questions = [];
  }

  loadQuestionsFromFile(filePath) {
    const data = fs.readFileSync(filePath);
    this.questions = JSON.parse(data);
  }

  getQuestions() {
    return this.questions;
  }
}

module.exports = { QuestionBank };
