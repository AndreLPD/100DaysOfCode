//Day 8/100 - Letter Combinations
const str = "23";

function letterCombinations(str){
    const nums = [parseInt(str)];
    //if(typeof nums !== 'number') return 'Is Not a Number'
    if(nums.some((num) => num === 1 || 0)) return 'This is a invalid number' 
    const letters = [
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ];
    console.log(nums);

}

console.log(letterCombinations(str));