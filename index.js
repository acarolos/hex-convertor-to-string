const hexyjs = require("hexly-str-js");

let convertHexToStr = function (hex) {
    return hexyjs.hexToStr(hex);
}

module.exports = {
    convertHexToStr
}