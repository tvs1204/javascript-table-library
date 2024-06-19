const uniqueArray = arr => [...new Set(arr)];
const arrayContains = (arr, element) => arr.includes(element);
const currentDate = () => new Date().toLocaleDateString('en-US');