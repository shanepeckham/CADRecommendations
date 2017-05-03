'use strict';

var recommendations = require('./recommendations.json');
var jp = require('jsonpath')

module.exports = {
    get: function (id) {
        console.log("Inside recommendations lib");
        return jp.query(recommendations, '$..[?(@.id=='+id+')]');
    },
    all: function () {
        return recommendations;
    }
};
