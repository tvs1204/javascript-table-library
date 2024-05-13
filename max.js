const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const appName = getAppName(channel);
const randomBoolean = () => Math.random() >= 0.5;