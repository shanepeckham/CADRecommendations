 'use strict';

 var repository = require('../../lib/recommendationsRepository');

 module.exports = {
     get: function recommendations_get(req, res) {
         console.log("Inside recommendations Id handler");
         res.json(repository.get(req.params['id']));
     },     
 };
