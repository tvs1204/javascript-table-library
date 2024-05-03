const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomBoolean = () => Math.random() >= 0.5;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;