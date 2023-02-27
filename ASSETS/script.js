// Abhay and Dhruv
// May 21st, 2019
// Hollywood Squares
// In this assignment we create a game in which you have to answer questions in a tic-tac-toe game
let team1Name , team2Name; //used to hold team 1 and 2 names
let difficulty , category , link , animationType;
let JSONContent ,checkedValue;
let answersTL = ["","","",""];
let answersTC = ["","","",""];
let answersTR = ["","","",""];
let answersML = ["","","",""];
let answersMC = ["","","",""];
let answersMR = ["","","",""];
let answersBL = ["","","",""];
let answersBC = ["","","",""];
let answersBR = ["","","",""];
let turn , animations = true;
let ticMarks = "";
let boxStatus = ["","","","","","","","",""]; // order always goes top left, centre right, mid left ...
let correctAnswers = ["","","","","","","","",""]; 

function hideQuestions() {
  $("#qTopLeft").hide(animationType);
  $("#qTopCentre").hide(animationType);
  $("#qTopRight").hide(animationType);
  $("#qMidLeft").hide(animationType);
  $("#qMidCentre").hide(animationType);
  $("#qMidRight").hide(animationType);
  $("#qBottomLeft").hide(animationType);
  $("#qBottomCentre").hide(animationType);
  $("#qBottomRight").hide(animationType); // this function hides all of the question boxes so that we don't have to write it out all of the time.
}//end of hide question function

function offClick() {
  $("#topLeft").off("click");
  $("#topCentre").off("click");
  $("#topRight").off("click");
  $("#midLeft").off("click");
  $("#midCentre").off("click");
  $("#midRight").off("click");
  $("#bottomLeft").off("click");
  $("#bottomCentre").off("click");
  $("#bottomRight").off("click");
}

function onClick() {
  $("#topLeft").on("click");
  $("#topCentre").on("click");
  $("#topRight").on("click");
  $("#midLeft").on("click");
  $("#midCentre").on("click");
  $("#midRight").on("click");
  $("#bottomLeft").on("click");
  $("#bottomCentre").on("click");
  $("#bottomRight").on("click");
}

