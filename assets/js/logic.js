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
    var q =[
      {
          title: "How do you write 'Hello World'in an alert box?",
          choices: ["msg('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')", "alert('Hello World')"],
          answer: "alert('Hello World')"
      },
      {
          title: "How to empty an array in JavaScript?",
          choices: ["arrayList[]", "arrayList(0)", "arrayList.Length=0", "arrayList.len(0)"],
          answer: "arrayList.length=0"
      },
      {
          title: "What function to add an element at the beginning of an arrayand one at the end?",
          choices: ["push,unshift", "unshift,push", "first,push", "unshift,last"],
          answer: "unshift,push"
      },
      {
          title: "What will this output? var = a =[1,2,3]; console.log(a[6])",
          choices: ["undefined", "0", "prints nothing", "syntax error"],
          answer: "undefined"
      },
      {
         title: "What would the following code return? console.log(typeof typeof 1)",
         choices: ["string", "number", "syntax error", "undefined"],
         answer:  "String"
      },
      {
          title: "Which software company developed JavaScript?",
          choices: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
          answer: "Netscape"
      },
      {
          title: "What would be the result of 3+2+'7'?",
          choices: ["327", "12", "14", "57"],
          answer: "57"
      },
      {
          title: "Look at the following selector: $('div'). What does it select?",
          choices: ["All div elements", "Current div element", "First div element", "Last div element"],
          answer: "All div elements"
      },
      {
          title: "How can a value be appended to an array?",
          choices: ["arr(length).value", "arr[]=add(value)", "arr[arr.length]=value", "None of the these"],
          answer: "arr[arr.length]=value"
      },
      {
          title: "What will the code below output to the console? console.log(1 + +'2' +'2')",
          choices: ["32", "122", "13", "14"],
          answer: "32"
      },
  ]
 
    //Start button
   var startButton = document.querySelector('#start');
    var interval 
    var counter = 100; 
    var currentQuestion = 0;
   
    //Populate questions
    var choicesContainer = document.querySelector('#choices')
   function populateQuestion(question) {
    choicesContainer.innerHTML = '';
    document.getElementById("question-title").textContent=question.title;
    var choices = question.choices;
   
    // link questions to html
    //var questionTitle = ('#question');
    //questionTitle.textContent = questions;
    var choicesList = document.createElement('div');
    for (let i = 0; i < choices.length; i++) {
        var choice = document.createElement('button');
        choice.classList.add("answer")
        choice.textContent = choices[i];
        choicesList.append(choice);

    } 
    choicesContainer.append(choicesList)
  }
    //Start button is clicked
    document.addEventListener("click", function(event){
      if (event.target && event.target.matches(".answer")) {
        console.log(event.target.value)
        currentQuestion++  
      }
      
    })
    var startScreenElement = document.querySelector('#start-screen');
    var questionsContainer = document.querySelector('#questions');
    startButton.addEventListener('click', function() {
    startScreenElement.setAttribute('class', 'hide');
    console.log("hello kitty")
      startTimer()
   
    
    //questionsContainer.addEventListener('click', function(event) {
    populateQuestion(q[currentQuestion]);
    questionsContainer.classList.remove('hide');
    //})
    })
    // show the first question
    
    function startTimer() {
   
    interval = setInterval(function() {
      document.getElementById("time").textContent=counter
        
        // set timerContainer text to counter
        if (counter <= 0) {
            // endGame()
            clearInterval(interval); console.log("game over")
        } else{
          counter--;
        }
    }, 1000);
  }
      //next question
    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < questions.length) {
          populateQuestion(questions[currentQuestion]);
      } else {
          endGame();
      }
    };