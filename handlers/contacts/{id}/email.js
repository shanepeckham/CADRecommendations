/**
 * Created by shanepeckham on 09/01/2017.
 */
'use strict';

var repository = require('../../../lib/contactRepository');

module.exports = {
    get: function contacts_get(req, res) {
        var o;
        o = repository.get(req.params['id']);
        res.json(o[0].email);
        //    res.json(repository.get(req.params['id']));
    }
};
