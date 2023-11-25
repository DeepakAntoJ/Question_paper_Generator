# Question_paper_Generator

The Node.js Question Paper Generator Utilizes a diverse JSON question bank, specify difficulty levels, and generate balanced question papers effortlessly.
Tailor exams effortlessly by specifying difficulty levels—easy, medium, and hard—ensuring a balanced and comprehensive paper.

The Node.js Question Paper Generator is crafted with modularity and extensibility in mind, adhering to best practices and community conventions. Its design promotes scalability, accommodating future requirements seamlessly. For instance, it allows easy incorporation of features like specifying the percentage for each difficulty.
Warns users when there are not enough questions for a specified difficulty level, allowing graceful handling.
Throws error when user input does not meet Question_paper Criteria.

## Steps to run the Application

### Fork the Repository

## Navigate to the Project Directory

## Install Dependencies
Open terminal in Project Directory and Enter 
```bash
npm install
```

## Execute the Application
Open terminal in Project Directory and Enter 
```bash

node index.js
```

You will input 3 prompts
-Percentage distribution for Problems of Easy difficulty
-Percentage distribution for Problems of Medium difficulty
-Percentage distribution for Problems of Hard difficulty

The Question_Paper_Generator will generate the questions accordingly.

## Additional Questions
Open the src/questions.json file and add questions as needed.
