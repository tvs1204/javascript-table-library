console.log("0 || 1 = "+(0 || 1));
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
console.log(1 +  "2" + "2");
const buildOutputPath = path.join(repositoryRootPath, 'out');
const isEmptyObject = obj => Object.keys(obj).length === 0;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);