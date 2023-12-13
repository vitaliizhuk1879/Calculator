( function() { 
    let screenText = document.getElementById("screen__text");

    let btnX = document.getElementById("btn__x");
    let btnPersent = document.getElementById("btn__%");
    let btnRoot = document.getElementById("btn__root");
    let btnPow = document.getElementById("btn__pow");
    let btnP = document.getElementById("btn__p");
    let btnLBracket = document.getElementById("btn__lbracket");
    let btn7 = document.getElementById("btn__7");
    let btn4 = document.getElementById("btn__4");
    let btn1 = document.getElementById("btn__1");
    let btn0 = document.getElementById("btn__0");
    let btnRBracket = document.getElementById("btn__rbracket");
    let btn8 = document.getElementById("btn__8");
    let btn5 = document.getElementById("btn__5");
    let btn2 = document.getElementById("btn__2");
    let btnPoint = document.getElementById("btn__point");
    let btnDelete = document.getElementById("btn__delete");
    let btn9 = document.getElementById("btn__9");
    let btn6 = document.getElementById("btn__6");
    let btn3 = document.getElementById("btn__3");
    // let btnEqual = document.getElementById("btn__equal");
    let btnCE = document.getElementById("btn__ce");
    let btnDivide = document.getElementById("btn__divide");
    let btnMultiply = document.getElementById("btn__multiply");
    let btnSubtruction = document.getElementById("btn__subtruction");
    let btnAdd = document.getElementById("btn__add");

    btnX.onclick = function () {
        screenText.value += "!";
    }

    btnPersent.onclick = function () {
        screenText.value += "%";
    }

    btnRoot.onclick = function () {
        screenText.value += "√";
    }

    btnPow.onclick = function () {
        screenText.value += "^";
    }

    btnP.onclick = function () {
        screenText.value += "P";
    }

    btnLBracket.onclick = function () {
        screenText.value += "(";
    }

    btn7.onclick = function () {
        screenText.value += "7";
    }

    btn4.onclick = function () {
        screenText.value += "4";
    }

    btn1.onclick = function () {
        screenText.value += "1";
    }

    btn0.onclick = function () {
        screenText.value += "0";
    }

    btnRBracket.onclick = function () {
        screenText.value += ")";
    }

    btn8.onclick = function () {
        screenText.value += "8";
    }

    btn5.onclick = function () {
        screenText.value += "5";
    }

    btn2.onclick = function () {
        screenText.value += "2";
    }

    btnPoint.onclick = function () {
        screenText.value += ".";
    }

    btnDelete.onclick = function () {

        if (screenText.value === 'Error' || screenText.value === 'NaN') {
            screenText.value = '';
        }

        let arr = screenText.value.split('');
        arr.pop();
        let result = arr.join('');
        screenText.value = result;
    }

    btn9.onclick = function () {
        screenText.value += "9";
    }

    btn6.onclick = function () {
        screenText.value += "6";
    }

    btn3.onclick = function () {
        screenText.value += "3";
    }

    btnCE.onclick = function () {
        screenText.value = "";
    }

    btnDivide.onclick = function () {
        screenText.value += "÷";
    }

    btnMultiply.onclick = function () {
        screenText.value += "×";
    }

    btnSubtruction.onclick = function () {
        screenText.value += "-";
    }

    btnAdd.onclick = function () {
        screenText.value += "+";
    }
})();







