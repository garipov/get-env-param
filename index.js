'use strict';

module.exports = getParam;
module.exports.bool = getBoolParam;
module.exports.PREFIX = '';

/**
 * return param from process env
 * @param param {String|Array} key or keys in process.env. if array priority for first key
 * @param defaultValue=undefined default value if process.env no contain param or prefix + param;
 * @returns {String|undefined|*} or return defaultValue
 */
function getParam(param, defaultValue) {
  var params = [].concat(param);

  var prefix = module.exports.PREFIX;

  for (var i = 0, key; i <= params.length; i++) {
    key = params[i];

    if (prefix) {
      if (process.env.hasOwnProperty(prefix + key)) {
        return process.env[prefix + key];
      }
    }

    if (process.env.hasOwnProperty(key)) {
      return process.env[key];
    }
  }

  return defaultValue;
}

function getBoolParam(param, defaultValue) {
  var valueFromEnv = getParam(param, defaultValue);

  if (typeof valueFromEnv === 'string') {
    var normalizedValue = valueFromEnv.trim().toLowerCase();

    if (normalizedValue === 'true') {
      return true;
    }

    if (normalizedValue === 'false') {
      return false;
    }

    var asNumber = parseInt(normalizedValue);
    if (!isNaN(asNumber)) {
      return !!asNumber;
    }
  }

  return !!valueFromEnv;
}
