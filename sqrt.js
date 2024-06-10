var arr1 = "john".split('');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const uniqueArray = arr => [...new Set(arr)];