const fs = require('fs')

const result = [];
 
fs.readFile('./raw','utf-8', (err, data) => {
    //console.log(err, data);
    const lines = data.split('\r\n');
    lines.forEach(line => {
        const arr = line.split('#');

        if (arr.length > 1) {
            result.push({
                id: arr[0],
                name: {
                    en: arr[1],
                    zh: arr[2]
                },
                prov: {
                    en: arr[3],
                    zh: arr[4]
                },
                region: {
                    en: arr[5],
                    zh: arr[5]
                },
                grounp: arr[7],
                status: arr[8],
                size: arr[9]

            })
           
        }
    
    })

 
    fs.writeFile('./city.json',JSON.stringify({data: result}), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})