const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);