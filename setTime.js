const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);