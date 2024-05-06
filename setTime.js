const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const apmRootPath = path.join(repositoryRootPath, 'apm');