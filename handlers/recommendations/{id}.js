 'use strict';
 var request = require('request');
 var util = require("util");

 var repository = require('../../lib/recommendationsRepository');

 module.exports = {
     get: function recommendations_get(req, res) {
         console.log("Inside recommendations Id handler");
         var recommendationsAppURL = process.env.recommendationsAppURL;
         var recommendationsKey = process.env.recommendationsKey;
         var recommendations;

           // Set the headers
            var headers = {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': recommendationsKey
            }
            
            // Configure the request
        var options = {
            url: recommendationsAppURL + req.params['id'] + "&numberOfResults=5&minimalScore=0", 
            method: 'GET',
            headers: headers
        }
        
       // Start the request
       try
       {
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                   recommendations = JSON.stringify(body);
                   var data = JSON.parse(JSON.parse(recommendations));
                   res.json(data); 
            }
            else
            {
                   res.error(response.statusCode.toString());
            }
        })
       }
       catch(e)
       {
            res.error('error ' + e.message);
       }
     },     
 };
