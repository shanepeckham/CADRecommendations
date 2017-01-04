'use strict';

var repository = require('../../../lib/contactRepository');

module.exports = {
    get: function contacts_get(req, res) {
        var o;
        o = repository.get(req.params['id']);
        res.json(o[0].caseNum);
    //    res.json(repository.get(req.params['id']));
    }
};
