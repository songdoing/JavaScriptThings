let strEl = document.getElementById("str").innerHTML;
let mixStrEl = document.getElementById('mixStr');
let game = {};
game.word = strEl.split('');
console.log(game.word);
game.btns = [];

game.choiceText = function(){
    for(var i =0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};

for (var i = 0; i < strEl.length; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = strEl[i];
    mixStrEl.appendChild(btn);
    game.btns.push(btn);
    console.log(game.btns);
}

flip = (event) => {
    console.log("flip");
};

pushR = (event) => {
    console.log("pushRight");
    let s = game.word.pop();
    game.word.unshift(s);        

    game.choiceText();
};

pushL = (event) => {
    console.log("pushLeft");
    let s = game.word.shift();
    game.word.push(s);        

    game.choiceText();
};