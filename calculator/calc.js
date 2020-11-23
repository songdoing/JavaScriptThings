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
    if(op === '+' || op === '-' || op === '×' || op === '÷') {
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
                case "-" :
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

    switch (str) {
        case 'C' :
            input.inputArr.pop();
        break;
        case '+' :       
        case '-' :         
        case '×' :            
        case '÷' :
            input.inputArr.push(' ' + str + ' ');
        break;
        default :
        input.inputArr.push(str);
    }
    if (input.empty()) {
        output.text.innerHTML = "0"
    } else {
        output.display();
        
    }    
    console.log(str);   
};

var showResult = function(event) {
    input.prepareCalculate();

    var result = input.getValue();
            
    while(!input.empty()) {
        var op = input.getOperator();        
        var second = input.getValue();               
        var result = calculator.calculate(result, second, op);                
    }
    output.print(result);
    input.removeAll(result);
};