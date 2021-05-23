


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
        let name = "Player 1";
        name = document.getElementsByClassName('name1')[0].textContent;
        document.querySelector("h1").innerHTML = name + " Wins!";
    }
    else if(randomNumber1 < randomNumber2)
    {
        let name = "Player 2";
        name = document.getElementsByClassName('name2')[0].textContent;
        document.querySelector("h1").innerHTML = name + " Wins!";
    }
    else
        document.querySelector("h1").innerHTML = "DRAW!!"

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
        p.innerText = inp;
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
        p.innerText = inp;
    inp_box.classList.toggle('hidden');
});