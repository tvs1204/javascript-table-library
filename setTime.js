const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const flattenedArray = arr => [].concat(...arr);
var arr1 = "john".split('');