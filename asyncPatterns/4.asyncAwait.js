const path = './data';

const { readDirAsync, readFileAsync } = require('./util/fsPromise');

(async () => {
    const files = await readDirAsync(path);

    for(const file of files) {
        const data = await readFileAsync(`${path}/${file}`, 'utf-8');

        const { text } = JSON.parse(data);

        console.log(text);
    }
})();

