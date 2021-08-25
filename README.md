# JavaScript Trivia Practice

## Goals

1. To get practice using functions, objects, and arrays.
2. To practice pair coding, as well as git and GitHub.
3. To test your JavaScript knowledge with multiple choice questions.

Question format:

```
  {
    question: "Who is Batman",
    answers: [
       {
          text: "Bruce Wayne",
          isCorrect: true
       },
       {
          text: "BJ Clark",
          isCorrect: false
       }
    ]
  }
```

## Instructions

Clone this repo and designate one person as the "driver" who will be writing the code.

Every 20 minutes, run

```
 git pull
 git add .
 git commit -m "My Message"
```

then designate a new driver to run `git pull` and write the code.

## Group 1

- Create a function `getRandomQuestion();` that returns a random question

- Create a function `convertIndexToLetter()` that converts an index in the alphabetic to it's letter.

- Create a function `getAnswerOptions();` that takes in a question, and returns a string with the answer

## Group 2

- Create a function `convertLetterToIndex()` that converts a letter to it's index in the alphabet.

- Create a function `getCorrectAnswer();` that given a question, returns which answer has isCorrect = true

- Create a function countCorrectAnswers(); that looks at an array of the format

```
   [true, false, true, false]
```

and using alert() to display how many times we hit `true`

## Together

- Combine everyone's code!

- Go through the answers.

- Add the ability to filter by a `category` key in the question object.

What are some ideas for future improvement? What is one thing we learned?
