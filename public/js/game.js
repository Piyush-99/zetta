
var x = "";
document.getElementsByClassName("resett")[0].addEventListener("click", resett);
window.onclick = function(e) {
    console.log(e.srcElement.id);
    x+=e.srcElement.id;
    startgame(e);
};

document.getElementsByClassName("players")[0].classList.add("player");
function startgame(e) {
	for(var t = 1; t < 10; t++) {
	if(e.srcElement.id==t)
    {
    	document.getElementById(""+t).classList.add("zero");
    	cross(e);
    }
   }
}

function cross(e) {
	document.getElementsByClassName("players")[0].classList.remove("player");
	document.getElementsByClassName("players")[1].classList.add("player");

	win();
     window.onclick = function(e) {
     	if(x.includes(""+e.srcElement.id)!=true)
     	{
     		console.log("Inside cross "+ e.srcElement.id);
     		x+=e.srcElement.id;
     		for(var t = 1; t < 10; t++)
     		{if(e.srcElement.id==t)
    	    document.getElementById(""+t).classList.add("cross");
    	    }
    	    zero(e);
        }
       };
}

function zero(e) {
	document.getElementsByClassName("players")[1].classList.remove("player");
	document.getElementsByClassName("players")[0].classList.add("player");

	win();
	window.onclick = function(e) {
     	if(x.includes(""+e.srcElement.id)!=true)
     	{
     		console.log("Inside zero "+ e.srcElement.id);
     		x+=e.srcElement.id;
     		for(var t = 1; t < 10; t++)
     		{if(e.srcElement.id==t)
    	    document.getElementById(""+t).classList.add("zero");
    	    }
    	    cross(e);
        }
       };
}
function p1wins() {

	alert("Player One Wins");
	setTimeout(function() {
	document.getElementById("player1wins").textContent++;
	document.getElementsByClassName("winner")[0].classList.add("winnerss");
	},1000);
	resett();
	return true;
}

function p2wins() {
	alert("Player Two Wins");
	setTimeout(function() {
	document.getElementById("player2wins").textContent++;
	document.getElementsByClassName("winner")[1].classList.add("winnerss");
	},1000);
    resett();
    return true;
}
function win() {


	if(document.getElementById("1").className.includes("zero")&&document.getElementById("2").className.includes("zero")&&document.getElementById("3").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("4").className.includes("zero")&&document.getElementById("5").className.includes("zero")&&document.getElementById("6").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("7").className.includes("zero")&&document.getElementById("8").className.includes("zero")&&document.getElementById("9").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("1").className.includes("zero")&&document.getElementById("5").className.includes("zero")&&document.getElementById("9").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("3").className.includes("zero")&&document.getElementById("5").className.includes("zero")&&document.getElementById("7").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("1").className.includes("zero")&&document.getElementById("4").className.includes("zero")&&document.getElementById("7").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("2").className.includes("zero")&&document.getElementById("5").className.includes("zero")&&document.getElementById("8").className.includes("zero"))
	{
		p1wins();
	}
	if(document.getElementById("3").className.includes("zero")&&document.getElementById("6").className.includes("zero")&&document.getElementById("9").className.includes("zero"))
	{
		p1wins();
	}



    
	if(document.getElementById("1").className.includes("cross")&&document.getElementById("2").className.includes("cross")&&document.getElementById("3").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("4").className.includes("cross")&&document.getElementById("5").className.includes("cross")&&document.getElementById("6").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("7").className.includes("cross")&&document.getElementById("8").className.includes("cross")&&document.getElementById("9").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("1").className.includes("cross")&&document.getElementById("5").className.includes("cross")&&document.getElementById("9").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("3").className.includes("cross")&&document.getElementById("5").className.includes("cross")&&document.getElementById("7").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("1").className.includes("cross")&&document.getElementById("4").className.includes("cross")&&document.getElementById("7").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("2").className.includes("cross")&&document.getElementById("5").className.includes("cross")&&document.getElementById("8").className.includes("cross"))
	{
		p2wins();
	}
	if(document.getElementById("3").className.includes("cross")&&document.getElementById("6").className.includes("cross")&&document.getElementById("9").className.includes("cross"))
	{
		p2wins();
	}

}




function resett() { 
	x="";
	document.getElementsByClassName("winner")[0].classList.remove("winnerss");
	document.getElementsByClassName("winner")[1].classList.remove("winnerss");
	document.getElementsByClassName("players")[0].classList.remove("player");
	document.getElementsByClassName("players")[1].classList.remove("player");
    for(var d = 1; d < 10; d++) {
	        document.getElementById(""+d).classList.remove("zero");
	        document.getElementById(""+d).classList.remove("cross"); 
     }
 }