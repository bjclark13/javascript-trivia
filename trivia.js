const questions = [
  {
   question: ```
    const number = "1" + 1

    What is the result?
  ``` ,
  answers: [
    {
      text: "1",
      isCorrect : false
    },
    {
      text: "2",
      isCorrect : false
    },
    {
      text: "\"11\" (number)",
      isCorrect : false
    },
    {
      text: "11 (string)",
      isCorrect : true
    },
  ]
  }
];

let userAnswers = [];
for ( let i = 0; i < 10; i++ ) {
// TODO: write loop to ask 10 questions
  const question = getRandomQuestion();  // question 
  const answer = prompt(getQuestionString(question)); // ask  question

  const correctAnswer = getCorrectAnsewer(question);

  if ( convertLetterToIndex(answer.toLowerCase()  === correctAnswer) ) {
     alert("Correct")
     userAnswers[i] = true; 
  } else {
     userAnswers[i] = false;
     alert(`Incorrect! The correct answer was ${question.answers[correctAnswer]}` );
  }
}

countCorrectAnswers()

