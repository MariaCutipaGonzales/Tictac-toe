var jugador =1;
var point = 0;
var b1 = document.getElementById("btn1"),
    b2 = document.getElementById("btn2"),
    b3 = document.getElementById("btn3"),
    b4 = document.getElementById("btn4"),
    b5 = document.getElementById("btn5"),
    b6 = document.getElementById("btn6"),
    b7 = document.getElementById("btn7"),
    b8 = document.getElementById("btn8"),
    b9 = document.getElementById("btn9");

var turn = function(jugador){
	var play = jugador;
	function msg(message){
		play.message;
	}
return {setMessage: msg};
};

function eventButtons(button) {
	if (jugador ==1){
		document.getElementById(button).value = "X";
		document.getElementById(button).disabled = "disabled";
		jugador -=1;
	}else{
		document.getElementById(button).value = "O";
		document.getElementById(button).disabled = "disabled";
		jugador +=1;
	}
}

function checkWinner(){

	if (b1.value == "X" && b2.value == "X" && b3.value == "X" ||
		b4.value == "X" && b5.value == "X" && b6.value == "X" ||
	 	b7.value == "X" && b8.value == "X" && b9.value == "X" ||
		b1.value == "X" && b4.value == "X" && b7.value == "X" ||
		b2.value == "X" && b5.value == "X" && b8.value == "X" ||
	 	b3.value == "X" && b6.value == "X" && b9.value == "X"){
		alert("El ganador es X ");
		clearButtons();
	}
	else if(b1.value == "O" && b2.value == "O" && b3.value == "O" ||
		b4.value == "O" && b5.value == "O" && b6.value == "O" ||
	 	b7.value == "O" && b8.value == "O" && b9.value == "O" ||
		b1.value == "O" && b4.value == "O" && b7.value == "O" ||
		b2.value == "O" && b5.value == "O" && b8.value == "O" ||
	 	b3.value == "O" && b6.value == "O" && b9.value == "O"){
		alert("El ganador es O");
		clearButtons();
}
}

function clearButtons(){
		b1.value ="";
		b2.value ="";
		b3.value =""; 
		b4.value ="";
		b5.value ="";
		b6.value =""; 
	 	b7.value ="";
	 	b8.value ="";
	 	b9.value =""; 
	 	b1.disabled = "";
		b2.disabled = "";
		b3.disabled = ""; 
		b4.disabled = "";
		b5.disabled = "";
		b6.disabled = ""; 
	 	b7.disabled = "";
	 	b8.disabled = "";
	 	b9.disabled = ""; 
}

