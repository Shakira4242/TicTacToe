$(function(){

	function initializePlayers(){
		player1 = {piece:0,turn:0};
		player2 = {piece:0,turn:0};
		getStarter(player1,player2);
		return start();
	};

	function getStarter(player1,player2){
		var randomnumber = Math.floor(Math.random()*2);
		if(randomnumber===0){
			player1.turn = true;
			player1.piece = "x";
			player2.turn = false;
			player2.piece = "o";
		}else{
			player2.turn = true;
			player2.piece = "x";
			player1.turn = false;
			player1.piece = "o";
		}
	};


	function start(){
		if(player1.turn == true){
			$("td").click(function(){
				$(this).text(player1.piece);
				player1.turn = false;
				if(finished()){
					return weHaveAWinner();
				}else{
					return start();
				}
			});
		}else if(player1.turn == false){
			$("td").click(function(){
				$(this).text(player2.piece);
				player1.turn = true;
				if(finished()){
					return weHaveAWinner();
				}else{
					return start();
				}
			});
		}
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