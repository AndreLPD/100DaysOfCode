const phrase = "I finding Nemo !";
function findNemo(phrase){
    const isNemo = phrase.split(" ").some(item => item === "Nemo");
    return isNemo ? "Im found Nemo" : "I can't find Nemo";
}

console.log(findNemo(phrase));