'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /recommendations/{userId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json
     * responses: 200
     * operationId: recommendations_getById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recommendations/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
