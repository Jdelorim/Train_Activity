  
  $(document).ready(function () {

  
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCj6L0vmmAT3iortKmR0Lfm4OZB0TC_HzI",
    authDomain: "multiplayerrps-ca99e.firebaseapp.com",
    databaseURL: "https://multiplayerrps-ca99e.firebaseio.com",
    projectId: "multiplayerrps-ca99e",
    storageBucket: "multiplayerrps-ca99e.appspot.com",
    messagingSenderId: "318619920914"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var addT = {
      tName: "",
      tDest: "",
      tFreq: "",
      tTime: ""
    
  };

  function jTime() {
      var cTime = moment().format("hh:mm:ss");
      $("#cTime2").text(cTime);
}
  
  setInterval(jTime, 1000);
  jTime();

  



  $("#jbutton").on("click",function(event){
      event.preventDefault();
        
        addT.tName = $("#tName").val().trim();
      //  console.log(addT.tName);
        addT.tDest = $("#tDest").val().trim();
        addT.tTime = $("#tTime").val().trim();
        addT.tFreq = $("#tFreq").val().trim();

        var cTime2 = moment(tTime, "HH:mm:ss").subtract(1,"years"); 
        console.log(cTime2);
        var subTime = moment().diff(moment(cTime2),"minutes");
        var difference = subTime % addT.tFreq;
        console.log(difference);
        var minAway = addT.tFreq - difference;
        var nTrain = moment().add(minsAway,"minutes");



       // database.ref().push(addT);

        var newTable = $("<tr>").append(
            $("<td>").text(addT.tName),
            $("<td>").text(addT.tDest),
           
            $("<td>").text(addT.tFreq),
            $("<td>").text(nTrain),
            $("<td>").text(minAway)

        );

        $("tbody").append(newTable);
        

       ///so I'm going to submit both the RPS and this....
       //it's not complete I ran out of time I will have to finish 
       //it tomorrow I think I'm close

  });



  });


  