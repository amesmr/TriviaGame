var QAarry = [{
  question: "In what year did Nintendo release its first game console in North America?",
  answer0: "1985",
  answer1: "1978",
  answer2: "1995",
  answer3: "1984",
  image: "assets/images/nintendo.jpg",
  factoid: " the first truly accessible game console was Pong, released in 1972 by Atari?",
  delay: 5
}, {
  question: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976?",
  answer0: "Apple Computer, Inc.",
  answer1: "Microsoft, Inc.",
  answer2: "Hewlett Packard",
  answer3: "Disney Studios",
  image: "assets/images/appleInc.jpg",
  factoid: "one of the original Apple computers sold for more than $387,000 in 2013?",
  delay: 5
}, {
  question: "What year was Facebook founded?",
  answer0: "2004",
  answer1: "2005",
  answer2: "2003",
  answer3: "2006",
  image: "assets/images/facebook.png",
  factoid: "Al Pacino was the first \“face\” on Facebook?",
  delay: 4
}, {
  question: "In computer science, what does \"GUI\" stand for?",
  answer0: "Graphical User Interface",
  answer1: "Geograpical Unilateral Infusion",
  answer2: "George's Uniform Instructor",
  answer3: "Get Unusually Intoxicated",
  image: "assets/images/GUI.jpg",
  factoid: "Xerox Star workstation introduced the first commercial GUI operating system in 1981?",
  delay: 5
}, {
  question: "In database programming, SQL is an acronym for what?",
  answer0: "Structured Query Language",
  answer1: "Sequential Question Logic",
  answer2: "Sophisticated Que Lexer",
  answer3: "Silly Questionable Logic",
  image: "assets/images/SQL.png",
  factoid: "it was created in the early 1970s and called SEQUEL (short for Structured English QUEry Language)? \
  The name of the language was later changed from SEQUEL to SQL because of a trademark dispute.",
  delay: 10
}, {
  question: "CERN launched the very first website in what year?",
  answer0: "1990",
  answer1: "1985",
  answer2: "1995",
  answer3: "1992",
  image: "assets/images/CERN.png",
  factoid: "it was created by Tim Berners-Lee? He also developed the first web browser, the URL format, \
  hypertext markup language (HTML), and the Hypertext Transfer Protocol (HTTP)!  Wow!   Bob Kahn is credited \
  with inventing TCP and IP which are the protocols used for trasnmitting internet data back and forth.",
  delay: 12
}, {
  question: "The companies HP, Microsoft and Apple were all started in a what?",
  answer0: "Garage",
  answer1: "Vacuum",
  answer2: "Hurry",
  answer3: "University",
  image: "assets/images/ms-apple-hp.jpg",
  factoid: "that Steve Jobs was fired from Apple in 1985?",
  delay: 5
}, {
  question: "When referring to computer memory, what does that acronym RAM stand for?",
  answer0: "Random Access Memory",
  answer1: "Reliably Accurate Memory",
  answer2: "Robust Antedelivuate Markup",
  answer3: "Get Unusually Intoxicated (oops)",
  image: "assets/images/ram.jpg",
  factoid: "that it is also \"volatile\" memory?  This means that it can be read from and written to.  \
  Unlike ROM (Read Only Memory).",
  delay: 8
}, {
  question: "What do the letters HTML, a markup language used to create web pages, stand for?",
  answer0: "Hypertext Markup Language",
  answer1: "High Transfer Media Lookup",
  answer2: "High Throughput Multipurpose Language",
  answer3: "Howlingly Terrible Markup Language",
  image: "assets/images/html.jpg",
  factoid: "that HTML5 isn't really an upgrade for HTML, but a replacement for XHTML, \
  which many consider a mistake?",
  delay: 8
}, {
  question: "Who is credited with inventing the first mechanical computer and in what year?",
  answer0: "Charles Babbage, 1840s",
  answer1: "Alan Turing and John von Neumann, 1945",
  answer2: "Steve Jobs, 1976",
  answer3: "Charles Darwin, 1883",
  image: "assets/images/charlesbabbage.png",
  factoid: "in 1945, ENIAC (Electronic Numerical Integrator And Computer) was amongst the earliest \
  electronic general-purpose computers made?",
  delay: 9
}, {
  question: "One kilobyte is equal to how many bytes?",
  answer0: "1024",
  answer1: "1000",
  answer2: "10,000",
  answer3: "1064",
  image: "assets/images/kilobyte.jpg",
  factoid: "in 1976, the typical amount of RAM was 8KB.  Today the typical amount of RAM is 3GB.  \
  That's an increase of 3,145,728 times!!",
  delay: 8
}, {
  question: "What does HTTP stand for in a website address?",
  answer0: "HyperText Transfer Protocol",
  answer1: "High Throughput Transfer Protocol",
  answer2: "Howard's Text Transfer Parameters",
  answer3: "Get Unusually Intoxicated (doh!)",
  image: "assets/images/http.gif",
  factoid: "there are at least 1,132,663,548 web pages?  It must be noted that around 75% of URLs\
   today are not active, but parked domains or similar.",
  delay: 10
}, {
  question: "<h3>In 1945, Grace Hopper discovered the first computer bug.  What caused it?",
  answer0: "A moth",
  answer1: "An error in logic",
  answer2: "A blown cathode ray tube",
  answer3: "An incorrectly configured punch-card",
  image: "assets/images/GraceHopper.jpg",
  factoid: "that she invented the first compiler for a computer programming language, and helped to \
  develope COBOL and FORTRAN?  Two of the first programming languages?",
  delay: 10
}];

