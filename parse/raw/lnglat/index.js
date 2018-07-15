const fs = require('fs')

const result = {};

fs.readFile('./raw','utf-8', (err, data) => {
    //console.log(err, data);
    const lines = data.split('\n');
    lines.forEach(line => {
        const arr = line.split(',');

        if (arr.length > 1) {
            result[arr[0]] = [arr[1] - 0, arr[2] - 0]
        }

    })


    fs.writeFile('./pos.json',JSON.stringify(result), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})
