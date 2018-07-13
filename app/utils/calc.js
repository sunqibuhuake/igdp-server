import indicators from '../data/indicator'
import detail from '../data/detail'
import secondary_cats from '../data/secondary_cat'
import primary_cats from '../data/primary_cat'

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
