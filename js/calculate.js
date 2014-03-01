window.onload = function(){
    var girth = el('girth'),
		length = el('length'),
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
        result = el('result'),
        form = el('calculate'),
        back = el('back'),
        button = el('submit');

    function el(id) {
        return document.getElementById(id);
    };

    function calculate() {
        var x = parseFloat(girth.value),
            y = parseFloat(length.value);

        weight.innerHTML = x * y;
        profit.innerHTML = x + y;
        
        result.style.display = "block";
		form.style.display = "none";
        return false;
        
  	};
  	
  	function goBack() {
	  	result.style.display = "none";
		form.style.display = "block";
        return false;
  	}

    button.onclick = calculate;
    back.onclick = goBack;
};