const fs = require('fs')
const scat = require('../../data/secondary_cat.js')


const result = [];

function getPcat(id) {
    let pid = false
    scat.forEach((c) => {
        if (c.id == id) {
            pid = c.pid;
        }
    })

    return pid;
    

}
fs.readFile('./indicators.raw','utf-8', (err, data) => {
    console.log(err, data);
    const lines = data.split('\r\n');
    lines.forEach(line => {
        const arr = line.split('#');
        if (arr.length > 1) {
            result.push({
                id: arr[0],
                name: {
                    en: arr[1]
                },
                unit: arr[2],
                sid: arr[3],
                pid: getPcat(arr[3]),
                max: arr[4],
                label: {
                    en: arr[5]
                }
            })
        }
    })

    fs.writeFile('./indicators.json',JSON.stringify({data: result}), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})