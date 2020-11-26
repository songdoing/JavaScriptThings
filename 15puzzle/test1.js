let strEl = document.getElementById("str");
let mixStrEl = document.getElementById('mixStr');
let game = {};

game.words = ['apple', 'javascript', 'react', 'jobsearch', 'linkerdin', 'indeed', 'corona', 'blue', 'jenny', 'daniel', 'mason', 'korea'];
game.word = [];
game.btns = [];
game.addButtons = function() {
    for (var i = 0; i < this.word.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        mixStrEl.appendChild(btn);
        this.btns.push(btn);
    }
};

game.choiceText = function(){
    for(var i =0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};
game.randomWord = function(){
    let idx = Math.floor(Math.random() * this.words.length);
    let s =game.words[idx];
    strEl.innerHTML =s;
    this.word = s.split('');
    console.log(this.word);
    //this.choiceText();
};
game.randomWord();
game.addButtons();
game.choiceText();

flip = (event) => {
    let temp = [];
    console.log("flip");
    for(var i = 0; i < game.word.length; i++) {
        var s = game.word[i].slice(0,1);
        console.log(s);
        temp.unshift(s);
    }
    game.word = temp;
    console.log(temp);
    game.choiceText();
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

//shuffle 50%
let toggle = Math.floor(Math.random() * 2);
if(toggle) {
    flip();
}

let n = Math.floor(Math.random() * game.btns.length);
for(var i =0; i < n; i++) {
    pushR();
}