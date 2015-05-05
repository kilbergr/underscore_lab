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

	var minFunction = function(myArr) {
		var minNum = 0;
		for (var i = 0; i < myArr.length; i++) {
			if (myArray[i] < minNum) {
				minNum = myArray[i];
				} 
				return minNum;
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


var altShuffle = function(myArr) {
	for(var i = 0; i < 2; i++) {
		var rand1 = Math.floor(Math.random() * myArr.length); 
		var rand2 = Math.floor(Math.random() * myArr.length); 
		var temp = myArr[rand1];
		myArr[rand2] = myArr[rand1];
		myArr[rand1] = temp;
	}
	console.log(myArr);
};


var sampleFunction = function(myArr, n) {
        var rand;
        if (n) {
        	var result = [];
        	for ( var i = 0; i < n; i++) {
       		 rand = Math.floor(Math.random() * myArr.length); 	
       		 result.push(myArr[rand]);
        	}
          console.log(result);

        }
        else {
        var num = Math.floor(Math.random() * myArr.length); 
       console.log(myArr[rand]);
  	  }
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

	var indexFunction = function(inputArr, inputVal) {
		for (i = 0; i < inputArr.length; i++) {
			if (inputArr[i] === inputVal) {
				return i;
			}
		}
		return -1;
	};


	var pluckFunction = function(myArr, prop) {
		pluckArr = [];
		for (i = 0; i < myArr.length; i++){
			pluckArr.push(myArr[i][prop]);
		}
		return pluckArr;
	};

//Part II
	var eachFunction = function(myArr, func) {
		for (i = 0; i < myArr.length; i++) {
			func(myArr[i]);
		}
	};

	var compactFunction = function(myArr) {
		for (i = 0; i < myArr.length; i++) {
			if (myArr[i] === undefined) {
				var compactArr = myArr.splice(i, 1);
			}
		}
       	return myArr;
	};

	var mapFunction = function(myArr, func) {
		var newArray = [];
		for (i = 0; i < myArr.length; i++) {
			func(myArr[i]);
			newArray.push(myArr[i])
			}
		};



		var filterFunction = function(myArr, func) {
			var truthArray = [];
			for (i = 0; i < myArr.length; i++) {
			func(myArr[i]);{
				if (func(myArr[i]) === true) {
					truthArray.push(myArr[i]);
				}
					return truthArray;
			}

		}
	};

		return {
			max : maxFunction,
			min: minFunction,
			last : lastFunction,
			first: firstFunction,
			contains: containsFunction,
			average : averageFunction,
			shuffle: shuffleFunction,
			sample: sampleFunction,
			difference: differenceFunction,
			indexOf: indexFunction,
			pluck: pluckFunction,
			each: eachFunction,
			compact: compactFunction,
			map: mapFunction,
			filter: filterFunction
	}
	
})();