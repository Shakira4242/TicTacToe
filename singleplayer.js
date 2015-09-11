$(function(){
	human = 'x'; // turn 0
	computer = 'o'; // turn 1

	function random(num){
		randomInt = Math.floor(Math.random()*num)+1;
		return randomInt;
	}
	
	function getToggle(){
		toggle = 1;
	};



	function newGame(){
		endGame = false;
		clearBoard();
		getToggle();
	}

	function clearBoard(){
		$("td").each(function(i,v){
			$(v).html("");
		});
	}

	function GameOver(){
		warning = false;
		if(((($("#1").html()) == ($("#2").html())) && ($("#1").html()==$("#3").html()) && ($("#1").html()!=="")) || ((($("#4").html()) == ($("#5").html())) && ($("#4").html()==$("#6").html()) && ($("#4").html()!=="")) || ((($("#7").html()) == ($("#8").html())) && ($("#7").html()==$("#9").html()) && ($("#7").html()!=="")) || ((($("#1").html()) == ($("#4").html())) && ($("#1").html()==$("#7").html()) && ($("#1").html()!=="")) || ((($("#2").html()) == ($("#5").html())) && ($("#2").html()==$("#8").html()) && ($("#2").html()!=="")) || ((($("#3").html()) == ($("#6").html())) && ($("#3").html()==$("#9").html()) && ($("#3").html() !== "")&&($("#6").html() !== "")&&($("#9").html() !== "") ) || ((($("#1").html()) == ($("#5").html())) && ($("#1").html()==$("#9").html()) && ($("#1").html()!=="")) || ((($("#3").html()) == ($("#5").html())) && ($("#3").html()==$("#7").html()) && ($("#3").html()!==""))){
			warning = true;
		}
		return warning;		
	};

	function initialize(){
		newGame();
		totalCount = 0;
		playerCount = 0;

		$('td').on('click',function(){
			if($(this).html() == "" && !endGame){
				playerCount++;
				$(this).html(human);
				pm = $(this).attr('id');
				playerMoves.push(pm);
				compMove();
			}
			if(GameOver()){
				endGame = true;
				alert("Player wins");
			} else {
				totalCount++;
			}
			if(totalCount==9){
			}
			console.log(playerMoves);
		});
	}

	function findIn(array,nextMove){
		for(var i=0;i<array.length;i++){
			if(array[i].indexOf(nextMove) !== -1){
				return true;
			}else{
				return false;
			}
		}
	}

	computerMoves = [];
	playerMoves = [];
	corner = ["1","3","9","7"];
	edge = ["2","6","8","4"];

	// AI (Isn't really an AI)
	function compMove(){
		if(!endGame){
			if(playerCount == 1){
				if(pm=="5"){ 
					randomStore = random(4);
					if(randomStore == 1){
						$("#1").html(computer);
						// computermoves array gets 
						// playermoves array gets in the initialize function
						computerMoves.push("1");
						// computermoves deletes from array 
						i = corner.indexOf(computerMoves[0]);
						delete corner[i];
						// playermoves deletes from array
						i = corner.indexOf(pm);
						delete corner[i];

					}else if(randomStore == 2){

						$("#3").html(computer);
						computerMoves.push("3");
						i = corner.indexOf(computerMoves[0]);
						delete corner[i];
						i = corner.indexOf(pm);
						delete corner[i];
					}else if(randomStore == 3){
						$("#9").html(computer);
						computerMoves.push("9");
						i = corner.indexOf(computerMoves[0]);
						delete corner[i];
						i = corner.indexOf(pm);
						delete corner[i];
					}else if(randomStore = 4){
						$("#7").html(computer);
						computerMoves.push("7");
						i = corner.indexOf(computerMoves[0]);
						delete corner[i];
						i = corner.indexOf(pm);
						delete corner[i];
					}
				}else{
					// if someone doesn't choose the center we pick it
					$("#5").html(computer);
					computerMoves.push("5");
					// dont forget to delete the computer moves from the existing array
					i = corner.indexOf(computerMoves[0]);
					delete corner[i];
					if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}
				}
				console.log(computerMoves,playerMoves);
			}else if(playerCount == 2){
				if(
					(playerMoves[0]=="1" && playerMoves[1]== "4") ||
					(playerMoves[0]=="2" && playerMoves[1]== "5") ||
					(playerMoves[0]=="3" && playerMoves[1]== "6") ||
					(playerMoves[0]=="7" && playerMoves[1]== "4") ||
					(playerMoves[0]=="8" && playerMoves[1]== "5") ||
					(playerMoves[0]=="9" && playerMoves[1]== "6") ||
					(playerMoves[0]=="1" && playerMoves[1]== "2") ||
					(playerMoves[0]=="4" && playerMoves[1]== "5") ||
					(playerMoves[0]=="7" && playerMoves[1]== "8") ||
					(playerMoves[0]=="3" && playerMoves[1]== "2") ||
					(playerMoves[0]=="6" && playerMoves[1]== "5") ||
					(playerMoves[0]=="9" && playerMoves[1]== "8") ||
					(playerMoves[0]=="1" && playerMoves[1]== "5") ||
					(playerMoves[0]=="9" && playerMoves[1]== "5") ||
					(playerMoves[0]=="3" && playerMoves[1]== "5") ||
					(playerMoves[0]=="7" && playerMoves[1]== "5")){

						if(playerMoves[0]=="1" && playerMoves[1]== "4") {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {;}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {;}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {;}
						if(playerMoves[0]=="8" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="9" && playerMoves[1]== "6") {;}
						if(playerMoves[0]=="1" && playerMoves[1]== "2") {;}
						if(playerMoves[0]=="4" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="7" && playerMoves[1]== "8") {;}
						if(playerMoves[0]=="3" && playerMoves[1]== "2") {;}
						if(playerMoves[0]=="6" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="9" && playerMoves[1]== "8")	{;}
						if(playerMoves[0]=="1" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="9" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="3" && playerMoves[1]== "5") {;}
						if(playerMoves[0]=="7" && playerMoves[1]== "5")	{;}

				}
			}
		}else{
			alert("Player wins");
		}	
		console.log(computerMoves);
	}

	//Declaring the winner
	// function popup(num){
	// 	if(num == 1){
	// 		alert('Player ' + curPiece + ' wins!');
	// 	}
	// 	if(num == 2){
	// 		alert("Its a tie");
	// 	}
	// }

	return initialize();
});