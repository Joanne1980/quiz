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

    //Start button
   var startButton = document.querySelector('#start');

    //Populate questions
   function populateQuestion(question) {
    var question = question.title;
    var choices = question.choices;
   }
    // link questions to html
    var choicesContainer = document.querySelector('#choices')
    var questionTitle = ('question');
    choicesContainer.innerHTML = '';
    questionTitle.textContent = questions;
    var choicesList = document.createElement('ul');
    for (let i = 0; i < choices.length; i++) {
        var choice = document.createElement('li');
        choice.textContent = choices[i];
        choicesList.appendChild(choice);
    }

    //Start button is clicked
    var startScreenElement = document.querySelector('#start-screen');
    var questionsContainer = document.querySelector('#questions');
    startButton.addEventListener('click', function() {
    startScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');
    })
    // show the first question
    currentQuestion = 0;
    populateQuestion(questions[currentQuestion]);

    counter = 100;
    timer = setInterval(function() {
        counter--;
        // set timerContainer text to counter
        if (counter <= 0) {
            // endGame()
            clearInterval(timer);
        }
    }, 1000);

      //next question
    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
          populateQuestion(questions[currentQuestion]);
      } else {
          endGame();
      }
    };