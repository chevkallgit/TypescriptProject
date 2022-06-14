"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var csv_parse_1 = require("csv-parse");
(function () {
    var csvFilePath = path.resolve(__dirname, 'C:/Users/chevk/VScodeprojects/Project/stats.csv');
    var headers = ['name', 'lat', 'lng', 'population'];
    var fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    (0, csv_parse_1.parse)(fileContent, {
        delimiter: ',',
        columns: headers
    }, function (error, result) {
        if (error) {
            console.error(error);
        }
        console.log("Result", result);
    });
})();
