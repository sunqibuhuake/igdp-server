/**
 * Created by sunqi on 2018/6/19.
 */
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
  }
}
