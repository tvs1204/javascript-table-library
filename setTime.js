const timeFromDate = date => date.toTimeString().slice(0, 8);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const result = await makeHttpRequest(url);