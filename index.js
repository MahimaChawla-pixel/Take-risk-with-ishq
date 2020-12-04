var readlineSync = require("readline-sync");

var score=0

var PlayerName =readlineSync.question("May i know the name of risker?  ")
console.log("welcome "+PlayerName +"   let's take the risk with ishq!!!")

// creating function
function risk(question,answer)
{
var userAnswer = readlineSync.question(question +"\nType your answer :");

if(userAnswer == answer)
   {
    console.log("you are right!!");
    score=score+1;
   }
  else
  {
    console.log("oops!!! bad luck.")
  }
  console.log("current score "+score)
  console.log("--------")
}

// key- value-objects
var questions = [
  { 
    question:"1.What was Harshad Mehta's full name?\n  1.Harshad Jayantilal Mehta \n  2.Harshad Shantilal Mehta \n",
    answer:2 
  },
  
  {
  question:"2.Who tipped Sucheta Dala about the fraud in SBI?\n  1.Sharad Bellary \n  2.Bellary M \n",
    answer:1
  },
  {
  question:"3. What was the name of Harshad Mehta's consultancy firm?\n  1.GrowAsset \n  2.GrowMore \n",
    answer:2
  },
  {
  question:"4.Which document was missing with the SBI when the fraud was initially exposed?\n  1.Cheques \n  2.Bank Receipts \n",
    answer:2
  },
   {
  question:"5.Pherwani was the Chairman of which bank?National \n 1.National Housing Bank \n 2.Citi Bank \n",
    answer:1
  },
   {
  question:"6.Harshad Mehta met Bhushan Bhatt for the first time when both of them were:\n  1.Jobbers \n  2.Brokers\n",
    answer:1
  }
];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  risk(currentQuestion.question, currentQuestion.answer)
}
if(score>=4){
  console.log("Congratulations!!! you crossed the risk");
}
else{
  console.log("better luck,Next time");
}
console.log("your final score  "+score)
