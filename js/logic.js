let screenText = document.getElementById("screen__text");
let btnEqual = document.getElementById("btn__equal");

function uniteDigits (arr) {

    let numArr = [];
    let arr2 = [];
    let str;

    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(Number(arr[i])) || arr[i] === '.') {
            numArr.push(arr[i]);

            if(arr[i + 1] !== '.' && isNaN(Number(arr[i + 1]))) {
                str = numArr.join("");
                arr2.push(str);
                numArr = [];
                str = "";
            }
            
        } else {
            arr2.push(arr[i]);
        }
    }

    for (let k = 0; k < arr2.length; k++) {

        if (arr2[k] === '-' && arr2[k - 1] === '(' && !isNaN(Number(arr2[k + 1]))) {
            arr2.splice(k - 1, 4, ('-' + arr2[k + 1]))
        } else if (arr2[k] === '-' && k === 0 && !isNaN(Number(arr2[k + 1]))) {
            arr2.splice(k, 2, ('-' + arr2[k + 1]))
        }

    }


    return arr2;
}


function findBrackets (arr, start = -1, end = arr.length) {

    for (let i = start + 1; i < end; i++) {
        if (arr[i] === '(') {
            start = i;
            break;
        } else {
            start++;
        }
    }

    let startEnd = [];
    startEnd.push(start);
    let account = 0;

    if (arr[start] === '(') {

        for (let k = start + 1; k < end; k++) {
      
            if (arr[k] === '(') {
                account = account + 1;
            } else if (arr[k] === ')' && account !== 0) {
                account--;
            } else if (arr[k] === ')' && account === 0) {
                startEnd.push(k);
                return startEnd;
            }
        }

    }

    return 'Error';
}  


function lowestLevel (arr, start = -1, end = arr.length) {

    let check = findBrackets(arr, start, end);

    if (check === 'Error') {
        return 'Error';
    }

    let a = 0;
    let b;
    let lowestNums = [];
    while (a === 0) {
        b = findBrackets(arr, start, end);

        if (b === 'Error') {
            break;
        }

        start = b[0];
        end = b[1];
    }

    lowestNums.push(start);
    lowestNums.push(end);

    return lowestNums;
}


function multiplyDivide (operand, operator, operand2) {
    
    let result;

    if (operator === "*") {
        result = Number(operand) * Number(operand2);
    } else if (operator === "/") {
        result = Number(operand) / Number(operand2);
    }

    return result;
}


function addSubtract (operand, operator, operand2) {
    
    let result;

    if (operator === "+") {
        result = Number(operand) + Number(operand2);
    } else if (operator === "-") {
        result = Number(operand) - Number(operand2);
    }

    return result;
}


function operationPriority (arr) {

    let b;
    let a = lowestLevel (arr);

    if (a === 'Error') {
        return 'Error';
    }
    
    let arr1 = arr.slice(a[0] + 1, a[1]);
    let lenArr1 = arr1.length;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === '*' || arr1[i] === "/") {
            b = multiplyDivide(arr1[i-1], arr1[i], arr1[i+1]);
            arr1.splice(i - 1, 3, b);
            i = i - 1;
        }
    }   

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === '+' || arr1[i] === "-") {
            b = addSubtract(arr1[i-1], arr1[i], arr1[i+1]);
            arr1.splice(i - 1, 3, b);
            i = i - 1;
        }
    }

    arr.splice(a[0], lenArr1 + 2, arr1[0]);

    return arr;
}


function getResult (arr) {

    let inc = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            inc++;
        }
    }

    if (inc > 0) {

        let c = operationPriority(arr);
        let res = c;
        let result;
        let a = 0;

        if (c === 'Error') {
            return 'Error'
        } else {

            while (a === 0) {

                if (res === 'Error') {
                    break;
                }
                
                result = res;
                res = operationPriority(arr);
                arr = res;
            }

        }

        if (result.length === 1) {

            return result;

        } else {

            for (let i = 0; i < result.length; i++) {
                if (result[i] === '*' || result[i] === "/") {
                    b = multiplyDivide(result[i-1], result[i], result[i+1]);
                    result.splice(i - 1, 3, b);
                    i = i - 1;
                }
            }   
        
            for (let i = 0; i < result.length; i++) {
                if (result[i] === '+' || result[i] === "-") {
                    b = addSubtract(result[i-1], result[i], result[i+1]);
                    result.splice(i - 1, 3, b);
                    i = i - 1;
                }
            }

            return result;
        }

    } else {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '*' || arr[i] === "/") {
                b = multiplyDivide(arr[i-1], arr[i], arr[i+1]);
                arr.splice(i - 1, 3, b);
                i = i - 1;
            }
        }   
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '+' || arr[i] === "-") {
                b = addSubtract(arr[i-1], arr[i], arr[i+1]);
                arr.splice(i - 1, 3, b);
                i = i - 1;
            }
        }

        return arr;
    }
}


function removeGap (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr.splice(i, 1);
        }
    }

    return arr;
}


function changeSign (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '÷') {
            arr[i] = '/';
        } else if (arr[i] === '×') {
            arr[i] = '*';
        }
    }

    return arr;
}


function checkArray (arr) {

    let s;

    for (let i = 0; i < arr.length; i++) {

        s = arr[i].charCodeAt(0);
        if (s === 32 || s === 33 || s === 37 || (s > 39 && s < 44) || (s > 44 && s < 58) || s === 80 || s === 94 || s === 8730) {
            continue;
        } else {
            return 'Error';
        }

    }
}


function getFactorial (arr) {

    let fac = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '!' && !isNaN(Number(arr[i - 1]))) {

            if (Number(arr[i - 1]) < 0) {
                return 'Error';
            } else if (Number(arr[i - 1]) === 0) {
                return [1];
            } else {
                for (let k = 1; k <= Number(arr[i - 1]); k++) {
                    fac *= k;
                }

                arr.splice(i - 1, 2, fac);
            }

        } 
    }

    return arr;

}


function getPersent (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '%' && !isNaN(Number(arr[i - 1]))) {

            arr.splice(i - 1, 2, (Number(arr[i - 1]) / 100));

        } 
    }

    return arr;
}


function getRoot (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '√' && !isNaN(Number(arr[i + 1]))) {

            arr.splice(i, 2, Math.sqrt(Number(arr[i + 1])));

        } 
    }

    return arr;
}


function getSquare (arr) {

    for (let i = 0; i < arr.length; i++) { 

        if (arr[i] === '^' && !isNaN(Number(arr[i - 1])) && !isNaN(Number(arr[i + 1]))) {
            arr.splice(i - 1, 3, Math.pow(arr[i - 1], arr[i + 1]));
        }
    }

    return arr;
}

function getPI (arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'P' && !isNaN(Number(arr[i - 1]))) {

            arr.splice(i - 1, 2, (Number(arr[i - 1]) * Math.PI));

        } 
    }

    return arr;
}


function getValue () {

    let value = screenText.value;
    let arr = value.split("");
    arr = changeSign(arr);
    let check = checkArray(arr);
    arr = uniteDigits(arr);
    arr = removeGap(arr);
    
    arr = getFactorial(arr);
    arr = getPersent(arr);
    arr = getRoot(arr);
    arr = getSquare(arr);
    arr = getPI(arr);

    let result = getResult(arr);

    if (check === 'Error') {
        screenText.value = 'Error';
    } else {
        if (result === 'Error' || result.length > 1) {
            screenText.value = 'Error';
        } else {
            screenText.value = result[0];
        }
    }

}

btnEqual.addEventListener("click", getValue);