var countdown;
var right = 0;
var wrong = 0;
var unanswered = 0;
var usedQuestions = [];
var secondsLeft = 15;

function updateTimer() {
  secondsLeft--;
  if (secondsLeft <= 0) {
    // time's up - tell the player they lost and show correct answer
    showResult(100);
    unanswered++;
  } else {
    $(".timer").html("<h4>Time remaining : " + secondsLeft + "</h4>")
  }
}

function initGame() {
  right = 0;
  wrong = 0;
  unanswered = 0;
  usedQuestions = [];
  nextQuestion();
  $("img").hide();
  // if player is restarting, hide the button
  $("#btn").hide();
}


function showResult(index) {
  //console.log(index);
  stopIntervals(countdown);
  var thisAnswer = QAarry[$(".correct").data("qIndex")].answer0;
  var thisFact = QAarry[$(".correct").data("qIndex")].factoid;
  var thisImg = QAarry[$(".correct").data("qIndex")].image;
  if (index < 0) {
    // wrong answer
    $(".question").html("<h3>Sorry, the correct answer is \"" + thisAnswer + "\".</h3>");
  } else if (index < QAarry.length) {
    // correct answer
    $(".question").html("<h3>That's right! The correct answer is \"" + thisAnswer + "\".</h3>");
  } else {
    $(".question").html("<h3>Oh, no!  You're out of time.  The correct answer is \"" + thisAnswer + "\".</h3>");
  }

  $(".result1").html("<h4>Did you know that " + thisFact + "</h4>");
  $("img").attr("src", thisImg);
  $("img").show();

  // let the user see the answer and then load the next question
  // the length of the delay is proportional to the length of the factoid
  setTimeout(nextQuestion, 1000 * QAarry[$(".correct").data("qIndex")].delay);

  // clear out the data and correct class from the response div
  $(".correct").data("qIndex", "")
  $(".correct").removeClass("correct")

  // lets go ahead and clear the timer and the answers to unclutter the page
  $(".timer").hide();
  $(".poss0").hide();
  $(".poss1").hide();
  $(".poss2").hide();
  $(".poss3").hide();
  $(".result1").show();
  $(".result2").hide();
}

function finalResults() {
  // Stop the timer
  stopIntervals();
  // lets go ahead and clear the timer and the answers to unclutter the page
  $(".timer").hide();
  $(".poss1").hide();
  $(".poss2").hide();
  $(".poss3").hide();
  $("img").hide();
  // show the restart button
  $("#btn").show();
  // show the user's results for the game
  $(".question").html("<h3>Out of " + QAarry.length + " questions, you got " + right + " answers correct.</h3>").show();
  $(".result1").html("<h4>You got " + wrong + " answers wrong.</h4>").show();
  $(".result2").html("<h4>And you left " + unanswered + " questions unanswered.</h4>").show();
}

function nextQuestion() {
  // check to see if we'er done
  if (QAarry.length == usedQuestions.length) {
    // all questions used, game is over 
    finalResults();
    return false;
  }
  // hide the image for the answer
  $("img").hide();
  // show the hidden wells
  $(".timer").show();
  $(".poss0").show();
  $(".poss1").show();
  $(".poss2").show();
  $(".poss3").show();
  $(".question").show();

  // hide the others  
  $(".result1").hide();
  $(".result2").hide();

  // clear the results if they're shown
  $(".result1").html("");
  $(".result2").html("");
  
  // randomly select one of the question objects
  secondsLeft = 15;
  var qIndex;
  qIndex = Math.floor(Math.random() * QAarry.length);
  while (usedQuestions.indexOf(qIndex) >= 0) {
    qIndex = Math.floor(Math.random() * QAarry.length);
  }
  // display the question
  $(".question").html("<h3>" + QAarry[qIndex].question + "</h3>");
  $(".question").show();

  // push this question's index into the array so that it doesn't get used again until restarting
  usedQuestions.push(qIndex);

  //console.log(QAarry[qIndex].question);

  // display the possible answers randomly
  aIndex = Math.floor(Math.random() * 4);
  //console.log("aIndex = " + aIndex);
  for (i = 0; i < 4; i++) {
    // just to complain.  it was really hard to figure out how to reach for answerX
    var currAnswer = QAarry[qIndex]["answer" + ((i + aIndex + 1) % 4)];
    //console.log("currAnswer = " + currAnswer);
    $(".poss" + i).html("<h4>" + currAnswer + "</h4>");
    // if the index of the question is answer0 then it is the correct answer
    // put in an easy to grab hook to check later
    if (((i + aIndex + 1) % 4) == 0) {
      $(".poss" + i).addClass("correct");
      $(".poss" + i).data("qIndex", qIndex);
    }
  }
  // restart the timer
  stopIntervals();
  countdown = setInterval(updateTimer, 1000);
  // set the timer value to prevent the page from re-sizing
  $(".timer").html("<h4>Time remaining : " + secondsLeft + "</h4>");
}

