$(function(){

	function switchPlayers(){
		curPlayer = curPlayer ? 0 : 1;
		switchPiece();
	};

	function getPlayer(){
		curPlayer = Math.floor(Math.random()*2);
		switchPiece();
	}

	function switchPiece(){
		curPiece = curPlayer ? 'x' : 'o';
	}

	function newGame(){
		endGame = false;
		clearBoard();
		getPlayer();
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
		count = 0;

		$('td').on('click',function(){
			if($(this).html() == "" && !endGame){
				$(this).html(curPiece);
			}
			if(GameOver()){
				endGame = true;
				winner = curPlayer; 
				popup(1);
			} else {
				count ++;
				switchPlayers();
			}
			if(count==9){
				popup(2);
			}
		});
		

	}

	function popup(num){
		if(num == 1){
			alert('Player ' + curPiece + ' wins!');
		}
		if(num == 2){
			alert("Its a tie");
		}
	}

	return initialize();
});