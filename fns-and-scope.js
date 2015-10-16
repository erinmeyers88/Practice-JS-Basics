//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === "Tyler") {
    return "true";
  }
    else {
      return "false";
    }
  }

isTyler("Tyler");


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  var answer = prompt("What is your name?");
  return answer;
}
getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
  alert("Welcome, " + getName());
}

welcome();


//Next problem




//What is the difference between arguments and parameters?

  //Arguments are the actual values passed to the parameters.  Parameters are like variables and arguments are their values.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Falsy values:
  //undefined, null, 0, false, NaN, empty string

  //You can test for falsy values like this:
  
  //console.log(!!(valueToTest));
  
  //It will log true or false depending on what you put in.


//Next Problem



//Create a function called myName that returns your name

var myName = function() {
  return "Erin";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
  return function () {
    return "Erin";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();