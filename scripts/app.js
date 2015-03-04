$(document).ready(function() {

  //Checks if the user has already entered the number:
  function alreadyUsedThatNumber(userGuess, dataset) {
    if (dataset.indexOf(userGuess) == -1) {
      dataset.push(userGuess);
    }

    else {
      alert("You already used that number. Try again.");
    }
  }


  //Checks to see if the user's guess is in a certain heat index:
  function getHeatIndex(someRandomNumber, userGuess) {

    //Gets the difference between the random number and the guess:
    var guessDiff = Math.abs(someRandomNumber - userGuess);

    //Finds out where the user's guess lands on the heat index:
    if (userGuess === someRandomNumber) {
      return "bingo";
    }     
    else if (guessDiff > 0 && guessDiff <= 5) {
      return "hot";
    }
    else if (guessDiff >= 6 && guessDiff <= 15) {
      return "warm";
    }
    else if (guessDiff >= 16 && guessDiff <= 30) {
      return "lukewarm";
    }
    else if (guessDiff >= 31 && guessDiff <= 50) {
      return "cold";
    }
    else {
      return "jotunheim";  //http://static.comicvine.com/uploads/original/10/101568/2169882-jotunheimfreeze.jpg
    }    
  }


function runTheProgram() {
    //Captures the user's input and changes the circle accordingly if the answer is between 1 and 100:
  	var userGuess = +$("input:first").val();

    if (userGuess > 100 || userGuess < 1) {
      alert("You didn't enter a number between 1 and 100.  Try again.")
      return false;
    }

    else {
      //Sets up the rest of the variables needed to run the game:
      var theCircle = $(this).closest(".content-container").find(".circle");
      var theGameMessage = theCircle.children();
      var thePreviousGuessList = $(this).closest(".content-container").find(".guess-list").children();


      //Checks if the number has already been used:
      alreadyUsedThatNumber(userGuess, previousUserGuesses);


      //Resets all classes and applies the proper heat index:
      theCircle.removeClass('bingo cold jotunheim hot lukewarm unfilled warm');  //See lines 145, 154, 163, 172, 181, 190, and 195 in css.css.
      theCircle.addClass(getHeatIndex(someRandomNumber, userGuess));
      theGameMessage.addClass('circle-filled').text(getHeatIndex(someRandomNumber, userGuess));   //See line 204 in css.css.


      //Also updates the previous guesses list:
      thePreviousGuessList.text('Previous guesses: '+previousUserGuesses.join());
      return false;      
    }
}

  //Generates the random number and initializes the previous guesses list:
  var someRandomNumber = Math.ceil(Math.random()*100);
  var previousUserGuesses = [];
	$(".submit").click(runTheProgram);
});