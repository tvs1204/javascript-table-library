const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomString = () => Math.random().toString(36).slice(2);