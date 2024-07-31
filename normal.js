const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const allResults = await Promise.all(items.map(async (item) => {}));
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);