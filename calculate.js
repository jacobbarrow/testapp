window.onload = function(){
    var girth = el('girth'),
        foodPrice = el('foodPrice'),
        foodAmount = el('foodAmount'),
        sellPrice = el('sellPrice'),
        butcherPrice = el('butcherPrice'),
        abPrice = el('abPrice'),
        otherPrice = el('otherPrice'),
        weight = el('weight'),
        turnover = el('turnover'),
        profit = el('profit'),
        expenditure = el('expenditure'),
        button = el('submit');

    function el(id) {
        return document.getElementById(id);
    };

    function weightF() {
        var x = parseFloat(girth.value),
            y = parseFloat(foodPrice.value);


        weight.innerHTML = x * y;
        return false;

    }

    button.onclick = weightF;
};