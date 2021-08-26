/**
 * Get a random question from the list of questions.
 *
 * Once the question has been used, remove it from the list
 */
const getRandomQuestion = () => {
	// CODE GOES HERE
	const random = Math.floor(Math.random() * questions.length);

	// replace return with a random question
	// remove the question from the array after
	// it has been used
	// hint: use splice
  const spliced = questions.splice(random, 1); // returns an array
	return spliced[0];
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
  console.log(question);
	let returnStr = '';
	let index = 0;
  console.log(question.answers);
	for (let answer of question.answers) {
		// increase index by 1
		console.log(index);
		const letter = convertIndexToLetter(index);
		returnStr += `
    ${letter}: ${answer.text}
    `;
		index++;
	}

	return returnStr;

	// hint, use a loop
	// hint v2, use convertIndexToLetter()
	// get the possible answer formatted in the format:
	// a: answer[0]
	// b: answer[1]
	// c: answer[2]
	// ...
};

/**
 * Converts multiple choice options into
 * index for arrays
 *
 * Hint: strings use indexOf() just like arrays
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
 * index for arrays.
 *
 * Hint: you can use indexes in strings the
 * same way you use arrays.
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

const countCorrectAnswers = answerTally => {
	// let answerTally = [true, false, true, false];
	// 	Filter out the trues
	// filter(fn) returns true of false
	const correctCount = answerTally.filter(wasCorrect => {
		// add correct answers to a new array
		console.log(wasCorrect);
		return wasCorrect;
	});
	//  Count the number of entrees in the trues list
	alert(`You got ${correctCount.length} answers correct! `);
	return correctCount.length;
};

/**
 * Based on the question, return index of the answer that
 * is correct
 *
 * Hint: use .findIndex()
 *
 * @param {*} question
 * @returns
 */
const getCorrectAnswer = question => {
	return question.answers.findIndex(answer => {
		// loop through each answer
		console.log(answer);
		return answer.isCorrect;
	});
};

let userAnswers = [];
for (let i = 0; i < 1; i++) {
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

countCorrectAnswers(userAnswers);
