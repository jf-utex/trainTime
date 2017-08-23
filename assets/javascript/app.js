
// link and Initialize firebase   

var config = {
    apiKey: "AIzaSyC6uGX4LwksaNDmpMWB1Paw63mqg8_NRCo",
    authDomain: "new-project-c5214.firebaseapp.com",
    databaseURL: "https://new-project-c5214.firebaseio.com",
    projectId: "new-project-c5214",
    storageBucket: "new-project-c5214.appspot.com",
    messagingSenderId: "319340804249"
  };

  firebase.initializeApp(config);

  //create variable to reference firebase database


  var database = firebase.database();

//Capture User Input
$("#submitBtn").on("click", function(event) {
  event.preventDefault();
 

  //Saves Input Assigned
  var train1 = $("#train1").val().trim();
  var destination= $("#destination").val().trim();
  var frequency = $("#frequency").val().trim();
  var time = $("#timeinput").val().trim();
  
//Push to Firebase
  database.ref().push({
        train1: train1,
        destination: destination,
        frequency: frequency,
        time: time,
    
  }); //closes database push

}); //Closes User Input/Submit function


database.ref().on("child_added", function(childSnapshot, prevChildKey){

  // Stores input to variables
  
  var train1=childSnapshot.val().train1;
  var destination=childSnapshot.val().destination;
  var frequency=childSnapshot.val().frequency;
  var time=childSnapshot.val().time;
  
//Writes to table in HTML
  $("tbody").append("<tr><td>" + train1 + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + time + "</td></tr>");

//Clear boxes on Submit
$("#train1").val("");
$("#destination").val("");
$("#frequency").val("");
$("#timeinput").val("");


}); //closes database.ref




    



var tFrequency = $("#frequency").val().trim();

    // Time is 3:30 AM
var firstTime = "03:30";


//Grabs current time from moment.js
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

// Difference between the times
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// console.log("DIFFERENCE IN TIME: " + diffTime);

// // Time apart (remainder)
// var tRemainder = diffTime % tFrequency;
// console.log(tRemainder);

// // Minute Until Train
// var tMinutesTillTrain = tFrequency - tRemainder;
// console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// // Next Train
// var nextTrain = moment().add(tMinutesTillTrain, "minutes");
// console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));



// ********* PseudoCode **********

// convert to military time - user input - tried a time picker.js script with no luck on 
//      reading Stack overflow, different browsers render this differently
// pull current time with moment JS - current time is being pulled and displayed in console.log
// calculate next time for train arrival based on current time
//   output on next arrival time field
// calculate how many minutes away based on current time and frequency.
//   output to screen in minutes away field

