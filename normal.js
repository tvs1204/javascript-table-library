const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const removeDuplicates = (arr) => [...new Set(arr)];