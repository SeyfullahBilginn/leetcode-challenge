/**
 * @param {string} address
 * @return {string}
 */
function addItem(str,index) {
  return str.slice(0, index) + "[" + str[index] + "]" + str.slice(index+1);
}
 var defangIPaddr = function(address) {
  for(let i=0; i<address.length; i++) {
    if(address[i] !== ".") continue;
    address = addItem(address,i);
    i = i + 3;
  }
  return address
};


const address = "255.100.50.0";
// const address = "255.100.50.0";

console.log(defangIPaddr(address));
// console.log(address. splice(3,1));