function checkWin() { // This function checks if the prerequisite squares have been filled, and if so, win
    if (boxStatus[0] == "X" && boxStatus[1] == "X" && boxStatus[2] == "X" || boxStatus[0] == "O" && boxStatus[1] == "O" && boxStatus[2] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[0] == "X" && boxStatus[1] == "X" && boxStatus[2] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
    else if (boxStatus[3] == "X" && boxStatus[4] == "X" && boxStatus[5] == "X" || boxStatus[3] == "O" && boxStatus[4] == "O" && boxStatus[5] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[3] == "X" && boxStatus[4] == "X" && boxStatus[5] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button
    }
    else if (boxStatus[6] == "X" && boxStatus[7] == "X" && boxStatus[8] == "X" || boxStatus[6] == "O" && boxStatus[7] == "O" && boxStatus[8] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[6] == "X" && boxStatus[7] == "X" && boxStatus[8] == "X" ) {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
    else if (boxStatus[0] == "X" && boxStatus[3] == "X" && boxStatus[6] == "X" || boxStatus[0] == "O" && boxStatus[3] == "O" && boxStatus[6] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[0] == "X" && boxStatus[3] == "X" && boxStatus[6] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
    else if (boxStatus[1] == "X" && boxStatus[4] == "X" && boxStatus[7] == "X" || boxStatus[1] == "O" && boxStatus[4] == "O" && boxStatus[7] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[1] == "X" && boxStatus[4] == "X" && boxStatus[7] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
    else if (boxStatus[2] == "X" && boxStatus[5] == "X" && boxStatus[8] == "X" || boxStatus[2] == "O" && boxStatus[5] == "O" && boxStatus[8] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[2] == "X" && boxStatus[5] == "X" && boxStatus[8] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
    else if (boxStatus[0] == "X" && boxStatus[4] == "X" && boxStatus[8] == "X" || boxStatus[0] == "O" && boxStatus[4] == "O" && boxStatus[8] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[0] == "X" && boxStatus[4] == "X" && boxStatus[8] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button
    }
    else if (boxStatus[2] == "X" && boxStatus[4] == "X" && boxStatus[6] == "X" || boxStatus[2] == "O" && boxStatus[4] == "O" && boxStatus[6] == "O") {
      $("#BtnWin").css("display","block");
      if (boxStatus[2] == "X" && boxStatus[4] == "X" && boxStatus[6] == "X") {
        $("#lblWin").text( team1Name + " Wins!!!!!!");
      }
      else {
        $("#lblWin").text( team2Name + " Wins!!!!!!");
      }
      offClick();
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }

    else if (!boxStatus[0] == "" && !boxStatus[1] == "" && !boxStatus[2] == "" && !boxStatus[3] == "" && !boxStatus[4] == "" && !boxStatus[5] == "" && !boxStatus[6] == "" && !boxStatus[7] == "" && !boxStatus[8] == ""){
      $("#BtnWin").css("display","block");
      $("#lblWin").text("It's a Draw!!!!!! Everyone Loses!");
      $("#BtnWin").click(function(event){
        location.reload(true);  
      });//end of restart button 
    }
}//end of check win

function checkTurn() {//function used to check if its X's turn or O's
    if (turn) {
      ticMarks = "X";
      $("#team1h2").css("font-size" , "2em");

      $("#team2h2").css("font-size" , "1em");
    }
    else {
      ticMarks = "O";
      $("#team2h2").css("font-size" , "2em");

      $("#team1h2").css("font-size" , "1em");
    }
}//end of check turn function

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
} // function taken from https://www.kirupa.com/html5/shuffling_array_js.htm, small modifications made.

$(document).ready(function($) { // runs code once document has loaded

  $("#chkInitQuestions").click(function(event) { // once the user clicks start button after the initial questions, it runs the below code
    animations = $("#chkboxAnimations").prop("checked"); // checks to see if animations are selected
    if (animations) {
      animationType = "medium"; // if animations are selected, animations
    }
    team1Name = $("#txtTeam1").val();
    team2Name = $("#txtTeam2").val();
    $("#game").show(animationType);
    $("#madeBy").show(animationType);
    $("#initQuestions").hide(animationType);
    $("#team1h2").append("X: " + team1Name);
    $("#team2h2").append("O: " + team2Name);

    difficulty = $("#selDif").find('option:selected').val().toLowerCase();

    category = $("#selType").find('option:selected').attr("data-c");

    link = "https://opentdb.com/api.php?amount=10&category="+category+"&difficulty="+difficulty+"&type=multiple";
    $.getJSON(link , function(JSONContent) {
      $("#qTopLefth3").append(JSONContent.results[0].question);
        answersTL[0] = JSONContent.results[0].incorrect_answers[0];
        answersTL[1] = JSONContent.results[0].incorrect_answers[1];
        answersTL[2] = JSONContent.results[0].incorrect_answers[2];
        answersTL[3] = JSONContent.results[0].correct_answer;
        correctAnswers[0] = answersTL[3];
        answersTL.shuffle();
        $("#topLeftAP").append(answersTL[0]);
        $("#topLeftA").attr("value",answersTL[0]);
        $("#topLeftBP").append(answersTL[1]);
        $("#topLeftB").attr("value",answersTL[1]);
        $("#topLeftCP").append(answersTL[2]);
        $("#topLeftC").attr("value",answersTL[2]);
        $("#topLeftDP").append(answersTL[3]);
        $("#topLeftD").attr("value",answersTL[3]);
      $("#qTopCentreh3").append(JSONContent.results[1].question);
        answersTC[0] = JSONContent.results[1].incorrect_answers[0];
        answersTC[1] = JSONContent.results[1].incorrect_answers[1];
        answersTC[2] = JSONContent.results[1].incorrect_answers[2];
        answersTC[3] = JSONContent.results[1].correct_answer;
        correctAnswers[1] = answersTC[3];
        answersTC.shuffle();
        $("#topCentreAP").append(answersTC[0]);
        $("#topCentreA").attr("value",answersTC[0]);
        $("#topCentreBP").append(answersTC[1]);
        $("#topCentreB").attr("value",answersTC[1]);
        $("#topCentreCP").append(answersTC[2]);
        $("#topCentreC").attr("value",answersTC[2]);
        $("#topCentreDP").append(answersTC[3]);
        $("#topCentreD").attr("value",answersTC[3]);
      $("#qTopRighth3").append(JSONContent.results[2].question);
        answersTR[0] = JSONContent.results[2].incorrect_answers[0];
        answersTR[1] = JSONContent.results[2].incorrect_answers[1];
        answersTR[2] = JSONContent.results[2].incorrect_answers[2];
        answersTR[3] = JSONContent.results[2].correct_answer;
        correctAnswers[2] = answersTR[3];
        answersTR.shuffle();
        $("#topRightAP").append(answersTR[0]);
        $("#topRightA").attr("value",answersTR[0]);
        $("#topRightBP").append(answersTR[1]);
        $("#topRightB").attr("value",answersTR[1]);
        $("#topRightCP").append(answersTR[2]);
        $("#topRightC").attr("value",answersTR[2]);
        $("#topRightDP").append(answersTR[3]);
        $("#topRightD").attr("value",answersTR[3]);
      $("#qMidLefth3").append(JSONContent.results[3].question);
        answersML[0] = JSONContent.results[3].incorrect_answers[0];
        answersML[1] = JSONContent.results[3].incorrect_answers[1];
        answersML[2] = JSONContent.results[3].incorrect_answers[2];
        answersML[3] = JSONContent.results[3].correct_answer;
        correctAnswers[3] = answersML[3];
        answersML.shuffle();
        $("#midLeftAP").append(answersML[0]);
        $("#midLeftA").attr("value",answersML[0]);
        $("#midLeftBP").append(answersML[1]);
        $("#midLeftB").attr("value",answersML[1]);
        $("#midLeftCP").append(answersML[2]);
        $("#midLeftC").attr("value",answersML[2]);
        $("#midLeftDP").append(answersML[3]);
        $("#midLeftD").attr("value",answersML[3]);
      $("#qMidCentreh3").append(JSONContent.results[4].question);
        answersMC[0] = JSONContent.results[4].incorrect_answers[0];
        answersMC[1] = JSONContent.results[4].incorrect_answers[1];
        answersMC[2] = JSONContent.results[4].incorrect_answers[2];
        answersMC[3] = JSONContent.results[4].correct_answer;
        correctAnswers[4] = answersMC[3];
        answersMC.shuffle();
        $("#midCentreAP").append(answersMC[0]);
        $("#midCentreA").attr("value",answersMC[0]);
        $("#midCentreBP").append(answersMC[1]);
        $("#midCentreB").attr("value",answersMC[1]);
        $("#midCentreCP").append(answersMC[2]);
        $("#midCentreC").attr("value",answersMC[2]);
        $("#midCentreDP").append(answersMC[3]);
        $("#midCentreD").attr("value",answersMC[3]);
      $("#qMidRighth3").append(JSONContent.results[5].question);
        answersMR[0] = JSONContent.results[5].incorrect_answers[0];
        answersMR[1] = JSONContent.results[5].incorrect_answers[1];
        answersMR[2] = JSONContent.results[5].incorrect_answers[2];
        answersMR[3] = JSONContent.results[5].correct_answer;
        correctAnswers[5] = answersMR[3];
        answersMR.shuffle();
        $("#midRightAP").append(answersMR[0]);
        $("#midRightA").attr("value",answersMR[0]);
        $("#midRightBP").append(answersMR[1]);
        $("#midRightB").attr("value",answersMR[1]);
        $("#midRightCP").append(answersMR[2]);
        $("#midRightC").attr("value",answersMR[2]);
        $("#midRightDP").append(answersMR[3]);
        $("#midRightD").attr("value",answersMR[3]);
      $("#qBottomLefth3").append(JSONContent.results[6].question);
        answersBL[0] = JSONContent.results[6].incorrect_answers[0];
        answersBL[1] = JSONContent.results[6].incorrect_answers[1];
        answersBL[2] = JSONContent.results[6].incorrect_answers[2];
        answersBL[3] = JSONContent.results[6].correct_answer;
        correctAnswers[6] = answersBL[3];
        answersBL.shuffle();
        $("#bottomLeftAP").append(answersBL[0]);
        $("#bottomLeftA").attr("value",answersBL[0]);
        $("#bottomLeftBP").append(answersBL[1]);
        $("#bottomLeftB").attr("value",answersBL[1]);
        $("#bottomLeftCP").append(answersBL[2]);
        $("#bottomLeftC").attr("value",answersBL[2]);
        $("#bottomLeftDP").append(answersBL[3]);
        $("#bottomLeftD").attr("value",answersBL[3]);
      $("#qBottomCentreh3").append(JSONContent.results[7].question);
        answersBC[0] = JSONContent.results[7].incorrect_answers[0];
        answersBC[1] = JSONContent.results[7].incorrect_answers[1];
        answersBC[2] = JSONContent.results[7].incorrect_answers[2];
        answersBC[3] = JSONContent.results[7].correct_answer;
        correctAnswers[7] = answersBC[3];
        answersBC.shuffle();
        $("#bottomCentreAP").append(answersBC[0]);
        $("#bottomCentreA").attr("value",answersBC[0]);
        $("#bottomCentreBP").append(answersBC[1]);
        $("#bottomCentreB").attr("value",answersBC[1]);
        $("#bottomCentreCP").append(answersBC[2]);
        $("#bottomCentreC").attr("value",answersBC[2]);
        $("#bottomCentreDP").append(answersBC[3]);
        $("#bottomCentreD").attr("value",answersBC[3]);
      $("#qBottomRighth3").append(JSONContent.results[8].question);
        answersBR[0] = JSONContent.results[8].incorrect_answers[0];
        answersBR[1] = JSONContent.results[8].incorrect_answers[1];
        answersBR[2] = JSONContent.results[8].incorrect_answers[2];
        answersBR[3] = JSONContent.results[8].correct_answer;
        correctAnswers[8] = answersBR[3];
        answersBR.shuffle();
        $("#bottomRightAP").append(answersBR[0]);
        $("#bottomRightA").attr("value",answersBR[0]);
        $("#bottomRightBP").append(answersBR[1]);
        $("#bottomRightB").attr("value",answersBR[1]);
        $("#bottomRightCP").append(answersBR[2]);
        $("#bottomRightC").attr("value",answersBR[2]);
        $("#bottomRightDP").append(answersBR[3]);
        $("#bottomRightD").attr("value",answersBR[3]);
    });//end of assigning questions from api
      });//end of start button

    $("#topLeft").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qTopLeft").show(animationType);
      $("#chkTopLeft").click(function(event) {
        checkedValue = $('input[name=TopLeft]:checked');
        if (checkedValue.val() == correctAnswers[0]) {//checks if answer is correct
          $("#qTopLeft").hide(animationType);
          $("#topLeft").off("click");
          $("#topLeft").css("background-color","");
          $("#topLeft").css("opacity","");

          if (ticMarks == "X") {
            $("#lblTopLeftX").show();
            boxStatus[0] = "X";
          }
          else {
            $("#lblTopLeftO").show();
            boxStatus[0] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#topLeft").css("background-color","red");
          $("#topLeft").css("opacity","0.6");
          $("#qTopLeft").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn;
    });//end of top left button

    $("#topCentre").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qTopCentre").show(animationType);
      $("#chkTopCentre").click(function(event) {
        checkedValue = $('input[name=TopCentre]:checked');
        if (checkedValue.val() == correctAnswers[1]) {//checks if answer is correct
          $("#qTopCentre").hide(animationType);
          $("#topCentre").off("click");
          $("#topCentre").css("background-color","");
          $("#topCentre").css("opacity","");

          if (ticMarks == "X") {
            $("#lblTopCentreX").show();
            boxStatus[1] = "X";
          }
          else {
            $("#lblTopCentreO").show();
            boxStatus[1] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#topCentre").css("background-color","red");
          $("#topCentre").css("opacity","0.6");
          $("#qTopCentre").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn;
    });//end of top center button

    $("#topRight").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qTopRight").show(animationType);

      $("#chkTopRight").click(function(event) {
        checkedValue = $('input[name=TopRight]:checked');
        if (checkedValue.val() == correctAnswers[2]) {//checks if answer is correct
          $("#qTopRight").hide(animationType);
          $("#topRight").off("click");
          $("#topRight").css("background-color","");
          $("#topRight").css("opacity","");

          if (ticMarks == "X") {
            $("#lblTopRightX").show();
            boxStatus[2] = "X";
          }
          else {
            $("#lblTopRightO").show();
            boxStatus[2] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#topRight").css("background-color","red");
          $("#topRight").css("opacity","0.6");
          $("#qTopRight").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn;
    });//end of top right button

    $("#midLeft").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qMidLeft").show(animationType);

      $("#chkMidLeft").click(function(event) {
        checkedValue = $('input[name=MidLeft]:checked');
        if (checkedValue.val() == correctAnswers[3]) {//checks if answer is correct
          $("#qMidLeft").hide(animationType);
          $("#midLeft").off("click");
          $("#midLeft").css("background-color","");
          $("#midLeft").css("opacity","");

          if (ticMarks == "X") {
            $("#lblMidLeftX").show();
            boxStatus[3] = "X";
          }
          else {
            $("#lblMidLeftO").show();
            boxStatus[3] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#midLeft").css("background-color","red");
          $("#midLeft").css("opacity","0.6");
          $("#qMidLeft").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn; 
    });//end of Mid left button

    $("#midCentre").click(function(event) {
      checkTurn();//activates check turn function 
      hideQuestions(); //activates hideQuestions function
      $("#qMidCentre").show(animationType);

      $("#chkMidCentre").click(function(event) {
        checkedValue = $('input[name=MidCentre]:checked');
        if (checkedValue.val() == correctAnswers[4]) {//checks if answer is correct
          $("#qMidCentre").hide(animationType);
          $("#midCentre").off("click");
          $("#midCentre").css("background-color","");
          $("#midCentre").css("opacity","");

          if (ticMarks == "X") {
            $("#lblMidCentreX").show();
            boxStatus[4] = "X";
          }
          else {
            $("#lblMidCentreO").show();
            boxStatus[4] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#midCentre").css("background-color","red");
          $("#midCentre").css("opacity","0.6");
          $("#qMidCentre").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn; 
    });//end of Mid center button

    $("#midRight").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qMidRight").show(animationType);

      $("#chkMidRight").click(function(event) {
        checkedValue = $('input[name=MidRight]:checked');
        if (checkedValue.val() == correctAnswers[5]) {//checks if answer is correct
          $("#qMidRight").hide(animationType);
          $("#midRight").off("click");
          $("#midRight").css("background-color","");
          $("#midRight").css("opacity","");

          if (ticMarks == "X") {
            $("#lblMidRightX").show();
            boxStatus[5] = "X";
          }
          else {
            $("#lblMidRightO").show();
            boxStatus[5] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#midRight").css("background-color","red");
          $("#midRight").css("opacity","0.6");
          $("#qMidRight").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn; 
    });//end of mid right button

    $("#bottomLeft").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qBottomLeft").show(animationType);

      $("#chkBottomLeft").click(function(event) {
        checkedValue = $('input[name=BottomLeft]:checked');
        if (checkedValue.val() == correctAnswers[6]) {//checks if answer is correct
          $("#qBottomLeft").hide(animationType);
          $("#bottomLeft").off("click");
          $("#bottomLeft").css("background-color","");
          $("#bottomLeft").css("opacity","");

          if (ticMarks == "X") {
            $("#lblBottomLeftX").show();
            boxStatus[6] = "X";
          }
          else {
            $("#lblBottomLeftO").show();
            boxStatus[6] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#bottomLeft").css("background-color","red");
          $("#bottomLeft").css("opacity","0.6");
          $("#qBottomLeft").hide(animationType);
        }
        checkWin();
      });//end of check answer button
      turn = !turn;  
    });//end of Bottom left button

    $("#bottomCentre").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qBottomCentre").show(animationType);

      $("#chkBottomCentre").click(function(event) {
        checkedValue = $('input[name=BottomCentre]:checked');
        if (checkedValue.val() == correctAnswers[7]) {//checks if answer is correct
          $("#qBottomCentre").hide(animationType);
          $("#bottomCentre").off("click");
          $("#bottomCentre").css("background-color","");
          $("#bottomCentre").css("opacity","");

          if (ticMarks == "X") {
            $("#lblBottomCentreX").show();
            boxStatus[7] = "X";
          }
          else {
            $("#lblBottomCentreO").show();
            boxStatus[7] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#bottomCentre").css("background-color","red");
          $("#bottomCentre").css("opacity","0.6");
          $("#qBottomCentre").hide(animationType);

        }
        checkWin();
      });//end of check answer button  
      turn = !turn;
    });//end of Bottom center button

    $("#bottomRight").click(function(event) {
      checkTurn();//activates check turn function
      hideQuestions();//activates hideQuestions function
      $("#qBottomRight").show(animationType);

      $("#chkBottomRight").click(function(event) {
        checkedValue = $('input[name=BottomRight]:checked');
        if (checkedValue.val() == correctAnswers[8]) {//checks if answer is correct
          $("#qBottomRight").hide(animationType);
          $("#bottomRight").off("click");
          $("#bottomRight").css("background-color","");
          $("#bottomRight").css("opacity","");

          if (ticMarks == "X") {
            $("#lblBottomRightX").show();
            boxStatus[8] = "X";
          }
          else {
            $("#lblBottomRightO").show();
            boxStatus[8] = "O";
          }
        }

        else {//done if question is answered wrong
          $("#bottomRight").css("background-color","red");
          $("#bottomRight").css("opacity","0.6");
          $("#qBottomRight").hide(animationType);
        }
        checkWin();
      });//end of check answer button 
    });//end of bottom right button
    turn = !turn;
});//end of document ready

