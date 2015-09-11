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
		if((($("#1").html()) == ($("#2").html()) && ($("#2").html()==($("#3").html())))){
			warning = true;
		}
		return warning;
	};

	function initialize(){
		newGame();
		$('td').on('click',function(){
			if($(this).html() == "" && !endGame){
				$(this).html(curPiece);
			}
			if(GameOver()){
				endGame = true;
			} else {
				switchPlayers();
			}

		});

	}

	return initialize();
});