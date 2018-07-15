import indicators from '../data/indicator'
import detail from '../data/detail'
import secondary_cats from '../data/secondary_cat'
import primary_cats from '../data/primary_cat'
import city_list from '../data/cities'
import pos from '../data/pos'


export function getTotalPosData(year, lang) {
  const arr = [];
  city_list.forEach(city => {
    const city_index = city.id;
    const score = getScore(city_index, year)
    arr.push({
      name: city.name[lang],
      value: [
        pos[city_index][1],
        pos[city_index][0],
        score
      ]
    })
  })
  return arr;

}


export function getPosData(sid, year, lang) {
  const arr = [];
  city_list.forEach(city => {
    const city_index = city.id;
    const score = getSecondaryData(city_index, sid, year).value
    arr.push({
      name: city.name[lang],
      value: [
        pos[city_index][1],
        pos[city_index][0],
        score
      ]
    })
  })
  return arr;

}


export function getSpecBarData(arr) {
  return arr.map(item => {
    return {
      name: item.name,
      value: (item.list[1].value - item.list[0].value).toFixed(2)
    }
  })
}
export function getScatterData(sid, year, lang) {
  const arr = [];
  city_list.forEach(city => {
    const city_index = city.id;
    const x = getSecondaryData(city_index, sid, year).value
    const y = getScore(city_index, year);
    arr.push([x,y])
  })
  return arr;

}
export function filterIndicatorScoreByYear(sid, lang) {
  const list = getIndicatorList(sid, 'sid')
  const result = {}
  const mapHelper = arr2obj(list);
  city_list.map(city => {
    const city_index = city.id;
    const city_indicators = getCityDetail(city_index);
    const filtered = filterCityDetail(mapHelper, city_indicators, false);
    for(let ind in filtered) {
      if (!result[ind]) {
        result[ind] = {
          value2010: 0,
          value2015: 0
        }
      }
      result[ind].value2010 += (filtered[ind]['2010'] - 0)
      result[ind].value2015 += (filtered[ind]['2015'] - 0)
    }
  })
  const arr = []
  for (let ind in result) {
    arr.push({
      name: getIndicatorMeta(ind).name[lang],
      list: [
        {
          value: (result[ind].value2010 / city_list.length).toFixed(2)
        },
        {
          value: (result[ind].value2015 / city_list.length).toFixed(2)
        }
      ]
    })
  }
  return arr;
}
export function getSecondaryScoreByYear(sid, lang) {
  const list = getIndicatorList(sid, 'sid')
  let value2010 = 0;
  let value2015 = 0;
  const mapHelper = arr2obj(list);
  city_list.map(city => {
    const city_index = city.id;
    const city_indicators = getCityDetail(city_index);
    const filtered = filterCityDetail(mapHelper, city_indicators, false);
    for(let ind in filtered) {
      value2010 += (filtered[ind]['2010'] - 0)
      value2015 += (filtered[ind]['2015'] - 0)
    }
  })
  return [
    {
      name: getSecondaryMeta(sid)[lang],
      list: [
        {
          value: (value2010 / city_list.length).toFixed(2)
        },
        {
          value: (value2015 / city_list.length).toFixed(2)
        }
      ]
    }
  ]
}
export function getFilteredIndicatorAvg(sid, year, lang) {
  const list = getIndicatorList(sid, 'sid')
  const result = {}
  const mapHelper = arr2obj(list);
  city_list.map(city => {
    const city_index = city.id;
    const city_indicators = getCityDetail(city_index);
    const filtered = filterCityDetail(mapHelper, city_indicators, year);
    for(let ind in filtered) {
      if (!result[ind]) {
        result[ind] = 0;
      }
      result[ind] += (filtered[ind] - 0)
    }
  })
  const arr = []
  for (let ind in result) {
    const value = (result[ind] / city_list.length).toFixed(2)
    arr.push({
      name: getIndicatorMeta(ind).name[lang],
      value: value,
      gap: (getIndicatorMax(ind, year) - value).toFixed(2)
    })
  }
  return arr;
}

