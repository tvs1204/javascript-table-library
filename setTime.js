const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const merge = (a, b) => a.concat(b);
var arr1 = "john".split('');