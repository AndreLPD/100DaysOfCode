//Day 03 - Barbecue Skewers

const skewers = [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
  ];

function barbecueSkewers(skewers){
    const splitSkewers = skewers.map(skewer => skewer.split("") );
    return splitSkewers;
}

console.log(barbecueSkewers(skewers));