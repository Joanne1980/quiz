/*Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
  * 
  * When answer is clicked, the next question appears
  * 
  * If the answer clicked was incorrect then subtract time from the clock

* The quiz should end when all questions are answered or the timer reaches 0.

  * When the game ends, it should display their score and give the user the ability 
    to save their initials and their score*/
    
    // *create a list of questions
    
    //*click start button, timer to start and first question to appear. with list of 
    //multiply chose answers.

    //*click button to relevant answer

    //*when answer is clicked confirm if correct if incorrect deduct 10 seconds from counter

    //*run through all questions unless time runs out. 

    //*when game ends give user their score and let them record their initials and score 

   var score = 0;
   var currentQuestion = 0;
   var counter;
   var timer;

   //prepare all selector that we might need to point to the html element
   var startButton = document.querySelector('#start');
  //startScreenElement
  //questionsContainer
  //questionsTitle
  //choicesContainer
  //timerContainer
  //....

   function populateQuestion(question) {
    var question = question.title;
    var choices = question.choices;
   
    choicesContainer.innerHTML = '';
  //questionTitle.textContent = questions;
    var choiceList = document.createElement('ul');
    for(let i = 0; i < choices.length; i++){
    var choice = document.createElement('li');
    choice.textContent = choices[i];
    choiceList.appendChild(choice);
  }
  //choicesContainer.appendChild(choicesList)
  }

  function endGame() {
  //when the game ends, it should display their score and give the user the 
  //ability to save their initials and their score

  //h ide questions container
  //show endscreen container
  //assign score to finalscore container
  //reset the timer clearInterval(timer);
  }

   function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      populateQuestion(questions[currentQuestion]);
    } else {
      endGame();
    }

  }

  startButton.addEventListener('click', function() {
  startScreenElement.setAttribute('class', 'hide');
  questionsContainer.setAttribute('class', 'visable');

  // show the first question
  currentQuestion = 0;
  populateQuestion(question[currentQuestion]);

  counter = 100;
  timer = setInterval(function() {
    counter--;
    // set timerContainer text to counter
    if (counter <= 0) {
      //endGame()
      clearInterval(timer);
    }
  }, 1000);
  });

function saveHighscore(initial) {
  //get the current highscores value from localstorage
  //json parse current highscores from localstorage, this will be an array of object
  //push initial + score to the array
  //order the array from highest score to lowest
  //json stringify then save back to localstorage
 }
  //another click event listener for choices
  //check answer
  //if correct, add 1 to score, call nextQuestion()
  //if wrong, remove 10 seconds from the inverval, call nextQuestion()

  //click event listener to submit button
  //var initial = initialInput.value.trim()
  //saveHighscore(initial)
  //redirect to highscore page
