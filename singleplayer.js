$(function(){
	human = 'x'; // turn 0
	computer = 'o'; // turn 1
	arrayorginal=[];

	function random(num){
		randomInt = Math.floor(Math.random()*num)+1;
		return randomInt;
	}
	
	function getToggle(){
		toggle = 1;
	}


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
				arrayorginal.push(pm);
				compMove();
			}
			if(GameOver()){
				endGame = true;
				if(playerCount%2==0){
					alert("player wins");
				}else{
					alert("computer wins");
				}
			} else {
				totalCount++;
			}
			if(totalCount==9){
			}
			console.log(arrayorginal);
		});
	}

	computerMoves = [];
	playerMoves = [];
	corner = ["1","3","9","7"];
	edge = ["2","6","8","4"];

	// AI (Isn't really an AI)
	function compMove(){
		if(!endGame){
			playerMoves = [arrayorginal[0]];
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
					// if the corner isnt selected
					if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}
				}
			}else if(playerCount == 2){
				playerMoves = [arrayorginal[0],arrayorginal[1]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						else if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

				playerMoves = [arrayorginal[1],arrayorginal[0]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						else if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

			}else if(playerCount == 3){
				playerMoves = [arrayorginal[0],arrayorginal[1]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

				playerMoves = [arrayorginal[1],arrayorginal[2]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
	
				playerMoves = [arrayorginal[0],arrayorginal[2]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
			}else if(playerCount == 4){
				playerMoves = [arrayorginal[0],arrayorginal[1]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

				playerMoves = [arrayorginal[0],arrayorginal[2]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
	
				playerMoves = [arrayorginal[0],arrayorginal[3]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
				playerMoves = [arrayorginal[1],arrayorginal[2]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
				playerMoves = [arrayorginal[1],arrayorginal[3]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

				playerMoves = [arrayorginal[2],arrayorginal[0]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}

				playerMoves = [arrayorginal[2],arrayorginal[3]];
				if(
					((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[1]=="1" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[1]=="2" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[1]=="3" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[1]=="7" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[1]=="8" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[1]=="9" && playerMoves[0]== "6")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[1]=="1" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[1]=="4" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[1]=="7" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[1]=="3" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[1]=="6" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[1]=="9" && playerMoves[0]== "8")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[1]=="1" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[1]=="9" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[1]=="3" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[1]=="7" && playerMoves[0]== "5")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[1]=="3" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[1]=="6" && playerMoves[0]== "4")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "7")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[1]=="7" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[1]=="8" && playerMoves[0]== "2")) ||
					((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "3")) ||
					((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[1]=="9" && playerMoves[0]== "1")) ||
					((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[1]=="7" && playerMoves[0]== "3"))){

						if((playerMoves[0]=="1" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "1")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "2")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "3")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "4")||(playerMoves[0]=="4" && playerMoves[1]== "7")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="8" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "8")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "9")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "1")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "4")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "7")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "2")||(playerMoves[0]=="2" && playerMoves[1]== "3")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="6" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "6")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "9")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "1")) {$("#9").html(computer);computerMoves.push("#9");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="9" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "9")) {$("#1").html(computer);computerMoves.push("#1");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "3")) {$("#7").html(computer);computerMoves.push("#7");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "5")||(playerMoves[0]=="5" && playerMoves[1]== "7")) {$("#3").html(computer);computerMoves.push("#3");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
					// other case ---> 8 of them
						if((playerMoves[0]=="1" && playerMoves[1]== "3")||(playerMoves[0]=="3" && playerMoves[1]== "1")) {$("#2").html(computer);computerMoves.push("#2");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="4" && playerMoves[1]== "6")||(playerMoves[0]=="6" && playerMoves[1]== "4")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "7")) {$("#8").html(computer);computerMoves.push("#8");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "7")||(playerMoves[0]=="7" && playerMoves[1]== "1")) {$("#4").html(computer);computerMoves.push("#4");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="2" && playerMoves[1]== "8")||(playerMoves[0]=="8" && playerMoves[1]== "2")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="3" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "3")) {$("#6").html(computer);computerMoves.push("#6");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="1" && playerMoves[1]== "9")||(playerMoves[0]=="9" && playerMoves[1]== "1")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
						if((playerMoves[0]=="7" && playerMoves[1]== "3")||(playerMoves[0]=="7" && playerMoves[1]== "3")) {$("#5").html(computer);computerMoves.push("#5");if(corner.indexOf(pm)!==-1){
						i = corner.indexOf(pm);
						delete corner[i];
					}else{
						i = edge.indexOf(pm);
						delete edge[i];
					}}
				}else{
					if(corner.indexOf(pm)!== -1){
						i = corner.indexOf(pm);
						delete corner[i];
						$("#"+corner[0]).html(computer);
					}else{
						// dont forget to delete the computer moves from the existing array
						i = edge.indexOf(pm);
						delete edge[i];
						$("#"+edge[0]).html(computer);
					}
				}
			} 

		}	
	}
	return initialize();
});