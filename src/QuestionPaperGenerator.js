class QuestionPaperGenerator {
  constructor(questionBank) {
    this.questionBank = questionBank;
  }
  
  generateQuestionPaper(difficultyDistribution) {
    const questionPaper = [];
    difficultyDistribution.forEach(({ difficulty, percentage }) => {
      const numberOfQuestions = percentage/10;
      const filteredQuestions = this.questionBank.getQuestions().filter(
        q => q.difficulty === difficulty
      );

      if (filteredQuestions.length < numberOfQuestions) {
        console.warn(`Warning: Not enough questions for difficulty ${difficulty}`);
      }

      this.shuffle(filteredQuestions);
      questionPaper.push(...filteredQuestions.slice(0, numberOfQuestions));
    });

    return questionPaper;
  }

  shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
}

module.exports = { QuestionPaperGenerator };
