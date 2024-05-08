const minNumber = arr => Math.min(...arr);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isEmptyObject = obj => Object.keys(obj).length === 0;