//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
console.log(str.replace(regexp, "$"));
let arr = [
	'The Virupaksha Temple', 
	'a Victoria Memorial',
	'an Tajmahal'
];
let articleLessArray = [];
for (let i = 0; i < arr.lenghth ; i++) {
	let articleLessItem = arr[i].replace(regexp , "").trim();
	articleLessArray.push(articleLessItem)
}
articleLessArray.sort();
console.log(articleLessArray);
