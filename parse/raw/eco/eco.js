const fs = require('fs')

const result = {};
 
fs.readFile('./raw','utf-8', (err, data) => {
    //console.log(err, data);
    const lines = data.split('\r\n');
    lines.forEach(line => {
        const arr = line.split('#');

        if (arr.length > 1) {
            const city_index = arr[0]
            const year = arr[1]

            // if (!result[city_index]) {
            //     result[city_index] = {}
            // }

            if (year == 2015) {
                result[city_index] = {
                    population: arr[2],
                    gdp: arr[3],
                    gdp_per_cap: arr[4],
                    area: arr[5],
                    industria: arr[6],
                    growth: arr[7]
                }
            }

            if (year == 2010) {
                result[city_index].gdp_2010 = arr[3]
            }

            
           
        }
    
    })


    const final = [];
    for(let city in result) {

        final.push({
            city_inedx: city,
            ...result[city]
        })

    }

 
    fs.writeFile('./eco.json',JSON.stringify({data: final}), 'utf-8', (err) => {
        err && console.log(err)
        console.log('done')
    })
})