export function getIndicatorMax(ind, year) {
  let max = 0;
  detail.forEach(d => {
    for(let name in d.indicators) {

      if (name == ind) {
        const value = d.indicators[name][year]
        if (value > max) {
          max = value
        }

      }
    }
  })
  return max
}

export function filterCityDetail(helper, obj, year) {
  const result = {}
  for(let ind in obj) {
    if (helper[ind]) {
      if (year) {
        result[ind] = obj[ind][year];
      } else {
        result[ind] = obj[ind]
      }
    }
  }
  return result
}

export function getSecondaryFreq(sid, year) {
  const arr = []
  city_list.forEach( city => {
    const city_index = city.id;
    const item = getSecondaryData(city_index,sid, year)
    const index = ~~(item.value / 1.5)
    if (!arr[index]) {
      arr[index] = 1;
    } else {
      arr[index] += 1;
    }
  })
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr[i] = 0;
    }
  }
  return arr.map((n, i) => {
    return {
      name: (i + 1) * 1.5,
      value: n
    }
  })
}
export function getSecondaryAvg(lang, year) {
  let arr = []
  city_list.forEach( city => {
    const city_index = city.id;
    const city_arr = getAllSecondaryData(city_index, year, lang)
    city_arr.forEach((item, index) => {
      if (!arr[index]) {
        arr[index] = {
          name: item.name,
          value: 0
        }
      }
      arr[index].value += (item.value - 0);
    })
  })

  return arr.map(item => {
    item.avg = item.value / city_list.length
    return {
      name: item.name,
      value: (item.value / city_list.length).toFixed(2)
    }
  })

}

export function getSecondaryMax(lang, year) {
  let arr = []
  city_list.forEach( city => {
    const city_index = city.id;
    const city_arr = getAllSecondaryData(city_index, year, lang)
    city_arr.forEach((item, index) => {
      if (!arr[index]) {
        arr[index] = {
          name: item.name,
          value: 0
        }
      }
      if (item.value > arr[index].value) {
        arr[index].value = (item.value - 0);
      }
    })
  })

  return arr;

}

export function getSecondaryMin(lang, year) {
  let arr = []
  city_list.forEach( city => {
    const city_index = city.id;
    const city_arr = getAllSecondaryData(city_index, year, lang)
    city_arr.forEach((item, index) => {
      if (!arr[index]) {
        arr[index] = {
          name: item.name,
          value: 999
        }
      }
      if (item.value < arr[index].value) {
        arr[index].value = (item.value - 0);
      }
    })
  })
  return arr;

}

export function getPrimaryLineData(city_index){
  const city_indicators = getCityDetail(city_index);
  let sum2010 = 0;
  let sum2015 = 0;
  for( let ind in city_indicators) {
    sum2010 += (city_indicators[ind]['2010'] - 0)
    sum2015 += (city_indicators[ind]['2015'] - 0)
  }
  return [
    {
      name: 'Score',
      list: [
        {
          name: '2010',
          value: sum2010.toFixed(2)
        },
        {
          name: '2015',
          value: sum2015.toFixed(2)
        }
      ]
    }
  ]
}

export function getAllSecondaryLineData(city_index,lang) {
  const arr = []
  secondary_cats.forEach(cat => {
    const item = getSecondaryLineData(city_index, cat.id)
    arr.push({
      name: item[lang],
      list: [
        {
          value: item.value2010.toFixed(2)
        },
        {
          value: item.value2015.toFixed(2)
        }
      ]
    })
  })
  return arr;
}

export function getAllIndicatorLineData(city_index,lang) {
  const city_indicators = getCityDetail(city_index)
  const arr = [];
  for(let ind in city_indicators) {
    const meta = getIndicatorMeta(ind)
    arr.push({
      name: meta.name[lang],
      list: [
        {
          value: (city_indicators[ind]['2010'] - 0).toFixed(2)
        },
        {
          value: (city_indicators[ind]['2015'] - 0).toFixed(2)
        }
      ]
    })
  }
  return arr;

}
export function getAllPrimaryData(city_index, year, lang) {
  const arr = []
  primary_cats.forEach(cat => {
    const item = getPrimaryData(city_index, cat.id, year)
    arr.push({
      name: item[lang],
      value: item.value.toFixed(2),
      gap: (item.max - item.value).toFixed(2)
    })
  })
  return arr;
}

