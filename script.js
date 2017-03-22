var submit = document.getElementById('submit');

submit.addEventListener("click", function(){
	var start = parseInt(document.getElementById('start').value);
	var finish = parseInt(document.getElementById('finish').value);
	var step = parseInt(document.getElementById('step').value);
	var results = document.getElementById('results');

	results.innerHTML = '<div>Here are the even numbers between ' + start + ' and ' + finish + ' divided by ' + step + ':</div>'

	for (start; start < finish; start = start + step){
		if (start % 2 === 0){
			results.innerHTML =+ '<div>' + start + '</div>'
		}
	};
});

