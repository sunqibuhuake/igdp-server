/**
 * Created by sunqi on 2018/6/19.
 */
import city_list from '../data/cities'
import eco_list from '../data/eco'

import group_options from '../data/filter/groups'
import region_options from '../data/filter/regions'
import pilot_options from '../data/filter/pilotStatus'
import size_options from '../data/city_size'
import primary_cat from '../data/primary_cat'
export default {
  getOptionNameById: (id, options)=> {
    let name = '?';
    options.forEach(o => {
      if (o.id == id) {
        name = o.name;
      }
    })
    return name;
  },
  addAllOption: (options) => {
    options.push({
      id: 'all',
      name: 'ALL'
    })
    return options;
  },
  getOptionsByLanguage: (options, lang) => {
    return options.map( o => {
      return {
        id: o.id,
        name: o[lang]
      }
    })
  },
  getCityMeta: (city_index) => {
    let city = {};
    city_list.forEach(c => {
      if (c.id == city_index) {
        city = c;
      }
    })
    return city;
  },
  getCityEco: (city_index) => {
    let eco = {};
    eco_list.forEach(c => {
      if (c.city_inedx == city_index) {
        eco = c;
      }
    })
    return eco;
  },
  getCityRegion: (id, lang) => {
    let name = '?'
    region_options.forEach(item => {
      if (item.id == id) {
        name = item[lang]
      }
    })
    return name
  },
  getCityGroup: (id, lang) => {
    let name = '?'
    group_options.forEach(item => {
      if (item.id == id) {
        name = item[lang]
      }
    })
    return name
  },
  getCityPilot: (id, lang) => {
    let name = '?'
    pilot_options.forEach(item => {
      if (item.id == id) {
        name = item[lang]
      }
    })
    return name
  },
  getCitySize: (id, lang) => {
    let name = '?'
    size_options.forEach(item => {
      if (item.id == id) {
        name = item[lang]
      }
    })
    return name;
  },
  getCityPrimaryData: (city_index) => {

  },


}
