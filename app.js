function number(num) {
    var valueee = document.getElementById('txt');
    valueee.value += num
}

function calc() {
    var valueee = document.getElementById('txt');
    valueee.value = eval(valueee.value);

}

function clearr() {
    var valueee = document.getElementById('txt');
    valueee.value = '';
}