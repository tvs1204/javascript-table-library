const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const merge = (a, b) => [...a, ...b];