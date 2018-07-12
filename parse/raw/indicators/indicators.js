const fs = require('fs')
const result = [];
fs.readFile('./indicators.raw','utf-8', (err, data) => {
    console.log(err, data);
    const lines = data.split('\r\n');
    lines.forEach(line => {
        const arr = line.split('#');
        if (arr.length > 1) {
            result.push({
                id: arr[0],
                name: arr[1],
                unit: arr[2],
                scat: arr[3],
                max: arr[4],
                label: arr[5]
            })
        }
    })

    fs.writeFile('./indicators.json',JSON.stringify({data: result}), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})