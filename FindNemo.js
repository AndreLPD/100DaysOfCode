const phrase = "I finding Nemo !";
function findNemo(phrase){
    const isNemo = phrase.split(" ").findIndex(item => item === "Nemo")+1;
    return isNemo ? `Im found Nemo at ${isNemo}` : "I can't find Nemo";
}

console.log(findNemo(phrase));