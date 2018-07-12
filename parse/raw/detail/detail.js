const fs = require('fs')

const result = {};

 
fs.readFile('./raw','utf-8', (err, data) => {
    //console.log(err, data);
    const lines = data.split('\r\n');
    lines.forEach(line => {
        const arr = line.split('#');

        if (arr.length > 1) {
            const city_index = arr[0];
            if (!result[city_index]) {
                result[city_index] = {}
            }
            const year = arr[2];
            
            for(let i = 3; i < arr.length; i++) {
                const j = i - 2;
                const key = 'ind' + (j < 10 ? ('0' + j) : j);

                if (!result[city_index][key]) {
                    result[city_index][key] = {}
                }
                result[city_index][key][year] = arr[i];
            }
        }
    
    })

    //console.log(result)

    const final = []

    for (let city_index in result) {
        final.push({
            city_index: city_index,
            indicators: result[city_index]
        })

    }

    fs.writeFile('./detail.json',JSON.stringify({data: final}), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})