// PUT YOUR CODE HERE!!!
//Underscore.js by Rebecca K
var _ = (function() {
	var maxFunction = function(myArr) {
		var maxNum = 0;
		for (var i = 0; i < myArr.length; i++) {
			if (myArray[i] > maxNum) {
				maxNum = myArray[i];
				} 
				return maxNum;
			}
		};

	var lastFunction = function(myArr) {
		return myArr[(myArr.length)-1];
	};

	var firstFunction = function(myArr) {
		return myArr[0];
	};

	var containsFunction = function(myArr, x) {
		for (i = 0; i< myArr.length; i++) {
			if (x === myArr[i]) {
				return true;
			}
			else {
				return false;
			}
		}
	};
	var averageFunction = function(myArr) {
		var addVal = 0;
		for (i = 0; i < myArr.length; i++) {
			addVal += myArr[i];
			}
			var makeAve = addVal/myArr.length;
			console.log(makeAve);
	};

var shuffleFunction = function(myArr) {
/*	I tried to use a random number, but wasn't able to get to work. 
Then I wasn't sure if we should use a random number anyway because Fisher-Yates does, but we were supposed to make an alternative. 
So I just did a simple one below (uncommented).
	var newArray = [];
		for (i = 0; i < myArr.length; i+=num) {
			var num = Math.floor((Math.random() * myArr.length) + 1); 
			newArray.push(myArr[i]); 
			myArr.pop(myArr[i]);
		}
		console.log(newArray);
	};

*/
    var i = 0;
	var j = myArr.length-1;
	while (i < (myArr.length/3)) {
 	 var temp = myArr[i];
 	 myArr[i] = myArr[j];
 	 myArr[j] = myArr;
 	 i++;
 	 j--;
}
	return myArr;
};

//Also know the below doesn't work. 
var sampleFunction = function(myArr, n) {
        n = typeof n !== 'undefined' ?  n : 1;
        var num = Math.floor((Math.random() * myArr.length) + 1); 
        //create a random number
        newArray = [];
        for (i = num; i < myArr.length; i++) {
        	newArray.push(myArr[num]);
        	//within a new empty array, for i = the random generated number until i = the number of elements you want in your new array, add the element at the random number index of the original array to the new array.
       		//I do understand that the reason this doesn't work is because it's phrased wrong. I want to take a random index from 0 to n, not from the random index to n.
        }
        console.log(newArray);
};

/*
I know this doesn't work. I have thought it out though and it seems like it should. I wonder if there isn't a syntax issue.
*/
var differenceFunction = function(myArr1, myArr2) {
	var diffArr = [];
	//Make a new blank array
	for (i = 0; i < myArr1.length; i++) {
		if (myArr1[i] !== myArr2) {
			diffArr.push(myArr1[i]);
		}
		//cycle through the original array for its entire length. It an element in the original array is not in the second array, add that element to the new array.
		else {
			return false;			
		}
		//otherwise return false but don't add anything to the new array.
	}
	return diffArr;
	//return the new array showing the elements that weren't in the second array

};

	var indexFunction = function(myArr, y) {
		for (i = 0; i < myArr.length; i++) {
			if (myArr[i] === y) {
				return i;
			}
			else {
				return "-1";
			}
		}
	};

	var pluckFunction = function(myArr, prop) {
		pluckArr = [];
		for (i = 0; i < myArr.length; i++){
			pluckArr.push(myArr[i][prop]);
		}
		return pluckArr;
	};


		return {
			max : maxFunction,
			last : lastFunction,
			first: firstFunction,
			contains: containsFunction,
			average : averageFunction,
			shuffle: shuffleFunction,
			sample: sampleFunction,
			difference: differenceFunction,
			indexOf: indexFunction,
			pluck: pluckFunction;
	}
	
})();