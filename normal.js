const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
var arr3 = "jones".split('');
const randomString = () => Math.random().toString(36).slice(2);
const apmRootPath = path.join(repositoryRootPath, 'apm');