const executableName = getExecutableName(channel, appName);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const randomBoolean = () => Math.random() >= 0.5;