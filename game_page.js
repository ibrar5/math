var pl_1 = localStorage.getItem("player_1");
var pl_2 = localStorage.getItem("player_2");

document.getElementById("player_1_o").innerHTML = pl_1 + ":";
document.getElementById("player_2_o").innerHTML = pl_2 + ":";

player_1_score = 0;
player_2_score = 0;

document.getElementById("score_1").innerHTML = player_1_score;
document.getElementById("score_2").innerHTML = player_2_score;

document.getElementById("player_qu").innerHTML = "Question Turn : " + pl_1;
document.getElementById("player_ans").innerHTML = "Answer Turn : " + pl_2;

function send(){
    n1 = document.getElementById("number_1").value;
    n2 = document.getElementById("number_2").value;

    answer = parseInt(n1) *  (n2);

    qu_number = '<h4>' + n1 + "X" + n2 + "</h4>";

    input_box = "<br>Answer : <input type='number' id='ans'>";

    check_btn = "<br><br><button class='btn btn-success' onclick='check()'>CHECK</button>";

    row = qu_number + input_box + check_btn;

    document.getElementById("output").innerHTML = row + "<br><br>";

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

q_turn = "Player_1";
ans_turn = "Player_2";

function check(){
    answ = document.getElementById("ans").value;
    if(answer == answ){
        if(ans_turn == "Player_1"){
            new_player_1_score = player_1_score + 1;
            document.getElementById("score_1").innerHTML = new_player_1_score;
        }else{
            new_player_2_score = player_2_score + 1;
            document.getElementById("score_2").innerHTML = new_player_2_score;
        }
    }
    if(q_turn == "Player_1"){
        q_turn = "Player_2";
        document.getElementById("player_qu").innerHTML = "Question Turn : " + pl_1;
    }else{
        q_turn = "Player_1";
        document.getElementById("player_qu").innerHTML = "Question Turn : " + pl_2;
    }
    if(ans_turn == "Player_1"){
        ans_turn = "Player_2";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + pl_1;
    }else{
        ans_turn = "Player_1";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + pl_2;
    }
}