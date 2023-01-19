//Day 12/100 - Mountains or Valleys - FALTA TERMINAR
const arr = [1,3,1];

function MountainsOrValleys(nums) {
    const peak = Math.max(...nums);
    const trough = Math.min(...nums);
    
    console.log(peak);
    console.log(trough);
    if(peak === nums[0] || peak === nums[nums.length-1]) return "The Peak isnt on the boundary "
    if(peak){
        const leftOfPeak = nums.every((accu,next) => (accu<next) < peak );
        const rightOfPeak = nums.every((accu,next) => (accu>next) < peak );
        if(leftOfPeak && rightOfPeak) return "Mountain";
    }
}
console.log(MountainsOrValleys(arr));