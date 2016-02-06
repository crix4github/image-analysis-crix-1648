/*eslint-env node */
'use strict';

var watson = require('watson-developer-cloud');

var languageTranslation = watson.language_translation({
  version: 'v2',
  username: '<<service_username>>',
  password: '<<service_password>>'
});

module.exports.translate = function(req, res, next) {
  var params = {
    text: req.body.text,
    model_id: 'en-es',
  };
  languageTranslation.translate(params, function(error, result) {
    if (error)
      return next(error);
    else 
      return res.json(result);
  });
};