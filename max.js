const symbolsPath = path.join(buildOutputPath, 'symbols');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const toggleBool = () => (bool = !bool);