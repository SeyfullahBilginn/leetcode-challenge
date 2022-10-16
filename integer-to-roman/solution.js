/**
 * @param {number} num
 * @return {string}
 */

const dict = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
};

var intToRoman = function (num) {
    let isLeftSided = false;
    let remainder = num;
    //beginning index of last letter
    let indexOfLast = 0;
    var roman = "";
    var secondLastKey = 1000;
    Object.keys(dict).reverse().forEach((key) => {
        console.log("--");
        console.log("remainder: " + remainder);
        console.log("key: " + key);
        const occurences = Math.floor(remainder / key)
        // console.log("occurences: " + occurences);
        if (occurences < 4) {
            indexOfLast = indexOfLast + occurences
            // console.log("val."  + dict[key]);
            // console.log(dict.key);
            roman = roman.concat(dict[key].repeat(occurences))
            remainder = parseInt(remainder - occurences * key)
        } else {
            console.log("else");
            roman = roman.concat(dict[secondLastKey])
            console.log(typeof remainder);
            console.log(typeof secondLastKey);
            // console.log(typeof parseInt(secondLastKey));
            console.log(typeof key);
            var x =  remainder - parseInt(secondLastKey)
            console.log(typeof x);
            parseInt(key);
            x = key + x;
            console.log("x: " + x);
            remainder = remainder - secondLastKey + (x*key)
            roman = roman.concat(dict[key].repeat(x))
        }
        secondLastKey = key;
    })
    console.log("roman: " + roman);
};

// console.log(Math.floor(1194 / 1000));
num = 1994
intToRoman(num);
