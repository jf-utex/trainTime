
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
  var trainData = firebase.database();

//Capture User Input
$("#submitBtn").on("click",function(){

  //Saves Input Assigned
  var trainName = $("#trainNameInput").val().trim();
  var destination= $("#destinationInput").val().trim();
  var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
  var frequency = $("#frequencyInput").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
  }

  //push to Firebase
  trainData.ref().push(newTrain);

  alert("Train was added!");

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainInput").val("");
  $("#frequencyInput").val("");

  console.log(firstTrain);
  return false;
})

trainData.ref().on("child_added", function(snapshot){
  var name = snapshot.val().name;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;

  var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
  var minutes = frequency - remainder;
  var arrival = moment().add(minutes, "m").format("hh:mm A");

  console.log(remainder);
  console.log(minutes);
  console.log(arrival);

  $("#trainTable>tbody").append("<tr><td>"+ name +"<td><td>"+ destination +"<td><td>"+ frequency +"<td><td>"+ arrival +"<td><td>"+ minutes +"<td><tr>");
});
