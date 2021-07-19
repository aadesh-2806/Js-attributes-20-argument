//////////////////////////////////////////////////spread//////////////////////////////////////////////////
Math.max(1,2,3,4,5,6,7,8,9,10,11,12,13)
//13
Math.min(1,2,3,4,5,6,7,8,9,10,11,12,13)
//1
nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]
Math.max(nums)
//Nan
//here we use seperate method to expand array and seperate
Math.max(...nums)
//13


/**
console.log(nums)
VM913:1 (13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
undefined
console.log(...nums)
VM933:1 1 2 3 4 5 6 7 8 9 10 11 12 13
undefined
 */

//with array

//combine can be done too
cats=[1,2,3];
dogs=[4,5];
allpets = [...cats]
//makes copy
allpets = [...cats,...dogs]
//join both

//with  objects

movies={
	title:'abraham',
	score: 99,
};
res={
	class:'sd',
	score:4332
}
total={...movies, sf: 9755 };
total={...res, sfdsf: 9734555 };
total={...movies, ...res };
//here only one score and that too last on like in  this res
//{...[2,4,5,6,7]}
//{0: 2, 1: 4, 2: 5, 3: 6, 4: 7}
//why

/////////////////////////////////////////////////////////////////////arguments///////////////////////////////////////////
function sum(){
	console.log(arguments)
}
//prints arguments passed in its own class
//sum()
//VM1128:2 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

//sum(13,8,3218468)
//VM1128:2 Arguments(3) [13, 8, 3218468, callee: ƒ, Symbol(Symbol.iterator): ƒ]
function sum(){
	return arguments.reduce((total,el) => total+el)
}

sum(3,4,5,6,7,8,9)
//error-->Uncaught TypeError: arguments.reduce is not a function

//so what next

nums = [1,2,3,4,5,6,7,8,9,10,11,12,13]
function sum(...nums){
	return nums.reduce((total,el) => total+el)
}
/*
sum(3,4,5,7)
19
sum(nums)
(13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//take rest values but argument do not
//does not work in arrows=>
*/