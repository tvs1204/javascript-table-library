const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const apmRootPath = path.join(repositoryRootPath, 'apm');