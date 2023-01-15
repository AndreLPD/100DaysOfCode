//Day 06 - Next Prime
const num = 9;

function nextPrime(num){
    if(num < 2) return num;
        let bool = true;
        while(bool){
            if(calcPrime(num)){
                bool = false;
                return num;
            }else{
                num++;
                calcPrime(num);
            }
        }
}


    function calcPrime(num){
        for (let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        return true
    }

console.log(nextPrime(num));