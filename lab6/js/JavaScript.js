
function sum(arr){
	var sum=0;
	for(let i=0; i<arr.length; i++){
			sum+=arr[i]
	}
	return sum;
}
function minel(arr){
	var min=0;
	min=Math.min(arr);
	
	return min;
}



function SecondLargest(arr) {
	if (arr.length < 2) {
		return "Array should have at least two elements";
	}

	let largest = Math.max(arr[0], arr[1]);
	let secondLargest = Math.min(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		if (arr[i] > largest) {
			secondLargest = largest;
			largest = arr[i];
		}else if (arr[i] > secondLargest && arr[i] !== largest) {
			secondLargest = arr[i];
		}
	}

	if (secondLargest === largest) {
		return "There is no second largest element";
	}

	return secondLargest;
}


