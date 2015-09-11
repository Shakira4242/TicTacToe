$(function(){

	function initializePlayers(){
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

	}

	function start(){
		
	};

	function weHaveAWinner(){
		return alert("HAHAHAH");
	};

	function finished(){
		if(($("#1").html() == $("#2").html()) && ($("#2").html() == $("#3").html())){
			return true;
		}else{
			return false;
		}
	};

	return initializePlayers();
});