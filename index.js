var score1 = 0;
var score2 = 0;

document.getElementById('roll').addEventListener('click', function() {
    // For player 1 dice
    randomNumber1 = Math.floor((Math.random()*6) + 1);
    dice1 = "images/dice" + randomNumber1 + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", dice1);

    // For player 2 dice
    randomNumber2 = Math.floor((Math.random()*6) + 1);
    dice2 = "images/dice" + randomNumber2 + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", dice2);

    // Deciding winner
    if(randomNumber1 > randomNumber2)
    {
        score1 = score1 + 1;
        let name = "Player 1";
        name = document.getElementsByClassName('name1')[0].textContent;
        document.querySelector("h1").innerHTML = name + " Wins!";
    }
    else if(randomNumber1 < randomNumber2)
    {
        score2 = score2 + 1;
        let name = "Player 2";
        name = document.getElementsByClassName('name2')[0].textContent;
        document.querySelector("h1").innerHTML = name + " Wins!";
    }
    else
        document.querySelector("h1").innerHTML = "DRAW!!"


    // Displaying Player wise Score
    let p1_name = document.getElementsByClassName('name1')[0].textContent;
    let p2_name = document.getElementsByClassName('name2')[0].textContent;
    let p1 = document.getElementsByClassName('p1-score')[0];
    let p2 = document.getElementsByClassName('p2-score')[0];
    p1.innerText = p1_name + ":  " + score1;
    p2.innerText = p2_name + ":  " + score2;
})


// Editing Name for Player 1
document.getElementById('change1').addEventListener('click', function(){
    let inp_box = document.getElementsByClassName('p1-inputs')[0];
    inp_box.classList.toggle('hidden');
});

document.getElementById('set1').addEventListener('click', function(){
    let p = document.getElementsByClassName('name1')[0];
    let inp_box = document.getElementsByClassName('p1-inputs')[0];
    let inp = document.getElementsByClassName('p1-name')[0].value;
    if(inp != "")
    {
        p.innerText = inp;

        // Changing player name in score
        let p_name = p.textContent;
        let p1 = document.getElementsByClassName('p1-score')[0];
        p1.innerText = p_name + ":  " + score1;
    }
    inp_box.classList.toggle('hidden');
});


// Editing Name for Player 2
document.getElementById('change2').addEventListener('click', function(){
    let inp_box = document.getElementsByClassName('p2-inputs')[0];
    inp_box.classList.toggle('hidden');
});

document.getElementById('set2').addEventListener('click', function(){
    let p = document.getElementsByClassName('name2')[0];
    let inp_box = document.getElementsByClassName('p2-inputs')[0];
    let inp = document.getElementsByClassName('p2-name')[0].value;
    if(inp != "")
    {
        p.innerText = inp;

        // Changing player name in score
        let p_name = p.textContent;
        let p2 = document.getElementsByClassName('p2-score')[0];
        p2.innerText = p_name + ":  " + score2;
    }
    inp_box.classList.toggle('hidden');
});


// Feature of Reset button
document.getElementsByClassName('reset')[0].addEventListener('click', function() {
    let p1 = document.getElementsByClassName('name1')[0];
    let p2 = document.getElementsByClassName('name2')[0];
    p1.innerText = "Player 1";
    p2.innerText = "Player 2";
    
    score1 = 0;
    score2 = 0;
    let p1_score = document.getElementsByClassName('p1-score')[0];
    let p2_score = document.getElementsByClassName('p2-score')[0];
    p1_score.innerText = "Player 1:  "+score1;
    p2_score.innerText = "Player 2:  "+score1;
    h1_text = document.querySelector("h1").innerText = "";
})
