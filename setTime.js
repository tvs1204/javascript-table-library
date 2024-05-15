const result = await makeHttpRequest(url);
const resultingPromises = urls.map((url) => makHttpRequest(url));