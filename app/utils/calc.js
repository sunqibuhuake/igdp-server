import indicators from '../data/indicator'
import detail from '../data/detail'
import secondary_cats from '../data/secondary_cat'

export function getAllSecondaryData(city_index, year,lang) {
  const arr = []
  secondary_cats.forEach(cat => {
    const item = getSecondaryData(city_index, cat.id, year)
    arr.push({
      name: item[lang],
      value: item.value,
      gap: item.max - item.value
    })
  })
  return arr;
}
export function getSecondaryData(city_index, sid, year) {

  const list = getIndicatorList(sid)
  const mapHelper = arr2obj(list);

  const city_indicators = getCityDetail(city_index)

  const value = getSecondaryValue(mapHelper, city_indicators, year)
  const max = getSecondaryMax(list)
  const cat = getSecondaryCatById(sid)
  return {
    value,
    max,
    ...cat
  }

}

export function getIndicatorList(sid) {
  const list = [];
  indicators.forEach(item => {
    if (item.sid == sid) {
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
export function getSecondaryMax(arr) {
  let max = 0;
  arr.forEach(item => {
    max += (item.max - 0)
  })
  return max;
}

export function getSecondaryValue(helper,obj, year) {
  let value = 0;
  for(let ind in obj) {
    if (helper[ind]) {
      value += (obj[ind][year] - 0)
    }
  }
  return value;

}

export function getSecondaryCatById(id) {
  let cat = {};
  secondary_cats.forEach(item => {
    if (item.id == id) {
      cat = item;
    }
  })
  return cat;

}
