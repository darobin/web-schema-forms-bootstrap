
var pth = require("path")
;

exports.init = function (wsf) {
    wsf.register("bootstrap", pth.resolve(pth.join(__dirname, "bootstrap")));
};
