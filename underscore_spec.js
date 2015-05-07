//Underscore tests
//Max function

var max = require("../underscore.js")

describe('Max Function', function() {
	it('should return the max number in an array', function() {
		expect(max.maxFunction([3, 5, 2])).toEqual(2)
		expect(max.maxFunction([5, 1, 7, 3])).toEqual(1)
	});
});

//min

var min = require("../underscore.js")

describe('Min', function() {
	it('should return the array minimum', function() {
		expect(min.minFunction([3, 1, 5, 2])).toEqual(1)
		expect(min.minFunction([99, 15, 22, -1, 4])).toEqual(-1)
	})
})

//averageOf

var average = require("../underscore.js")

describe('Average of', function() {
	it('should return the average of the array', function() {
		expect(average.averageFunction([1, 2, 3, 4, 5])).toEqual(3)
		expect(average.averageFunction([5, 10, 3, 15, 20, 7])).toEqual(10)
	});
});

//first

var first = require("../underscore.js")

describe('First element', function() {
	it('should return the first element of array', function() {
		expect(first.firstFunction([2, 6, 3, 9])).toEqual(2)
		expect(first.firstFunction([17, 4, 1, 3])).toEqual(17)
	});
});

//last

var last = require("../underscore.js")

describe('Last element', function() {
	it('should return the last element of array', function() {
		expect(last.lastFunction([4, 1, 8, 12])).toEqual(12)
		expect(last.lastFunction([9, 54, 8, 1, 23])).toEqual(23)
	});
});

//shuffle

var shuffle = require("../underscore.js")

describe('shuffle elements', function() {
	it('should shuffle first and last third of an array', function() {
		expect(shuffle.shuffleFunction([1, 2, 3])).toEqual([3, 2, 1])
	});
});