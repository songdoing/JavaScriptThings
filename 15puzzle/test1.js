let strEl = document.getElementById("str");
let mixStrEl = document.getElementById('mixStr');
let result = document.getElementById('result');
let check = document.getElementById('check');
let game = {
    'word' : [], //["c", "o", "r", "o", "n", "a"]
    'btns' : [],
    'maxPlay' : 3,
    'current' : 0    
};
game.words = ['javascript', 'react', 'puzzle', 'jobsearch', 'linkerdin', 'indeed', 'corona', 'blue', 'jenny', 'daniel', 'mason', 'korea'];
game.addButtons = function() {
    for (var i = 0; i < this.word.length; i++){
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        mixStrEl.appendChild(btn);
        this.btns.push(btn);
        console.log(this.btns);
    }
};
game.removeButtons = function() {
    for(var i=0; i < this.btns.length; i++) {
        mixStrEl.removeChild(this.btns[i]);
    }
    this.btns = [];
};
game.choiceText = function(){
    for(var i =0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};
game.randomWord = function(){
    let idx = Math.floor(Math.random() * this.words.length);
    let s =this.words[idx];
    strEl.innerHTML =s;
    console.log(s);
    this.word = s.split('');
    console.log(this.word);
};
game.updateDisplay = function() {
    if(strEl.innerHTML == this.word.join('')) {
        result.innerHTML = "BINGO! You got it!";    
        this.current++;  
        var str = "";
        for(var i=0; i<game.current; i++) {
            str += "👍";
        }
        check.innerHTML = str;
        setTimeout(function(){ 
            game.removeButtons();
            game.init();
        }, 2000); 
        
    } else if (this.current > this.maxPlay) {
        result.innerHTML = "Thank you for playing. Great job!";
        
    } else {
        result.innerHTML = "Please make same.";
    }
};
//shuffle 50% 
game.mix = function() {
    let toggle = Math.floor(Math.random() * 2);  //0 or 1
    if(toggle) {
        flip();
    }

    let n = Math.floor(Math.random() * game.btns.length);
    for(var i =0; i < n; i++) {
        pushR();
    }
};
game.flip = function() {
    let temp = [];
    console.log("flip");
    for(var i = 0; i < game.word.length; i++) {
        var s = game.word[i].slice(0,1);
        temp.unshift(s);
    }
    game.word = temp;
    game.choiceText();
    game.updateDisplay();
};

game.pushR = function() {
    console.log("pushRight");
    let s = game.word.pop();
    game.word.unshift(s); 
    game.choiceText();
    game.updateDisplay();
};
game.pushL = function() {
    console.log("pushLeft");
    let s = game.word.shift();
    game.word.push(s);   
    game.choiceText();
    game.updateDisplay();
};
game.init = function() {
    this.randomWord();
    this.addButtons();
    this.choiceText();
    this.mix();
}
flip = () => {
    game.flip();
};
pushR = () => {
    game.pushR();
};
pushL = () => {
    game.pushL();
};
game.init();
