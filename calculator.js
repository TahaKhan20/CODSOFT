    let Ans = 0.0;
    document.querySelector('.display').innerHTML = '';
    let deg = 0;
    let inverse = 0;

    // converting between degree mode and radian mode
    function degre(){
        if(deg === 0)
        {
            deg = 1;
            document.querySelector('#deg').innerHTML = 'Rad';
            
        }
        else if(deg === 1)
        {
            deg = 0;
            document.querySelector('#deg').innerHTML = 'Deg';
        }
    }
    // converting to inverse and back to normal mode for trignometric functions
    function inv(){
        if(inverse === 0)
        {
            inverse = 1;
            document.querySelector('#sin').innerHTML = 'sin-1(';
            document.querySelector('#cos').innerHTML = 'cos-1(';
            document.querySelector('#tan').innerHTML = 'tan-1(';
            
        }
        else if(inverse === 1)
        {
            inverse = 0;
            document.querySelector('#sin').innerHTML = 'sin(';
            document.querySelector('#cos').innerHTML = 'cos(';
            document.querySelector('#tan').innerHTML = 'tan(';
            }
    }
    // Calcualting Factorial of a number
    function fact(num)
    {
        let sum = 1;
        while(num > 0)
        {
            sum *= num;
            num--;
        }
        return sum;
    }
    let bracket = 0;
    // Function to display the digit pressed
    function disp(){
        let n = event.target.innerHTML;
        if(n === "()")
        {
            if(bracket === 0)
            {
                
            bracket = 1;
            n = "(";
            }
            else{
                bracket = 0;
                n = ")";
            }
        }
        document.querySelector('.display').innerHTML += n;        
        
    }
    // Function to calculate result when = is pressed
    function Cal() {
        let n = document.querySelector('.display').innerHTML;
        let result = Math.round(parseFloat(Calculate(n))*100000000)/100000000;
        if(result === "NaN")
        {
            result = "undefined";
        }
        document.querySelector('.display').innerHTML = result;
        Ans = result;
    }
// Function to calculate
    
