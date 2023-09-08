//your code here
let regexp = /\bthe\b|\ban\b|\ba\b/gi;
console.log(str.replace(regexp, "$"));
let arr = [
	'The Virupaksha Temple', 
	'a Victoria Memorial',
	'an Tajmahal'
];
let articleLessArray = [];

let mp = {};
for (let i = 0; i < arr.lenghth ; i++) {
	let articleLessItem = arr[i].replace(regexp , "").trim();
	articleLessArray.push(articleLessItem);
	mp[articleLessItem] = arr[i];
}
articleLessArray.sort();
let ans = [];
for (let i of articleLessArray) {
	ans.push(mp[i])
}
console.log(ans);
