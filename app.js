var a = 0;
var b = 0;
var c = 0;
var d = 0;
var _intervalId01 = 0;
var _intervalId02 = 0;
var _intervalId03 = 0;
var _intervalId04 = 0;

function countupA(countId) {
    document.getElementById(countId).innerHTML = a;
    a++;
}
function countupB(countId) {
    document.getElementById(countId).innerHTML = b;
    b++;
}
function countupC(countId) {
    document.getElementById(countId).innerHTML = c;
    c++;
}
function countupD(countId) {
    document.getElementById(countId).innerHTML = d;
    d++;
}

_intervalId01 = setInterval(countupA, 1000, 'pp-count01');
_intervalId02 = setInterval(countupB, 300, 'pp-count02');
_intervalId03 = setInterval(countupC, 100, 'pp-count03');
_intervalId04 = setInterval(countupD, 1200, 'pp-count04');