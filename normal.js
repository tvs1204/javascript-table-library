const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};