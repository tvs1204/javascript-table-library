console.log(1 +  "2" + "2");
const merge = (a, b) => a.concat(b);
const scriptRootPath = path.join(repositoryRootPath, 'script');
const resultingPromises = urls.map((url) => makHttpRequest(url));