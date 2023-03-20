//Day 13/100 - Packing
const weights = [2,1,2,5,4,3,6,1,1,9,3,2];
const pack = 4;
let count = 0;
function canFit(weights, pack){
    while(count < pack){
        weights.reduce((acc, next) => {
            acc+next
            if(acc === 10){
                count++;
            }
        })
    } 

};
console.log(canFit(weights, pack));