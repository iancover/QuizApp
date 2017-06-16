$("#js-button-start").click(function(event){
	console.log('hello world');
	event.preventDefault();
	$("#js-form-begin-quiz").hide();
	$('form').first().show();
});

$('form').each(function(index, value) { // loop through each form
	$(this).find('input[type="radio"]').each(function() { // loop through each radio of each form
		$(this).attr('name', `js-question-${index + 1}`); // set the name to the form index
	})
});

$('form').submit(function(event){
	event.preventDefault();
	console.log('form submitted');

	var formData = $(this).serializeArray();
	var isCorrect = (formData[0].value == "correct");
	if(isCorrect) {
		// increment correct counter
	} else {
		// increment incorrect counter
	}
	try {
		$(this).hide().next().show();
	} catch(e) {
		console.error(e);
		// HOMEWORK we are on the last one
	}

	// HOMEWORK look into try catch
});


// .serialize() and .serializeArray()



// $('#js-form-q').clone().attr('id', 'some-other-id')

// clone > update > show > add to DOM

// On click 'Start' 
// 	1. add 'hidden' to '#js-form-begin-quiz'
// 	2. remove 'hidden' to '#js-form-q1' 
		
// On click 'radio'
//  1. remove hidden attr to 'submit' button

// On click 'submit'
// 	1. find value of input selected
// 		if value = 'correct' --> score-correct++
// 		else score-incorrect++

// On click 'End'
// 	1. reset form and restart test

// jquery: this.next() (add/remove attr hidden or use 'show' method) - gets you the next element




var questionTemplate = {

}

// ***** STATE MGMT ******



// ***** DOM MANIPULATION *****

// functions
// 		show question
// 		show submit button


// ***** LISTENERS *****

// functions needed
// 	on click start button - (DOM manipulation function) hide start and show next question
// 	on click radio input - (DOM manipulation function) show submit button
// 	on click submit button - 
// 		find radio checked 
// 		if value = correct - score-correct++ 
// 		else score-incorrect++

// prevent 'back' button or if clicks 'submit' button again, score-inc or corr -1


// ***** CONTROLLER *****











// OTHER SOLUTIONS:

// IF USING AN ARRAY OF OBJECTS

// var currentQuestion = state.questions[i]

// <p> The question </p>
// 

