var input = {'inputArr' : []};

input.getInput = function() {
    return this.inputArr.join("");
};

var output = {};
output.text = document.getElementById('output');

var clickButtons = function(event) {
    var str = event.target.innerHTML;

    switch (str) {
        case 'C' :
            input.inputArr.pop();
        break;
        case '+' :
            input.inputArr.push(' ' + str + ' ');
        break;
        case '-' :
            input.inputArr.push(' ' + str + ' ');
        break;
        case '×' :
            input.inputArr.push(' ' + str + ' ');
        break;
        case '÷' :
            input.inputArr.push(' ' + str + ' ');
        break;
        default :
        input.inputArr.push(str);
    }
    if (input.inputArr.length === 0) {
        output.text.innerHTML = "Empty"
    } else {
        output.text.innerHTML = input.getInput();
    }    
    console.log(str);   
}

var showResult = function(event) {
    var ret = event.target.innerHTML;
    console.log(ret);
}