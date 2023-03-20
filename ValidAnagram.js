//Day 15/100 Valid Anagram

let s = "anagram";
let t = "nagaram";

const validAnagram = (s,t) => {
    if(s.length !== t.length){
        return false;
    }
    let str1 = s.split("").sort().join("");
    let str2 = t.split("").sort().join("");
    return str1 === str2;
}
console.log(validAnagram(s,t));