// var state = {
// 	questions: [
// 		{
// 			question: "1. What does HTML and CSS stand for?",
// 			answers: [
// 				"A. They are the initials for the two guys that invented the internet.",
// 				"B. High-Tech Management Linguistics and Computer System Software.",
// 				"C. HyperText Markup Language and Cascading Style-Sheets.",
// 				"D. They are the commands that describe the structure and form of a website."
// 			],
// 			correctAnswerIndex: 2
// 		},
// 		{
// 			question: "2. What is the difference between the ‘class’ and ‘id’ attributes?",
// 			answers: [
// 				"A. The ‘id’ attribute is only used to add color to text.",
// 				"B. They are not attributes, they are selectors.",
// 				"C. The ‘class’ attribute is used to select multiple elements, while ‘id’ identifies a specific element.",
// 				"D. The ‘class’ attribute defines when classes start."
// 			],
// 			correctAnswerIndex: 2
// 		},
// 		{
// 			question: "3. What is !DOCTYPE and what does it do?",
// 			answers: [
// 				"A. It defines the type of doctor that can fix the HTML.",
// 				"B. It’s the declaration that tells the browser the version of markup language used on the document.",
// 				"C. It’s a set of instructions that reset the webpage.",
// 				"D. It is the tag that links the html document with the css document."
// 			],
// 			correctAnswerIndex: 1
// 		},
// 		{
// 			question: "4. What is script element and what is it used for?",
// 			answers: [
// 				"A. It is a JavaScript command that tells the webpage when to refresh and is used at the beginning of a document.",
// 				"B. It is what writers use to start an online novel or the script of a movie.",
// 				"C. It is a tag used to define a client-side script and can contain scripting statements or point to a script file.",
// 				"D. It is used to describe the animation of a webpage."
// 			],
// 			correctAnswerIndex: 2
// 		},
// 		{
// 			question: "5. Define Control Flow and give some examples of it.",
// 			answers: [
// 				"A. It’s the way a web designer controls the flow in which a user will navigate through a website.",
// 				"B. It is the language that tells the computer where to direct the commands found on an application.",
// 				"C. It controls the flow of the internet when using ‘http:’ or ‘https:’",
// 				"D. The order in which instructions are executed using conditionals like: if, else, or else if"
// 			],
// 			correctAnswerIndex: 3
// 		},
// 		{
// 			question: "6. What are loops used for?",
// 			answers: [
// 				"A. They are used to keep the website running on the same server without interruption.",
// 				"B. It is a code that is running in the background waiting for the user to make an action.",
// 				"C. It is the code used when creating a circle with animation on a webpage.",
// 				"D. Loops are used to execute a block of code a number of times."
// 			],
// 			correctAnswerIndex: 3
// 		},
// 		{
// 			question: "7. In JavaScript, what could be said about Objects?",
// 			answers: [
// 				"A. It can be anything that describes something on a website, like a box or a paragraph.",
// 				"B. It is the action that a system takes when they want to contest an expression.",
// 				"C. Objects are blocks or code that are written inside a function and always result in something true.",
// 				"D. Objects are variable that may contain many values including other variables and functions."
// 			],
// 			correctAnswerIndex: 3
// 		},
// 		{
// 			question: "8. What is a fact about Vanilla JavaScript?",
// 			answers: [
// 				"A. It is the scripting that designers use to define colors that are similar to shades of beige.",
// 				"B. It is a term used to describe using plain JavaScript without any additional libraries like jQuery.",
// 				"C. It was invented in 1997 by the developers that designed the Blue Bell Ice Cream website.",
// 				"D. JavaScript language invented by Vanilla Ice, after quitting as a rapper and beginning his career in web development."
// 			],
// 			correctAnswerIndex: 1
// 		},
// 		{
// 			question: "9. What is a difference between a block-level element and an inline element?",
// 			answers: [
// 				"A. A block-level element always starts on a new line and take up the entire width available, the inline element doesn’t start on a new line and only takes the necessary width.",
// 				"B. Block-level elements are used to describe a block, vs inline which will only be used when the elements are lines.",
// 				"C. Block-level elements are used to block ads and pop-ups, and inline will display them in a line.",
// 				"D. There’s no difference except inline elements start in a new line."
// 			],
// 			correctAnswerIndex: 0
// 		},
// 		{
// 			question: "10. How would you describe semantic HTML?",
// 			answers: [
// 				"A. It is a special language within HTML that uses specific tags and elements only available on this language.",
// 				"B. It is a more logical way to style HTML by writing the styling properties within the HTML elements.",
// 				"C. It is a more proper way to write HTML, using correct indentations and proper tags, which can help screen readers and web browsers identify elements on a page better.",
// 				"D. Semantic HTML refers to writing out plain words first to start a mockup of what your HTML code will look like."
// 			],
// 			correctAnswerIndex: 2
// 		},
// 	]
// }

// $(function getElementById("answer").onclick = validate;);

// function validate() {	    
// 	var radios;	    
// 	var i;	    
// 	var correct;	    
	
// 	radios = getElementById("question1").getElementsByTagName("input"); 	    
// 	correct = false;

// 	for(i = 0; i < radios.length; i++) {		    
// 		if(radios[i].value == "yes" && radios[i].checked == true) {			  
// 			correct = true;		    
// 		}	    
// 	} 	    
// 		if(correct) {		    
// 			alert("Correct");	    
// 				} 
// 		else {		    
// 			alert("Incorrect");	    
// 			}    
// 		}