 'use strict';

 var repository = require('../lib/recommendationsRepository');

 module.exports = {
     get: function recommendations_get(req, res) {
         console.log("Inside recommendations handlers");
         res.json(repository.all())
     }
 };
