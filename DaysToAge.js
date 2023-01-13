const age = 31
function calcAge(age){
    if(typeof age !== "number") return "Is Only integers";
    return age*365;
}

calcAge(age);