function stopIntervals() {
  for (i = 0; i <= countdown; i++) {
    clearInterval(i);
  }
}

function ReSize() {
  if ($(this).width() <= '480') {
    $(".pic").attr("class", "pic col-xs-10 col-offset-xs-1");
    $(".timer").attr("class", "timer well col-xs-12");
    $(".question").attr("class", "question well col-xs-12");
    $(".result1").attr("class", "result1 well col-xs-12");
    $(".result2").attr("class", "result2 well col-xs-12");
    for (i = 0; i < 4; i++) {
      if ($(".poss" + i).hasClass("correct")) {
        $(".poss" + i).attr("class", "poss" + i + " response well col-xs-12 correct");
      } else {
        $(".poss" + i).attr("class", "poss" + i + " response well col-xs-12");
      }
    }
    $("img").css({
      "height": "150px",
    });
    $("#btn").css({
      "font-size": "16px"
    });
  } else if ($(this).width() <= '768') {
    $(".pic").attr("class", "pic col-sm-8 col-offset-sm-4");
    $(".timer").attr("class", "timer well col-sm-6 col-offset-sm-3");
    $(".question").attr("class", "question well col-sm-6 col-offset-sm-3");
    $(".result1").attr("class", "result1 well col-sm-6 col-offset-sm-3");
    $(".result2").attr("class", "result2 well col-sm-6 col-offset-sm-3");
    for (i = 0; i < 4; i++) {
      if ($(".poss" + i).hasClass("correct")) {
        $(".poss" + i).attr("class", "poss" + i + " response well col-sm-6 col-offset-sm-3 correct");
      } else {
        $(".poss" + i).attr("class", "poss" + i + " response well col-sm-6 col-offset-sm-3");
      }
    }
    $("img").css({
      "height": "200px",
    });
    $("#btn").css({
      "font-size": "18px"
    });
  } else if ($(this).width() <= '980') {
    $(".pic").attr("class", "pic col-md-6 col-offset-md-3");
    $(".timer").attr("class", "timer well col-md-6 col-offset-md-3");
    $(".question").attr("class", "question well col-md-6 col-offset-md-3");
    $(".result1").attr("class", "result1 well col-md-6 col-offset-md-3");
    $(".result2").attr("class", "result2 well col-md-6 col-offset-md-3");
    for (i = 0; i < 4; i++) {
      if ($(".poss" + i).hasClass("correct")) {
        $(".poss" + i).attr("class", "poss" + i + " response well col-md-6 col-offset-md-3 correct");
      } else {
        $(".poss" + i).attr("class", "poss" + i + " response well col-md-6 col-offset-md-3");
      }
    }
    $("img").css({
      "height": "300px",
    });
    $("#btn").css({
      "font-size": "20px"
    });
  } else {
    $(".pic").attr("class", "pic col-lg-6 col-offset-xs-3");
    $(".timer").attr("class", "timer well col-lg-6 col-offset-lg-3");
    $(".question").attr("class", "question well col-lg-6 col-offset-lg-3");
    $(".result1").attr("class", "result1 well col-lg-6 col-offset-lg-3");
    $(".result2").attr("class", "result2 well col-lg-6 col-offset-lg-3");
    for (i = 0; i < 4; i++) {
      if ($(".poss" + i).hasClass("correct")) {
        $(".poss" + i).attr("class", "poss" + i + " response well col-lg-6 col-offset-lg-3 correct");
      } else {
        $(".poss" + i).attr("class", "poss" + i + " response well col-lg-6 col-offset-lg-3");
      }
    }
    $("img").css({
      "height": "300px",
    });
    $("#btn").css({
      "font-size": "24px"
    });
  }
}
$(document).ready(function() {

  initGame();

  // user clicked on an answer to the question
  $(".response").on('click', function() {
    //console.log(this);
    if ($(this).hasClass("correct")) {
      // correct answer
      showResult($(this).data("qIndex"));
      right++;
    } else {
      // wrong answer
      showResult(-1);
      wrong++;
    }
  });

  // button to restart the game
  $("#btn").click(function() {
    initGame()
  });


  $(window).resize(function() {
    ReSize();
  });


  ReSize();

});
