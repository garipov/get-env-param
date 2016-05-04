# get-env-param
Get environment parameter with defaults

## Simple Usage

```javascript
var getEnvParam = require('get-env-param');
var myOption = getEnvParam('OPTION'); // return process.env.OPTION

// return true if process.env is true or number != 0 else return default value (in example it's true)
var myBooleanOption = getEnvParam.bool('BOOL_OPTION', true);
```

## Advanced Usage


```javascript
var getEnvParam = require('get-env-param');

getEnvParam.PREFIX = 'MY_NAMESPACE_';

// if MY_NAMESPACE_OPTION defined in process.env return it
// else if OPTION defined in process.env return it
// else if MY_NAMESPACE_OTHER_OPTION defined in process.env return it
// else if OTHER_OPTION defined in process.env return it
// else return 'defaultValue'
var myOption = getEnvParam(['OPTION', 'OTHER_OPTION'], 'defaultValue');  
```
