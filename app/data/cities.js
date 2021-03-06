/**
 * Created by Administrator on 2018-07-13.
 */
const cities = [
  {
    "id": "1",
    "name": {
      "en": "Shanghai",
      "zh": "上海"
    },
    "prov": {
      "en": "Shanghai",
      "zh": "上海"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "2",
    "name": {
      "en": "Beijing",
      "zh": "北京"
    },
    "prov": {
      "en": "Beijing",
      "zh": "北京"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "3",
    "name": {
      "en": "Shenzhen",
      "zh": "深圳"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "4",
    "name": {
      "en": "Chongqing",
      "zh": "重庆"
    },
    "prov": {
      "en": "Chongqing",
      "zh": "重庆"
    },
    "region": "W",
    "group": "H",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "5",
    "name": {
      "en": "Tianjin",
      "zh": "天津"
    },
    "prov": {
      "en": "Tianjin",
      "zh": "江苏"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "6",
    "name": {
      "en": "Nanjing",
      "zh": "南京"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "P",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "7",
    "name": {
      "en": "Guangzhou",
      "zh": "广州"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "1"
  },
  {
    "id": "8",
    "name": {
      "en": "Wuhan",
      "zh": "武汉"
    },
    "prov": {
      "en": "Hubei",
      "zh": "浙江"
    },
    "region": "C",
    "group": "P",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "9",
    "name": {
      "en": "Chengdu",
      "zh": "成都"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "1"
  },
  {
    "id": "10",
    "name": {
      "en": "Shenyang",
      "zh": "沈阳"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "H",
    "status": "OTHER",
    "size": "2"
  },
  {
    "id": "11",
    "name": {
      "en": "Harbin",
      "zh": "哈尔滨"
    },
    "prov": {
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "region": "NE",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "12",
    "name": {
      "en": "Xi'an",
      "zh": "西安"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "江苏"
    },
    "region": "W",
    "group": "H",
    "status": "OTHER",
    "size": "2"
  },
  {
    "id": "13",
    "name": {
      "en": "Kunming",
      "zh": "昆明"
    },
    "prov": {
      "en": "Yunnan",
      "zh": "云南"
    },
    "region": "W",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "14",
    "name": {
      "en": "Zhengzhou",
      "zh": "郑州"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "15",
    "name": {
      "en": "Qingdao",
      "zh": "青岛"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "16",
    "name": {
      "en": "Changsha",
      "zh": "长沙"
    },
    "prov": {
      "en": "Hunan",
      "zh": "湖南"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "17",
    "name": {
      "en": "Changchun",
      "zh": "长春"
    },
    "prov": {
      "en": "Jilin",
      "zh": "吉林"
    },
    "region": "NE",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "18",
    "name": {
      "en": "Dalian",
      "zh": "大连"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "P",
    "status": "OTHER",
    "size": "2"
  },
  {
    "id": "19",
    "name": {
      "en": "Taiyuan",
      "zh": "太原"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "山西"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "20",
    "name": {
      "en": "Jinan",
      "zh": "济南"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "21",
    "name": {
      "en": "Hangzhou",
      "zh": "杭州"
    },
    "prov": {
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "22",
    "name": {
      "en": "Shijiazhuang",
      "zh": "石家庄"
    },
    "prov": {
      "en": "Hebei",
      "zh": "河北"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "23",
    "name": {
      "en": "Urumuqi",
      "zh": "乌鲁木齐"
    },
    "prov": {
      "en": "Xinjiang",
      "zh": "浙江"
    },
    "region": "W",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "24",
    "name": {
      "en": "Suzhou",
      "zh": "苏州"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "25",
    "name": {
      "en": "Shantou",
      "zh": "汕头"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "26",
    "name": {
      "en": "Nanchang",
      "zh": "南昌"
    },
    "prov": {
      "en": "Jiangxi",
      "zh": "江西"
    },
    "region": "C",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "27",
    "name": {
      "en": "Jieyang",
      "zh": "揭阳"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "28",
    "name": {
      "en": "Luoyang",
      "zh": "洛阳"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "29",
    "name": {
      "en": "Nanning",
      "zh": "南宁"
    },
    "prov": {
      "en": "Guangxi",
      "zh": "广西"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "30",
    "name": {
      "en": "Hefei",
      "zh": "合肥"
    },
    "prov": {
      "en": "Anhui",
      "zh": "安徽"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "31",
    "name": {
      "en": "Wuxi",
      "zh": "无锡"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "浙江"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "32",
    "name": {
      "en": "Guiyang",
      "zh": "贵阳"
    },
    "prov": {
      "en": "Guizhou",
      "zh": "贵州"
    },
    "region": "W",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "33",
    "name": {
      "en": "Fuzhou",
      "zh": "福州"
    },
    "prov": {
      "en": "Fujian",
      "zh": "福建"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "34",
    "name": {
      "en": "Tangshan",
      "zh": "唐山"
    },
    "prov": {
      "en": "Hebei",
      "zh": "宁夏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "35",
    "name": {
      "en": "Dongguan",
      "zh": "东莞"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "H",
    "status": "OTHER",
    "size": "2"
  },
  {
    "id": "36",
    "name": {
      "en": "Lanzhou",
      "zh": "兰州"
    },
    "prov": {
      "en": "Gansu",
      "zh": "甘肃"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "37",
    "name": {
      "en": "Linyi",
      "zh": "临沂"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "38",
    "name": {
      "en": "Xia'men",
      "zh": "厦门"
    },
    "prov": {
      "en": "Fujian",
      "zh": "宁夏"
    },
    "region": "E",
    "group": "P",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "39",
    "name": {
      "en": "Xuzhou",
      "zh": "徐州"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "宁夏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "40",
    "name": {
      "en": "Zibo",
      "zh": "淄博"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "41",
    "name": {
      "en": "Anshan",
      "zh": "鞍山"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "42",
    "name": {
      "en": "Handan",
      "zh": "邯郸"
    },
    "prov": {
      "en": "Hebei",
      "zh": "河北"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "43",
    "name": {
      "en": "Ningbo",
      "zh": "宁波"
    },
    "prov": {
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "44",
    "name": {
      "en": "Yantai",
      "zh": "烟台"
    },
    "prov": {
      "en": "Shandong",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "45",
    "name": {
      "en": "Baotou",
      "zh": "包头"
    },
    "prov": {
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "46",
    "name": {
      "en": "Wenzhou",
      "zh": "温州"
    },
    "prov": {
      "en": "Zhejiang",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "2"
  },
  {
    "id": "47",
    "name": {
      "en": "Fushun",
      "zh": "抚顺"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "48",
    "name": {
      "en": "Changzhou",
      "zh": "常州"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "49",
    "name": {
      "en": "foshan",
      "zh": "佛山"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "H",
    "status": "OTHER",
    "size": "2"
  },
  {
    "id": "50",
    "name": {
      "en": "Huhhot",
      "zh": "呼和浩特"
    },
    "prov": {
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "51",
    "name": {
      "en": "Jilin",
      "zh": "吉林"
    },
    "prov": {
      "en": "Jilin",
      "zh": "吉林"
    },
    "region": "NE",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "52",
    "name": {
      "en": "Huai'an",
      "zh": "淮安"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "53",
    "name": {
      "en": "Weifang",
      "zh": "潍坊"
    },
    "prov": {
      "en": "Shandong",
      "zh": "宁夏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "54",
    "name": {
      "en": "Nanyang",
      "zh": "南阳"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "55",
    "name": {
      "en": "Jining",
      "zh": "济宁"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "56",
    "name": {
      "en": "Datong",
      "zh": "大同"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "山西"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "57",
    "name": {
      "en": "Xi'ning",
      "zh": "西宁"
    },
    "prov": {
      "en": "Qinghai",
      "zh": "浙江"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "58",
    "name": {
      "en": "Nantong",
      "zh": "南通"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "59",
    "name": {
      "en": "Daqing",
      "zh": "大庆"
    },
    "prov": {
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "region": "NE",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "60",
    "name": {
      "en": "Liuzhou",
      "zh": "柳州"
    },
    "prov": {
      "en": "Guangxi",
      "zh": "广西"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "61",
    "name": {
      "en": "Baoding",
      "zh": "保定"
    },
    "prov": {
      "en": "Hebei",
      "zh": "河北"
    },
    "region": "E",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "62",
    "name": {
      "en": "Qiqihar",
      "zh": "齐齐哈尔"
    },
    "prov": {
      "en": "Heilongjiang",
      "zh": "黑龙江"
    },
    "region": "NE",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "63",
    "name": {
      "en": "Zhuzhou",
      "zh": "株洲"
    },
    "prov": {
      "en": "Hunan",
      "zh": "湖南"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "64",
    "name": {
      "en": "Yinchun",
      "zh": "银川"
    },
    "prov": {
      "en": "Ningxia",
      "zh": "宁夏"
    },
    "region": "W",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "65",
    "name": {
      "en": "Zigong",
      "zh": "自贡"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "66",
    "name": {
      "en": "Huai'nan",
      "zh": "淮南"
    },
    "prov": {
      "en": "Anhui",
      "zh": "安徽"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "67",
    "name": {
      "en": "Yancheng",
      "zh": "盐城"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "浙江"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "68",
    "name": {
      "en": "Yangzhou",
      "zh": "扬州"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "宁夏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "69",
    "name": {
      "en": "Wuhu",
      "zh": "芜湖"
    },
    "prov": {
      "en": "Anhui",
      "zh": "宁夏"
    },
    "region": "C",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "70",
    "name": {
      "en": "Hengyang",
      "zh": "衡阳"
    },
    "prov": {
      "en": "Hunan",
      "zh": "湖南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "71",
    "name": {
      "en": "Huizhou",
      "zh": "惠州"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "72",
    "name": {
      "en": "Haikou",
      "zh": "海口"
    },
    "prov": {
      "en": "Hainan",
      "zh": "海南"
    },
    "region": "E",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "95",
    "name": {
      "en": "Mianyang",
      "zh": "绵阳"
    },
    "prov": {
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "73",
    "name": {
      "en": "Taizhou_ZJ_台",
      "zh": "台州"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "74",
    "name": {
      "en": "Shangqiu",
      "zh": "商丘"
    },
    "prov": {
      "en": "Zhejiang",
      "zh": "浙江"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "75",
    "name": {
      "en": "Shaoxing",
      "zh": "绍兴"
    },
    "prov": {
      "en": "Fujian",
      "zh": "福建"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "2"
  },
  {
    "id": "76",
    "name": {
      "en": "Quanzhou",
      "zh": "泉州"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "77",
    "name": {
      "en": "Luzhou",
      "zh": "泸州"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "78",
    "name": {
      "en": "Nanchong",
      "zh": "南充"
    },
    "prov": {
      "en": "Jiangxi",
      "zh": "江西"
    },
    "region": "C",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "79",
    "name": {
      "en": "Ganzhou",
      "zh": "赣州"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "80",
    "name": {
      "en": "Jiangmen",
      "zh": "江门"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "81",
    "name": {
      "en": "Pingdingshan",
      "zh": "平顶山"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "82",
    "name": {
      "en": "Yingkou",
      "zh": "营口"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "83",
    "name": {
      "en": "Zaozhuang",
      "zh": "枣庄"
    },
    "prov": {
      "en": "Hebei",
      "zh": "河北"
    },
    "region": "E",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "84",
    "name": {
      "en": "Qinhuangdao",
      "zh": "秦皇岛"
    },
    "prov": {
      "en": "Guangdong",
      "zh": "广东"
    },
    "region": "E",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "85",
    "name": {
      "en": "Zhanjiang",
      "zh": "湛江"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "86",
    "name": {
      "en": "Benxi",
      "zh": "本溪"
    },
    "prov": {
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "87",
    "name": {
      "en": "Chifeng",
      "zh": "赤峰"
    },
    "prov": {
      "en": "Liaoning",
      "zh": "辽宁"
    },
    "region": "NE",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "88",
    "name": {
      "en": "Jinzhou",
      "zh": "锦州"
    },
    "prov": {
      "en": "Hubei",
      "zh": "浙江"
    },
    "region": "C",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "89",
    "name": {
      "en": "Xiangyang",
      "zh": "襄阳"
    },
    "prov": {
      "en": "Hebei",
      "zh": "江苏"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "90",
    "name": {
      "en": "Xingtai",
      "zh": "邢台"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "宁夏"
    },
    "region": "W",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "91",
    "name": {
      "en": "Xianyang",
      "zh": "咸阳"
    },
    "prov": {
      "en": "Henan",
      "zh": "河南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "92",
    "name": {
      "en": "Kaifeng",
      "zh": "开封"
    },
    "prov": {
      "en": "Hebei",
      "zh": "河北"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "93",
    "name": {
      "en": "Zhangjiakou",
      "zh": "张家口"
    },
    "prov": {
      "en": "Hubei",
      "zh": "湖北"
    },
    "region": "C",
    "group": "M",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "94",
    "name": {
      "en": "Huangshi",
      "zh": "黄石"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "96",
    "name": {
      "en": "Taizhou_JS_泰",
      "zh": "泰州"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "97",
    "name": {
      "en": "Huaibei",
      "zh": "淮北"
    },
    "prov": {
      "en": "Anhui",
      "zh": "安徽"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "98",
    "name": {
      "en": "bengbu",
      "zh": "蚌埠"
    },
    "prov": {
      "en": "Anhui",
      "zh": "安徽"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "99",
    "name": {
      "en": "Yichang",
      "zh": "宜昌"
    },
    "prov": {
      "en": "Hubei",
      "zh": "浙江"
    },
    "region": "C",
    "group": "H",
    "status": "OTHER",
    "size": "3"
  },
  {
    "id": "100",
    "name": {
      "en": "Zhenjiang",
      "zh": "镇江"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "H",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "101",
    "name": {
      "en": "Zunyi",
      "zh": "遵义"
    },
    "prov": {
      "en": "Guizhou",
      "zh": "贵州"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "102",
    "name": {
      "en": "Guilin",
      "zh": "桂林"
    },
    "prov": {
      "en": "Guangxi",
      "zh": "广西"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "103",
    "name": {
      "en": "Changde",
      "zh": "常德"
    },
    "prov": {
      "en": "Hunan",
      "zh": "湖南"
    },
    "region": "C",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "104",
    "name": {
      "en": "Suqian",
      "zh": "宿迁"
    },
    "prov": {
      "en": "Jiangsu",
      "zh": "江苏"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "105",
    "name": {
      "en": "Neijiang",
      "zh": "内江"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "3"
  },
  {
    "id": "106",
    "name": {
      "en": "Laiwu",
      "zh": "莱芜"
    },
    "prov": {
      "en": "Shandong",
      "zh": "山东"
    },
    "region": "E",
    "group": "M",
    "status": "NO",
    "size": "4"
  },
  {
    "id": "107",
    "name": {
      "en": "Jingdezhen",
      "zh": "景德镇"
    },
    "prov": {
      "en": "Jiangxi",
      "zh": "江西"
    },
    "region": "C",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "108",
    "name": {
      "en": "Jincheng",
      "zh": "晋城"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "山西"
    },
    "region": "C",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "109",
    "name": {
      "en": "Guangyuan",
      "zh": "广元"
    },
    "prov": {
      "en": "Sichuan",
      "zh": "四川"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "110",
    "name": {
      "en": "Wuwei",
      "zh": "武威"
    },
    "prov": {
      "en": "Gansu",
      "zh": "江苏"
    },
    "region": "W",
    "group": "M",
    "status": "NO",
    "size": "4"
  },
  {
    "id": "111",
    "name": {
      "en": "Hulunbuir",
      "zh": "呼伦贝尔"
    },
    "prov": {
      "en": "Inner Mongolia",
      "zh": "内蒙古"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "112",
    "name": {
      "en": "Yan'an",
      "zh": "延安"
    },
    "prov": {
      "en": "Shanxi",
      "zh": "江苏"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "113",
    "name": {
      "en": "Chizhou",
      "zh": "池州"
    },
    "prov": {
      "en": "Anhui",
      "zh": "安徽"
    },
    "region": "C",
    "group": "M",
    "status": "YES",
    "size": "4"
  },
  {
    "id": "114",
    "name": {
      "en": "Nanping",
      "zh": "南平"
    },
    "prov": {
      "en": "Fujian",
      "zh": "福建"
    },
    "region": "E",
    "group": "M",
    "status": "YES",
    "size": "3"
  },
  {
    "id": "115",
    "name": {
      "en": "Jinchang",
      "zh": "金昌"
    },
    "prov": {
      "en": "Gansu",
      "zh": "甘肃"
    },
    "region": "W",
    "group": "M",
    "status": "YES",
    "size": "4"
  }
]
export default cities;
