const removeDuplicates = (arr) => [...new Set(arr)];
[foo, bar] = [bar, foo];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};