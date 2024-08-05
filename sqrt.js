const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isWeekday = (date) => date.getDay() % 6 !== 0;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);