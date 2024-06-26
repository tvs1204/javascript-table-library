const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const channelName = getChannelName(channel);