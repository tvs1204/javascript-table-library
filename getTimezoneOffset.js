const merge = (a, b) => a.concat(b);
const randomString = () => Math.random().toString(36).slice(2);
const merge = (a, b) => [...a, ...b];