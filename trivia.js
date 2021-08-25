const questions = [
	{
		question: `
    const number = "1" + 1

    What is the result?
  `,
		answers: [
			{
				text: '1',
				isCorrect: false,
			},
			{
				text: '2',
				isCorrect: false,
			},
			{
				text: '"11" (number)',
				isCorrect: false,
			},
			{
				text: '11 (string)',
				isCorrect: true,
			},
		],
	},
	{
		question: `What is the difference between let and const?`,
		answers: [
			{
				text: 'const is cooler',
				isCorrect: false,
			},
			{
				text: 'const cannot be changed, let can be',
				isCorrect: true,
			},
			{
				text: 'let cannot be changed, const can be',
				isCorrect: false,
			},
			{
				text: 'They do the same thing, let is just the newer way of writing it.',
				isCorrect: false,
			},
		],
	},
	{
		question: `Where can you run JavaScript?`,
		answers: [
			{
				text: 'In the browser',
				isCorrect: false,
			},
			{
				text: 'On a Server',
				isCorrect: false,
			},
			{
				text: 'In the Inspector Console in Chrome Dev tools',
				isCorrect: false,
			},
			{
				text: 'All of Abve',
				isCorrect: true,
			},
		],
	},
	{
		question: `Where can you run JavaScript?`,
		answers: [
			{
				text: 'In the browser',
				isCorrect: false,
			},
			{
				text: 'On a Server',
				isCorrect: false,
			},
			{
				text: 'In the Inspector Console in Chrome Dev tools',
				isCorrect: false,
			},
			{
				text: 'All of Above',
				isCorrect: true,
			},
		],
	},
	{
		question: `Which is correct code?`,
		answers: [
			{
				text: "desserts['ice-cream']",
				isCorrect: true,
			},
			{
				text: 'desserts.ice cream',
				isCorrect: false,
			},
			{
				text: 'desserts.ice-cream',
				isCorrect: false,
			},
			{
				text: 'All of Above',
				isCorrect: false,
			},
		],
	},
	{
		question: `What is the difference between double and single quotes?`,
		answers: [
			{
				text: 'Single quotes can inject variables into them.',
				isCorrect: false,
			},
			{
				text: 'Double Quotes are used for strings',
				isCorrect: false,
			},
			{
				text: 'They do the same thing in JavaScript',
				isCorrect: false,
			},
		],
	},
	{
		question: `Which option is preferred?`,
		answers: [
			{
				text: '`${firstName} ${lastName}`',
				isCorrect: true,
			},
			{
				text: 'firstName + " " + lastName',
				isCorrect: false,
			},
			{
				text: '"firstName lastName"',
				isCorrect: false,
			},
		],
	},
	{
		question: `Which is an example of a function expression?`,
		answers: [
			{
				text: `
        const addNumbers = (x, y) => {
          return x + y;
        };
        `,
				isCorrect: true,
			},
			{
				text: `
        const addNumbers = function(x, y) {
          return x + y;
        };
        `,
				isCorrect: true,
			},
			{
				text: `
        function addNumbers(x, y) {
          return x + y;
        }
        `,
				isCorrect: false,
			},
		],
	},
	{
		question: `What kind of loop is most likely to be used to iterate over an array`,
		answers: [
			{
				text: `for...in`,
				isCorrect: false,
			},
			{
				text: `for...of`,
				isCorrect: true,
			},
			{
				text: `for(i = 0; i < 10; i++)`,
				isCorrect: false,
			},
		],
	},
	{
		question: `How do you access the 4th item in an array?`,
		answers: [
			{
				text: `array[4]`,
				isCorrect: false,
			},
			{
				text: `array[3]`,
				isCorrect: true,
			},
			{
				text: `array.4`,
				isCorrect: false,
			},
			{
				text: `array.3`,
				isCorrect: false,
			},
		],
	},
	{
		question: `Which array method would I use to return a subset of my array based on a conditional?`,
		answers: [
			{
				text: `array.filter()`,
				isCorrect: false,
			},
			{
				text: `array.sort()`,
				isCorrect: true,
			},
			{
				text: `array.find()`,
				isCorrect: false,
			},
			{
				text: `array.sub()`,
				isCorrect: false,
			},
		],
	},
	{
		question: `What is the difference between a do...while loop and a while loop`,
		answers: [
			{
				text: `do...while loops always run at least once`,
				isCorrect: true,
			},
			{
				text: `They are the same`,
				isCorrect: true,
			},
			{
				text: `while loops always run at least once`,
				isCorrect: true,
			},
			{
				text: `while loops is actually PHP, not JavaScript`,
				isCorrect: false,
			},
		],
	},
];

/**
 * Get a random question from the list of questions.
 *
 * Once the question has been used, remove it from the list
 */
const getRandomQuestion = () => {
	// CODE GOES HERE

	// replace return with a random question
	// remove the question from the array after
	// it has been used
	const index = Math.floor(Math.random() * questions.length);

	return questions.splice(index, 1)[0];
};

/**
 * Ask the trivia question
 *
 * @param {*} question The trivia question being asked
 */
const getQuestionString = (question, questions, i) => {
	console.log(question);
	return `
    ${i + 1}/${questions.length}
    ------------
    Please answer the following question:
    ${question.question}

    Options: ${getAnswerOptions(question)}
  `;
};

/**
 * Return a list of answer based on a provided question.
 *
 * @param {*} question
 */
const getAnswerOptions = question => {
	// hint, use a loop
	// get the possible answer formatted in the format:
	// a: answer[0]
	// b: answer[1]
	// c: answer[2]
	// ...
	let returnString = '';
	let i = 0;
	for (const answer of question.answers) {
		returnString += ` \n ${convertIndexToLetter(i)}: ${answer.text}`;
		i++;
	}
	return returnString; // add answer options here
};

/**
 * Converts multiple choice options into
 * index for arrays
 *
 * i.e.,
 *
 * a -> 0
 * b -> 1
 * ...
 * z -> 25
 */
const convertLetterToIndex = letter => {
	// CODE GOES HERE
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet.indexOf(letter);
};

/**
 * Converts multiple choice options into
 * index for arrays
 *
 * i.e.,
 *
 * 0 -> a
 * 1 -> b
 * ...
 * 25 -> z
 */
const convertIndexToLetter = index => {
	// CODE GOES HERE
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	return alphabet[index];
};

const countCorrectAnswers = () => {
	// using alert()
	// tell the user how many questions they got correct
	// bonus points if you can use .reduce();
};

const getCorrectAnswer = (question, answer) => {
	return question.answers.findIndex(answer => answer.isCorrect);
};

let userAnswers = [];
for (let i = 0; i < questions.length; i++) {
	// TODO: write loop to ask 10 questions
	const question = getRandomQuestion(); // question
	const answer = prompt(getQuestionString(question, questions, i)); // ask  question

	const correctAnswer = getCorrectAnswer(question);
	console.log(correctAnswer, answer);
	if (convertLetterToIndex(answer.toLowerCase()) === correctAnswer) {
		alert('Correct');
		userAnswers[i] = true;
	} else {
		userAnswers[i] = false;
		alert(
			`Incorrect! The correct answer was ${question.answers[correctAnswer].text}`
		);
	}
}

countCorrectAnswers();