function Calculate(expression) {

// using previeous Answer
if (expression.includes('Ans')) {
        expression = expression.replace(/Ans/g, Ans);
    }
    
    
// Remove any whitespace from the expression
    expression = expression.replace(/\s/g, '');
    
// e^()    
if(expression.includes('e^('))
    {
    expression = expression.replace(/e\^\((\d+\.?\d*)/g, function (match, num) {
        return Math.exp(parseFloat(num));
    });
}

// sin()
    if (expression.includes('sin(')) {
        expression = expression.replace(/sin\((\d+\.?\d*)/g, function (match, num1) {
        let r = 0.0;
            if(deg === 1)
            {
                
                if(num1>=22)
                {
                    return "ERROR";
                }
                r = num1;
            }
            else{
                r = num1 * (Math.PI/ 180);
            }
            return Math.sin(r);
        });
    }

    // cos()
    if (expression.includes('cos(')) {
        expression = expression.replace(/cos\((\d+\.?\d*)/g, function (match, num1) {
        let r = 0.0;
            if(deg === 1)
            {
                if(num1>=77)
                {
                    return "ERROR";
                }
                r = num1;
            }
            else{
                r = num1 * (Math.PI/ 180);
            }
            return Math.cos(r);
        });
    }

    // Tan()
    if (expression.includes('tan(')) {
        expression = expression.replace(/tan\((\d+\.?\d*)/g, function (match, num1) {
        let r = 0.0;
            if(deg === 1)
            {
                r = num1;
            }
            else{
                r = num1 * (Math.PI/ 180);
            }
            if(Math.tan(r) < 0)
            {
                return "Error";
            }
            return Math.tan(r);
        });
    }
    
    // Sin inverse
    if (expression.includes('sin-1(')) {
        expression = expression.replace(/sin-1\((\d+\.?\d*)/g, function (match, num1) {
        let r = 0.0;
        if(num1 >= -1 && num1 <= 1){
            if(deg === 1)
            {
                r = Math.asin(num1);
                console.log(r);
            }
            else{
                r = Math.asin(num1) * 180/Math.PI;
                
            }
        }
        else{
            return "Error";
        }
            return r;
        });
    }

    // Cos inverse
    if (expression.includes('cos-1(')) {
        expression = expression.replace(/cos-1\((\d+\.?\d*)/g, function (match, num1) {
        if(num1 >= -1 && num1 <= 1){
            if(deg === 1)
            {
                r = Math.acos(num1);
            }
            else{
                r = Math.acos(num1) * 180/Math.PI;
                
            }
        }
        else{
            return "Error";
        }
            return r;
        });
    }

    // tan inverse
    if (expression.includes('tan-1(')) {
        expression = expression.replace(/tan-1\((\d+\.?\d*)/g, function (match, num1) {
        let r = 0.0;
        if(deg === 1)
            {
                r = Math.atan(num1);

            }
            else{
                r = Math.atan(num1) * 180/Math.PI;
                
            }
            return r;
        });
    }

    // logarithm
    if (expression.includes('log(')) {
        expression = expression.replace(/log\((\d+\.?\d*)/g, function (match, num1) {
        
            return Math.log10(num1);
        });
    }
    
    // Percentage of a number e.g 9% = 0.09
    if (expression.includes('%')) {
        expression = expression.replace(/(\d+\.?\d*)(%)/g, function (match, num1) {
            return parseFloat(num1) / 100;
        });
    }

    // Factorial of a number x! 
    if (expression.includes('!')) {
        expression = expression.replace(/(\d+\.?\d*)(!)/g, function (match, num1) {
            // Factorial Function
            return parseFloat(fact(parseInt(num1)));
        });
    }

    // 𝝿
    if (expression.includes('𝝿')) {
        let g = 0;
        // Number with 𝝿 e.g 2𝝿
        expression = expression.replace(/(\d+\.?\d*)(𝝿)/g, function (match, num1) {
            g = 1;
            return parseFloat(num1) * Math.PI;
        });
        // single 𝝿
        if(g === 0){
            expression = expression.replace(/𝝿/g, Math.PI);
        }
        
    }
    
    // Square Root
    if(expression.includes('√'))
    {
    expression = expression.replace(/√(\d+\.?\d*)/g, function (match, num) {
        return Math.sqrt(parseFloat(num));
    });
}
    // Evaluate brackets
    while (expression.includes('(')) {
        expression = expression.replace(/\(([^\(\)]+)\)/g, function (match, subExpression) {
        return evaluateExpression(subExpression);
        });
    }

    // Evaluate exponentiation
    expression = expression.replace(/(\d+\.?\d*)\^(\d+\.?\d*)/g, function (match, num1, num2) {
        return Math.pow(parseFloat(num1), parseFloat(num2));
    });
    
    // Evaluate multiplication and division
    while (expression.includes('x') || expression.includes('/')) {
        expression = expression.replace(/(\d+\.?\d*)([x/])(\d+\.?\d*)/g, function (match, num1, operator, num2) {
        if (operator === 'x') {
            return parseFloat(num1) * parseFloat(num2);
        } else if (operator === '/') {
            return parseFloat(num1) / parseFloat(num2);
        }
        });
    }

    // Evaluate addition and subtraction
    while (expression.includes('+') || expression.includes('-')) {
        expression = expression.replace(/(\d+\.?\d*)([+\-])(\d+\.?\d*)/g, function (match, num1, operator, num2) {
        if (operator === '+') {
            return parseFloat(num1) + parseFloat(num2);
        } else if (operator === '-') {
            return parseFloat(num1) - parseFloat(num2);
        }
        });
    }


    return parseFloat(expression);
    }

    // AC button to clear display
    function ac(){
        document.querySelector('.display').innerHTML = '';
    }
    // Ans button to use previous answer
    function ans()
    {
        document.querySelector('.display').innerHTML += "Ans";
    }
    // C button to clear last digit
    function c(){
        let q = document.querySelector('.display').innerHTML;
        q = q.substring(0,q.length-1);
        document.querySelector('.display').innerHTML = q;
    }
    // used in bracket function
    function evaluateExpression(expression) {
        return Calculate(expression);
    }
    