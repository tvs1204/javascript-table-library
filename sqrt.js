const randomBoolean = () => Math.random() >= 0.5;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
var regexp  = new RegExp('{{([^}]+)}}', 'g');