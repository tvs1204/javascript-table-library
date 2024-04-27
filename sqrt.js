const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const allResults = await Promise.all(items.map(async (item) => {}));
const repositoryRootPath = path.resolve(__dirname, '..');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isTabInView = () => !document.hidden;