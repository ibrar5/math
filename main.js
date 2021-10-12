
function move(){
    var p_1 = document.getElementById("player_1").value;
var p_2 = document.getElementById("player_2").value;

    localStorage.setItem("player_1" , p_1);
    localStorage.setItem("player_2" , p_2);

    window.open("game_page.html");
}
