var input = {'inputArr' : []};

input.getInput = function() {
    return this.inputArr.join("");
};

input.removeAll = function(val) {
    this.inputArr = [];
    this.inputArr.push(val);
};

input.empty = function() {
    return this.inputArr.length === 0;
};

input.getValue = function() {
    var str = this.inputArr.shift();
    var n = Number(str);
    return n;
};

input.prepareCalculate = function() {
    this.inputArr = this.inputArr.join("").split(" ");
};

input.getOperator = function() {
    var op = this.inputArr.shift();
    
    if(op === '+' || op === '\u2212' || op === '×' || op === '÷') {
         return op;           
    }else {
        return "$";
    }  
    
};

var output = {};
output.text = document.getElementById('output');
output.print = function(str) {
    this.text.innerHTML=str;
};
output.display = function() {
    this.text.innerHTML = input.getInput();
};

var calculator = {};
        calculator.calculate = function(first, second, op){
            var result = 0;
            switch(op) {
                case "+" :
                result = first + second;
                break;
                case '\u2212' :
                result = first - second;
                break;
                case "×" :
                result = first * second;
                break;
                case "÷" :
                result = first / second;
                break;
                default : 
                return NaN;
            }
            return result;

        };
        
var clickButtons = function(event) {
    var str = event.target.innerHTML;
    console.log(str); 
    
    if (str === "C") {
        input.inputArr.pop();
    } else if (str === "+" || str === '\u2212' || str === "×" || str === "÷") {
        input.inputArr.push(" " + str + " ");
        console.log(input.inputArr);
    } else {
        input.inputArr.push(str);
    }
    
    if (input.empty()) {
        output.text.innerHTML = "0"
    } else {
        output.display();
        
    }    
    console.log(str);   
    console.log(input.inputArr);
};

var showResult = function(event) {
    input.prepareCalculate();
    console.log(input.inputArr);
    var result = input.getValue();
            
    while(!input.empty()) {
        var op = input.getOperator();     
        console.log(op);   
        var second = input.getValue();               
        var result = calculator.calculate(result, second, op);                
    }
    output.print(result);
    input.removeAll(result);
};