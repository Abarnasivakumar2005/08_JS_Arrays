// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
  var options = ["A", "B", "C", "D", "E"];
  
  console.log(questionAndAnswer.question);
  
  questionAndAnswer.answers.forEach(function (answer, i) {
      console.log(options[i] + " - " + answer);
  });
};

// 1) Add two more question objects.
var question1 = {
  question: "What is the capital of France?",
  answers: [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
  ],
  correctAnswer: "Paris"
};

var question2 = {
  question: "What is the largest ocean on Earth?",
  answers: [
      "Atlantic",
      "Indian",
      "Arctic",
      "Pacific"
  ],
  correctAnswer: "Pacific"
};

var question3 = {
  question: "What is the smallest planet in our solar system?",
  answers: [
      "Earth",
      "Mars",
      "Mercury",
      "Venus"
  ],
  correctAnswer: "Mercury"
};

// 2) Create an array with your question objects.
var questions = [question1, question2, question3];

// 3) Use forEach to call displayQuestion on each of your questions.
questions.forEach(displayQuestion);

// 4) To display a specific question, you can run this in the console:
