 
function getArrLength(...params){ //params is the rest parameter. We are not sure of how long the array will be 
	console.log('Length of passed array = '+params[0].length); //params[0] is the array we are passing
}
var myArray = [100,1,2,99,3,4,98,5,6]; //defining an arry
getArrLength(myArray);//invoking function to get array length
multiplyByTwo(myArray);
sortRestArgs(myArray);

function multiplyByTwo(...params){
	console.log('Outputing array elements multiplied by 2');
	var arr= params[0].map(function(x) { return x * 2; });
	arr.forEach(function(entry) {
    console.log(entry);//displaying all array elements after multiply by 2
});
}

	function sortRestArgs(...params){
		params[0].sort(function(a, b){return a-b});//function for numerically sorting in ascending order
		console.log("after sort...");
		params[0].forEach(function(entry) {
       console.log(entry);//displayiong all array elemnts afetr sort
	});
}


