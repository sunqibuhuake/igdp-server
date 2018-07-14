/**
 * Created by Administrator on 2018-07-13.
 */

const list = ['P','H','E','M']
const groups = list.map(c => {
  return {
    id: c,
    en: 'Group ' + c,
    zh: '组' + c
  }
})

export default groups;
