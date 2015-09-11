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

	function toggling(){
		toggle = toggle ? 0 : 1;
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
			if($(this).html() == "" && !endGame && toggle==1){
				playerCount++;
				$(this).html(human);
				mv = $(this).attr('id');
				compMove();
			}
			if(GameOver()){
				endGame = true;
			} else {
				totalCount++;
				toggling();
			}
			if(totalCount==9){
			}
		});
	}

	function compMove(){
		if(playerCount == 1){
			if((mv == "5")){
				randomStore = random(4);
				if(randomStore == 1){
					$("#1").html(computer);
				}else if(randomStore == 2){
					$("#3").html(computer);
				}else if(randomStore == 3){
					$("#9").html(computer);
				}else if(randomStore = 4){
					$("#7").html(computer);
				}
			}else{
				if(mv == "2" || mv == "")
			}
		}
		
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