export function getAllIndicatorData(city_index, year, lang) {
  const city_indicators = getCityDetail(city_index)
  const arr = [];
  for(let ind in city_indicators) {
    const meta = getIndicatorMeta(ind)
    arr.push({
      name: meta.name[lang],
      value: (city_indicators[ind][year] - 0).toFixed(2),
      gap: (meta.max - city_indicators[ind][year]).toFixed(2)
    })
  }
  return arr;
}

export function getIndicatorMeta(ind) {
  let obj = {}
  indicators.forEach( item => {
    if (item.id == ind) {
      obj = item;
    }
  })
  return obj;
}

export function getSecondaryMeta(sid) {
  let obj = {}
  secondary_cats.forEach( item => {
    if (item.id == sid) {
      obj = item;
    }
  })
  return obj;
}
export function getAllSecondaryData(city_index, year,lang) {
  const arr = []
  secondary_cats.forEach(cat => {
    const item = getSecondaryData(city_index, cat.id, year)
    arr.push({
      name: item[lang],
      value: item.value.toFixed(2),
      gap: (item.max - item.value).toFixed(2)
    })
  })
  return arr;
}


export function getSecondaryData(city_index, sid, year) {
  const list = getIndicatorList(sid, 'sid')
  const mapHelper = arr2obj(list);
  const city_indicators = getCityDetail(city_index)
  const value = sumIndicatorsValue(mapHelper, city_indicators, year)
  const max = sumIndicatorsMax(list)
  const cat = getCatById(secondary_cats,sid)
  return {
    value,
    max,
    ...cat
  }
}

export function getSecondaryLineData(city_index, sid) {
  const list = getIndicatorList(sid, 'sid')
  const mapHelper = arr2obj(list);
  const city_indicators = getCityDetail(city_index)
  const value2010 = sumIndicatorsValue(mapHelper, city_indicators, '2010')
  const value2015 = sumIndicatorsValue(mapHelper, city_indicators, '2015')
  const cat = getCatById(secondary_cats,sid)
  return {
    value2010,
    value2015,
    ...cat
  }
}

export function getPrimaryData(city_index, pid, year) {

  const list = getIndicatorList(pid, 'pid')
  const mapHelper = arr2obj(list);
  const city_indicators = getCityDetail(city_index)
  const value = sumIndicatorsValue(mapHelper, city_indicators, year)
  const max = sumIndicatorsMax(list)
  const cat = getCatById(primary_cats, pid)
  return {
    value,
    max,
    ...cat
  }

}


export function getIndicatorList(id, prop) {
  const list = [];
  indicators.forEach(item => {
    if (item[prop] == id) {
      list.push(item)
    }
  })
  return list;
}

export function getCityDetail(city_index) {
  let obj = {};
  detail.forEach(d => {
    if (d.city_index == city_index) {
      obj = d.indicators;
    }
  })
  return obj;
}

export function arr2obj (arr) {
  const obj = {};
  arr.forEach(item => {
    obj[item.id] = true;
  })
  return obj;
}
export function sumIndicatorsMax(arr) {
  let max = 0;
  arr.forEach(item => {
    max += (item.max - 0)
  })
  return max;
}

export function sumIndicatorsValue(helper,obj, year) {
  let value = 0;
  for(let ind in obj) {
    if (helper[ind]) {
      value += (obj[ind][year] - 0)
    }
  }
  return value;

}

export function getCatById(cats, id) {
  let cat = {};
  cats.forEach(item => {
    if (item.id == id) {
      cat = item;
    }
  })
  return cat;
}


export function getScore(city_index,year) {
  let sum = 0;
  const city_indicators = getCityDetail(city_index);
  for(let ind in city_indicators) {
    sum += (city_indicators[ind][year] - 0)
  }
  return sum;
}
