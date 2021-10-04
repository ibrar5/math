var p_1 = document.getElementById("player_1").value;
var p_2 = document.getElementById("player_2").value;

window.localStorage.setItem("player 1" , p_1);
window.localStorage.setItem("player 2" , p_2);

function move(){
    window.location = "game_page.html";
}
var pl_1 = window.localStorage.getItem("player 1");
var pl_2 = window.localStorage.getItem("player 2");

document.getElementById("player_1_o").innerHTML = pl_1;
document.getElementById("player_2_o").innerHTML = pl_2;