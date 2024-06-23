const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const resultingPromises = urls.map((url) => makHttpRequest(url));