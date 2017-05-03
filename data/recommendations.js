'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /recommendations
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: recommendations_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/recommendations',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
