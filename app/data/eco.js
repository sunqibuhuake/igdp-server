/**
 * Created by Administrator on 2018-07-13.
 */
const data = [
  {
    "city_inedx": "1",
    "population": "24152700",
    "gdp": "2496499000000",
    "gdp_per_cap": "103363.14 ",
    "area": "6340.50 ",
    "industria": "100.0",
    "growth": "7%",
    "gdp_2010": "1742196814271.89 "
  },
  {
    "city_inedx": "2",
    "population": "21705000",
    "gdp": "2296860000000.00 ",
    "gdp_per_cap": "105821.70 ",
    "area": "16410.00 ",
    "industria": "100.0",
    "growth": "8%",
    "gdp_2010": "1596924426295.13 "
  },
  {
    "city_inedx": "3",
    "population": "11378900",
    "gdp": "1750299000000.00 ",
    "gdp_per_cap": "153819.70 ",
    "area": "1991.64 ",
    "industria": "100.0",
    "growth": "10%",
    "gdp_2010": "1104757885979.65 "
  },
  {
    "city_inedx": "4",
    "population": "30165500",
    "gdp": "1571972000000.00 ",
    "gdp_per_cap": "52111.58 ",
    "area": "26041.15 ",
    "industria": "90.0",
    "growth": "13%",
    "gdp_2010": "859269543577.57 "
  },
  {
    "city_inedx": "5",
    "population": "15469500",
    "gdp": "1653819000000.00 ",
    "gdp_per_cap": "106908.37 ",
    "area": "639.60 ",
    "industria": "100.0",
    "growth": "12%",
    "gdp_2010": "921841850919.71 "
  },
  {
    "city_inedx": "6",
    "population": "8235900",
    "gdp": "972077000000.00 ",
    "gdp_per_cap": "118029.24 ",
    "area": "4733.13 ",
    "industria": "100.0",
    "growth": "11%",
    "gdp_2010": "581580636505.76 "
  },
  {
    "city_inedx": "7",
    "population": "13601100",
    "gdp": "1810041000000.00 ",
    "gdp_per_cap": "133080.49 ",
    "area": "3848.66 ",
    "industria": "100.0",
    "growth": "10%",
    "gdp_2010": "1122871888620.48 "
  },
  {
    "city_inedx": "8",
    "population": "10607700",
    "gdp": "1090560000000.00 ",
    "gdp_per_cap": "102808.34 ",
    "area": "1536.00 ",
    "industria": "100.0",
    "growth": "10%",
    "gdp_2010": "662569189372.63 "
  },
  {
    "city_inedx": "9",
    "population": "14658000",
    "gdp": "1080120000000.00 ",
    "gdp_per_cap": "73688.09 ",
    "area": "2129.00 ",
    "industria": "97.7",
    "growth": "11%",
    "gdp_2010": "639844943491.06 "
  },
  {
    "city_inedx": "10",
    "population": "8291000",
    "gdp": "728050000000.00 ",
    "gdp_per_cap": "87812.09 ",
    "area": "3471.00 ",
    "industria": "95.3",
    "growth": "8%",
    "gdp_2010": "492754978782.64 "
  },
  {
    "city_inedx": "11",
    "population": "10636000",
    "gdp": "575120000000.00 ",
    "gdp_per_cap": "54072.96 ",
    "area": "7086.00 ",
    "industria": "79.5",
    "growth": "9%",
    "gdp_2010": "367340552965.60 "
  },
  {
    "city_inedx": "12",
    "population": "8705600",
    "gdp": "581003000000.00 ",
    "gdp_per_cap": "66739.00 ",
    "area": "639.60 ",
    "industria": "96.5",
    "growth": "11%",
    "gdp_2010": "345418930008.48 "
  },
  {
    "city_inedx": "13",
    "population": "6677000",
    "gdp": "397000000000.00 ",
    "gdp_per_cap": "59457.84 ",
    "area": "4105.25 ",
    "industria": "94.1",
    "growth": "12%",
    "gdp_2010": "221682726435.30 "
  },
  {
    "city_inedx": "14",
    "population": "9569000",
    "gdp": "731520000000.00 ",
    "gdp_per_cap": "76446.86 ",
    "area": "1010.30 ",
    "industria": "94.0",
    "growth": "11%",
    "gdp_2010": "434904562764.40 "
  },
  {
    "city_inedx": "15",
    "population": "9097000",
    "gdp": "930007000000.00 ",
    "gdp_per_cap": "102232.27 ",
    "area": "1405.25 ",
    "industria": "98.1",
    "growth": "10%",
    "gdp_2010": "585934416847.19 "
  },
  {
    "city_inedx": "16",
    "population": "7431800",
    "gdp": "851013000000.00 ",
    "gdp_per_cap": "114509.67 ",
    "area": "954.55 ",
    "industria": "95.5",
    "growth": "12%",
    "gdp_2010": "483319011505.29 "
  },
  {
    "city_inedx": "17",
    "population": "7793000",
    "gdp": "553003000000.00 ",
    "gdp_per_cap": "70961.50 ",
    "area": "4789.00 ",
    "industria": "90.0",
    "growth": "9%",
    "gdp_2010": "363697993904.51 "
  },
  {
    "city_inedx": "18",
    "population": "6987000",
    "gdp": "773160000000.00 ",
    "gdp_per_cap": "110656.93 ",
    "area": "2567.64 ",
    "industria": "100.0",
    "growth": "9%",
    "gdp_2010": "512767161154.64 "
  },
  {
    "city_inedx": "19",
    "population": "4318700",
    "gdp": "273534000000.00 ",
    "gdp_per_cap": "63337.12 ",
    "area": "1460.00 ",
    "industria": "96.4",
    "growth": "8%",
    "gdp_2010": "184960712701.30 "
  },
  {
    "city_inedx": "20",
    "population": "7132000",
    "gdp": "610023000000.00 ",
    "gdp_per_cap": "85533.23 ",
    "area": "3257.00 ",
    "industria": "98.0",
    "growth": "9%",
    "gdp_2010": "390704213313.81 "
  },
  {
    "city_inedx": "21",
    "population": "9018000",
    "gdp": "1005358000000.00 ",
    "gdp_per_cap": "111483.48 ",
    "area": "3068.00 ",
    "industria": "100.0",
    "growth": "9%",
    "gdp_2010": "650424639881.78 "
  },
  {
    "city_inedx": "22",
    "population": "10700000",
    "gdp": "544060000000.00 ",
    "gdp_per_cap": "50846.73 ",
    "area": "455.80 ",
    "industria": "88.7",
    "growth": "9%",
    "gdp_2010": "346233892392.45 "
  },
  {
    "city_inedx": "23",
    "population": "3530000",
    "gdp": "268000000000.00 ",
    "gdp_per_cap": "75920.68 ",
    "area": "1536.00 ",
    "industria": "99.2",
    "growth": "14%",
    "gdp_2010": "138703439775.00 "
  },
  {
    "city_inedx": "24",
    "population": "10616000",
    "gdp": "1450000000000.00 ",
    "gdp_per_cap": "136586.28 ",
    "area": "1650.00 ",
    "industria": "95.8",
    "growth": "10%",
    "gdp_2010": "921080114658.70 "
  },
  {
    "city_inedx": "25",
    "population": "5552100",
    "gdp": "185001000000.00 ",
    "gdp_per_cap": "33320.91 ",
    "area": "1956.00 ",
    "industria": "84.0",
    "growth": "10%",
    "gdp_2010": "115815551364.92 "
  },
  {
    "city_inedx": "26",
    "population": "5302900",
    "gdp": "400001000000.00 ",
    "gdp_per_cap": "75430.61 ",
    "area": "622.00 ",
    "industria": "88.4",
    "growth": "11%",
    "gdp_2010": "238453305063.77 "
  },
  {
    "city_inedx": "27",
    "population": "6058900",
    "gdp": "189001000000.00 ",
    "gdp_per_cap": "31193.95 ",
    "area": "181.00 ",
    "industria": "76.4",
    "growth": "12%",
    "gdp_2010": "108110197916.53 "
  },
  {
    "city_inedx": "28",
    "population": "6743000",
    "gdp": "350880000000.00 ",
    "gdp_per_cap": "52036.19 ",
    "area": "544.00 ",
    "industria": "82.8",
    "growth": "10%",
    "gdp_2010": "222076259480.38 "
  },
  {
    "city_inedx": "29",
    "population": "6986100",
    "gdp": "341009000000.00 ",
    "gdp_per_cap": "48812.50 ",
    "area": "6569.00 ",
    "industria": "80.7",
    "growth": "11%",
    "gdp_2010": "205686129375.36 "
  },
  {
    "city_inedx": "30",
    "population": "7790000",
    "gdp": "566027000000.00 ",
    "gdp_per_cap": "72660.72 ",
    "area": "838.52 ",
    "industria": "92.8",
    "growth": "12%",
    "gdp_2010": "318326550655.13 "
  },
  {
    "city_inedx": "31",
    "population": "6511000",
    "gdp": "851826000000.00 ",
    "gdp_per_cap": "130828.75 ",
    "area": "1536.00 ",
    "industria": "96.1",
    "growth": "9%",
    "gdp_2010": "547072533344.25 "
  },
  {
    "city_inedx": "32",
    "population": "4621800",
    "gdp": "289116000000.00 ",
    "gdp_per_cap": "62554.85 ",
    "area": "2407.87 ",
    "industria": "95.6",
    "growth": "15%",
    "gdp_2010": "143242819428.68 "
  },
  {
    "city_inedx": "33",
    "population": "7500000",
    "gdp": "561810000000.00 ",
    "gdp_per_cap": "74908.00 ",
    "area": "1786.00 ",
    "industria": "97.0",
    "growth": "11%",
    "gdp_2010": "329529414856.16 "
  },
  {
    "city_inedx": "34",
    "population": "7801000",
    "gdp": "610310000000.00 ",
    "gdp_per_cap": "78234.84 ",
    "area": "2310.60 ",
    "industria": "90.6",
    "growth": "8%",
    "gdp_2010": "411161875109.01 "
  },
  {
    "city_inedx": "35",
    "population": "8254100",
    "gdp": "627506000000.00 ",
    "gdp_per_cap": "76023.55 ",
    "area": "2465.00 ",
    "industria": "99.3",
    "growth": "8%",
    "gdp_2010": "428258325045.49 "
  },
  {
    "city_inedx": "36",
    "population": "3693100",
    "gdp": "209599000000.00 ",
    "gdp_per_cap": "56754.22 ",
    "area": "1631.60 ",
    "industria": "94.9",
    "growth": "12%",
    "gdp_2010": "117561201735.34 "
  },
  {
    "city_inedx": "37",
    "population": "10323200",
    "gdp": "376320000000.00 ",
    "gdp_per_cap": "36453.81 ",
    "area": "2200.20 ",
    "industria": "86.8",
    "growth": "10%",
    "gdp_2010": "229379491544.38 "
  },
  {
    "city_inedx": "38",
    "population": "3860000",
    "gdp": "346601000000.00 ",
    "gdp_per_cap": "89793.01 ",
    "area": "2310.60 ",
    "industria": "100.0",
    "growth": "11%",
    "gdp_2010": "209437370452.33 "
  },
  {
    "city_inedx": "39",
    "population": "8669000",
    "gdp": "531988000000.00 ",
    "gdp_per_cap": "61366.71 ",
    "area": "2310.60 ",
    "industria": "90.9",
    "growth": "12%",
    "gdp_2010": "305939794397.94 "
  },
  {
    "city_inedx": "40",
    "population": "4642000",
    "gdp": "413020000000.00 ",
    "gdp_per_cap": "88974.58 ",
    "area": "2970.20 ",
    "industria": "93.6",
    "growth": "9%",
    "gdp_2010": "264770912762.60 "
  },
  {
    "city_inedx": "41",
    "population": "3460000",
    "gdp": "234900000000.00 ",
    "gdp_per_cap": "67890.17 ",
    "area": "624.29 ",
    "industria": "86.2",
    "growth": "8%",
    "gdp_2010": "160611187588.47 "
  },
  {
    "city_inedx": "42",
    "population": "9433000",
    "gdp": "314540000000.00 ",
    "gdp_per_cap": "33344.64 ",
    "area": "956.00 ",
    "industria": "72.6",
    "growth": "9%",
    "gdp_2010": "207647821411.87 "
  },
  {
    "city_inedx": "43",
    "population": "7825000",
    "gdp": "801150000000.00 ",
    "gdp_per_cap": "102383.39 ",
    "area": "2462.76 ",
    "industria": "94.9",
    "growth": "8%",
    "gdp_2010": "537739023135.17 "
  },
  {
    "city_inedx": "44",
    "population": "7014100",
    "gdp": "644608000000.00 ",
    "gdp_per_cap": "91901.74 ",
    "area": "639.60 ",
    "industria": "91.8",
    "growth": "10%",
    "gdp_2010": "399887186190.74 "
  },
  {
    "city_inedx": "45",
    "population": "2829000",
    "gdp": "378190000000.00 ",
    "gdp_per_cap": "133683.28 ",
    "area": "2965.00 ",
    "industria": "100.0",
    "growth": "11%",
    "gdp_2010": "226470291556.12 "
  },
  {
    "city_inedx": "46",
    "population": "9117000",
    "gdp": "461984000000.00 ",
    "gdp_per_cap": "50672.81 ",
    "area": "639.60 ",
    "industria": "91.6",
    "growth": "8%",
    "gdp_2010": "316171155102.73 "
  },
  {
    "city_inedx": "47",
    "population": "2138100",
    "gdp": "121650000000.00 ",
    "gdp_per_cap": "56896.31 ",
    "area": "765.16 ",
    "industria": "89.2",
    "growth": "8%",
    "gdp_2010": "81803521460.86 "
  },
  {
    "city_inedx": "48",
    "population": "4701000",
    "gdp": "527320000000.00 ",
    "gdp_per_cap": "112171.88 ",
    "area": "1872.10 ",
    "industria": "98.6",
    "growth": "11%",
    "gdp_2010": "316058474326.59 "
  },
  {
    "city_inedx": "49",
    "population": "7430600",
    "gdp": "800392000000.00 ",
    "gdp_per_cap": "107715.66 ",
    "area": "3868.27 ",
    "industria": "95.3",
    "growth": "9%",
    "gdp_2010": "508895716678.18 "
  },
  {
    "city_inedx": "50",
    "population": "3059600",
    "gdp": "309050000000.00 ",
    "gdp_per_cap": "101009.94 ",
    "area": "2054.00 ",
    "industria": "97.9",
    "growth": "10%",
    "gdp_2010": "194356805945.30 "
  },
  {
    "city_inedx": "51",
    "population": "4300000",
    "gdp": "245520000000.00 ",
    "gdp_per_cap": "57097.67 ",
    "area": "1995.00 ",
    "industria": "80.2",
    "growth": "10%",
    "gdp_2010": "152587268503.22 "
  },
  {
    "city_inedx": "52",
    "population": "4852100",
    "gdp": "274509000000.00 ",
    "gdp_per_cap": "56575.30 ",
    "area": "3137.00 ",
    "industria": "81.7",
    "growth": "12%",
    "gdp_2010": "155624778407.34 "
  },
  {
    "city_inedx": "53",
    "population": "9277200",
    "gdp": "517050000000.00 ",
    "gdp_per_cap": "55733.41 ",
    "area": "2310.60 ",
    "industria": "84.9",
    "growth": "10%",
    "gdp_2010": "322217366551.30 "
  },
  {
    "city_inedx": "54",
    "population": "8596000",
    "gdp": "252232000000.00 ",
    "gdp_per_cap": "29342.95 ",
    "area": "1987.57 ",
    "industria": "75.0",
    "growth": "10%",
    "gdp_2010": "159640729255.74 "
  },
  {
    "city_inedx": "55",
    "population": "8299200",
    "gdp": "401312000000.00 ",
    "gdp_per_cap": "48355.50 ",
    "area": "1043.40 ",
    "industria": "77.6",
    "growth": "10%",
    "gdp_2010": "247378817905.72 "
  },
  {
    "city_inedx": "56",
    "population": "3406400",
    "gdp": "105290000000.00 ",
    "gdp_per_cap": "30909.46 ",
    "area": "2080.00 ",
    "industria": "85.3",
    "growth": "10%",
    "gdp_2010": "66761093687.14 "
  },
  {
    "city_inedx": "57",
    "population": "2310800",
    "gdp": "113162000000.00 ",
    "gdp_per_cap": "48970.92 ",
    "area": "1536.00 ",
    "industria": "91.4",
    "growth": "14%",
    "gdp_2010": "59552265963.70 "
  },
  {
    "city_inedx": "58",
    "population": "7300000",
    "gdp": "614840000000.00 ",
    "gdp_per_cap": "84224.66 ",
    "area": "1706.00 ",
    "industria": "92.6",
    "growth": "11%",
    "gdp_2010": "362259199718.16 "
  },
  {
    "city_inedx": "59",
    "population": "2780100",
    "gdp": "407000000000.00 ",
    "gdp_per_cap": "146397.61 ",
    "area": "5107.00 ",
    "industria": "89.7",
    "growth": "7%",
    "gdp_2010": "289102998878.76 "
  },
  {
    "city_inedx": "60",
    "population": "3922700",
    "gdp": "229862000000.00 ",
    "gdp_per_cap": "58597.90 ",
    "area": "658.31 ",
    "industria": "87.1",
    "growth": "10%",
    "gdp_2010": "145349790582.37 "
  },
  {
    "city_inedx": "61",
    "population": "10260000",
    "gdp": "300030000000.00 ",
    "gdp_per_cap": "29242.69 ",
    "area": "312.30 ",
    "industria": "71.2",
    "growth": "9%",
    "gdp_2010": "193219738564.55 "
  },
  {
    "city_inedx": "62",
    "population": "5367000",
    "gdp": "123880000000.00 ",
    "gdp_per_cap": "23081.80 ",
    "area": "4365.00 ",
    "industria": "55.8",
    "growth": "9%",
    "gdp_2010": "81181596692.02 "
  },
  {
    "city_inedx": "63",
    "population": "4001000",
    "gdp": "233510000000.00 ",
    "gdp_per_cap": "58362.91 ",
    "area": "536.70 ",
    "industria": "87.0",
    "growth": "11%",
    "gdp_2010": "136842153125.85 "
  },
  {
    "city_inedx": "64",
    "population": "2164100",
    "gdp": "148073000000.00 ",
    "gdp_per_cap": "68422.44 ",
    "area": "2310.60 ",
    "industria": "93.3",
    "growth": "10%",
    "gdp_2010": "90043150279.15 "
  },
  {
    "city_inedx": "65",
    "population": "2770200",
    "gdp": "114311000000.00 ",
    "gdp_per_cap": "41264.53 ",
    "area": "1438.00 ",
    "industria": "78.0",
    "growth": "11%",
    "gdp_2010": "66748561811.32 "
  },
  {
    "city_inedx": "66",
    "population": "2397000",
    "gdp": "78930000000.00 ",
    "gdp_per_cap": "32928.66 ",
    "area": "1492.33 ",
    "industria": "82.7",
    "growth": "7%",
    "gdp_2010": "56964738815.03 "
  },
  {
    "city_inedx": "67",
    "population": "7228500",
    "gdp": "421250000000.00 ",
    "gdp_per_cap": "58276.27 ",
    "area": "1536.00 ",
    "industria": "82.0",
    "growth": "12%",
    "gdp_2010": "240743251511.27 "
  },
  {
    "city_inedx": "68",
    "population": "4483600",
    "gdp": "401684000000.00 ",
    "gdp_per_cap": "89589.62 ",
    "area": "2310.60 ",
    "industria": "92.6",
    "growth": "11%",
    "gdp_2010": "233710925938.49 "
  },
  {
    "city_inedx": "69",
    "population": "3654000",
    "gdp": "245732000000.00 ",
    "gdp_per_cap": "67250.14 ",
    "area": "2310.60 ",
    "industria": "88.7",
    "growth": "13%",
    "gdp_2010": "136000746825.73 "
  },
  {
    "city_inedx": "70",
    "population": "7337500",
    "gdp": "260157000000.00 ",
    "gdp_per_cap": "35455.81 ",
    "area": "575.00 ",
    "industria": "70.6",
    "growth": "11%",
    "gdp_2010": "154668999255.11 "
  },
  {
    "city_inedx": "71",
    "population": "5844000",
    "gdp": "314003000000.00 ",
    "gdp_per_cap": "53730.84 ",
    "area": "2669.00 ",
    "industria": "87.9",
    "growth": "12%",
    "gdp_2010": "178492243538.00 "
  },
  {
    "city_inedx": "72",
    "population": "2223000",
    "gdp": "116128000000.00 ",
    "gdp_per_cap": "52239.32 ",
    "area": "2510.00 ",
    "industria": "93.9",
    "growth": "10%",
    "gdp_2010": "73231130534.83 "
  },
  {
    "city_inedx": "73",
    "population": "6049000",
    "gdp": "355813000000.00 ",
    "gdp_per_cap": "58821.79 ",
    "area": "1536.00 ",
    "industria": "92.3",
    "growth": "8%",
    "gdp_2010": "245551897762.19 "
  },
  {
    "city_inedx": "74",
    "population": "7273900",
    "gdp": "180393000000.00 ",
    "gdp_per_cap": "24800.04 ",
    "area": "1697.00 ",
    "industria": "56.6",
    "growth": "10%",
    "gdp_2010": "110595102108.84 "
  },
  {
    "city_inedx": "75",
    "population": "4968000",
    "gdp": "446665000000.00 ",
    "gdp_per_cap": "89908.41 ",
    "area": "362.00 ",
    "industria": "92.7",
    "growth": "9%",
    "gdp_2010": "294871921380.22 "
  },
  {
    "city_inedx": "76",
    "population": "8510000",
    "gdp": "613774000000.00 ",
    "gdp_per_cap": "72123.85 ",
    "area": "892.00 ",
    "industria": "90.5",
    "growth": "11%",
    "gdp_2010": "360008876798.07 "
  },
  {
    "city_inedx": "77",
    "population": "4285200",
    "gdp": "135341000000.00 ",
    "gdp_per_cap": "31583.36 ",
    "area": "2132.00 ",
    "industria": "71.2",
    "growth": "13%",
    "gdp_2010": "74176942775.78 "
  },
  {
    "city_inedx": "78",
    "population": "6364000",
    "gdp": "151620000000.00 ",
    "gdp_per_cap": "23824.64 ",
    "area": "2527.00 ",
    "industria": "55.7",
    "growth": "11%",
    "gdp_2010": "89736297489.55 "
  },
  {
    "city_inedx": "79",
    "population": "8550000",
    "gdp": "197387000000.00 ",
    "gdp_per_cap": "23086.20 ",
    "area": "528.28 ",
    "industria": "66.1",
    "growth": "11%",
    "gdp_2010": "117668662144.90 "
  },
  {
    "city_inedx": "80",
    "population": "4519500",
    "gdp": "224002000000.00 ",
    "gdp_per_cap": "49563.45 ",
    "area": "1818.12 ",
    "industria": "86.5",
    "growth": "9%",
    "gdp_2010": "142813197792.17 "
  },
  {
    "city_inedx": "81",
    "population": "4042000",
    "gdp": "133540000000.00 ",
    "gdp_per_cap": "33038.10 ",
    "area": "443.00 ",
    "industria": "77.4",
    "growth": "8%",
    "gdp_2010": "91901681647.35 "
  },
  {
    "city_inedx": "82",
    "population": "2443000",
    "gdp": "151380000000.00 ",
    "gdp_per_cap": "61964.80 ",
    "area": "702.00 ",
    "industria": "89.1",
    "growth": "9%",
    "gdp_2010": "98116271014.53 "
  },
  {
    "city_inedx": "83",
    "population": "3878000",
    "gdp": "203100000000.00 ",
    "gdp_per_cap": "52372.36 ",
    "area": "3068.98 ",
    "industria": "82.9",
    "growth": "10%",
    "gdp_2010": "128661854077.24 "
  },
  {
    "city_inedx": "84",
    "population": "3100000",
    "gdp": "125044000000.00 ",
    "gdp_per_cap": "40336.77 ",
    "area": "363.20 ",
    "industria": "74.2",
    "growth": "8%",
    "gdp_2010": "86214662825.54 "
  },
  {
    "city_inedx": "85",
    "population": "7241400",
    "gdp": "238002000000.00 ",
    "gdp_per_cap": "32866.85 ",
    "area": "1460.00 ",
    "industria": "65.6",
    "growth": "11%",
    "gdp_2010": "143166860744.79 "
  },
  {
    "city_inedx": "86",
    "population": "1512100",
    "gdp": "116462000000.00 ",
    "gdp_per_cap": "77020.04 ",
    "area": "1525.37 ",
    "industria": "94.5",
    "growth": "9%",
    "gdp_2010": "77096580799.68 "
  },
  {
    "city_inedx": "87",
    "population": "4299500",
    "gdp": "186127000000.00 ",
    "gdp_per_cap": "43290.38 ",
    "area": "7076.14 ",
    "industria": "72.2",
    "growth": "11%",
    "gdp_2010": "111156536477.44 "
  },
  {
    "city_inedx": "88",
    "population": "3068000",
    "gdp": "135750000000.00 ",
    "gdp_per_cap": "44247.07 ",
    "area": "728.80 ",
    "industria": "70.8",
    "growth": "8%",
    "gdp_2010": "91032523424.58 "
  },
  {
    "city_inedx": "89",
    "population": "5614000",
    "gdp": "338210000000.00 ",
    "gdp_per_cap": "60244.03 ",
    "area": "1536.00 ",
    "industria": "81.7",
    "growth": "12%",
    "gdp_2010": "194326401820.80 "
  },
  {
    "city_inedx": "90",
    "population": "7294400",
    "gdp": "176470000000.00 ",
    "gdp_per_cap": "24192.53 ",
    "area": "639.60 ",
    "industria": "67.1",
    "growth": "8%",
    "gdp_2010": "119548027807.74 "
  },
  {
    "city_inedx": "91",
    "population": "4972400",
    "gdp": "215591000000.00 ",
    "gdp_per_cap": "43357.53 ",
    "area": "2310.60 ",
    "industria": "72.3",
    "growth": "12%",
    "gdp_2010": "120814373779.77 "
  },
  {
    "city_inedx": "92",
    "population": "4542600",
    "gdp": "160484000000.00 ",
    "gdp_per_cap": "35328.67 ",
    "area": "546.00 ",
    "industria": "67.7",
    "growth": "11%",
    "gdp_2010": "96362740936.26 "
  },
  {
    "city_inedx": "93",
    "population": "4421700",
    "gdp": "136354000000.00 ",
    "gdp_per_cap": "30837.46 ",
    "area": "819.00 ",
    "industria": "68.7",
    "growth": "8%",
    "gdp_2010": "92371801346.95 "
  },
  {
    "city_inedx": "94",
    "population": "2458000",
    "gdp": "123500000000.00 ",
    "gdp_per_cap": "50244.10 ",
    "area": "237.00 ",
    "industria": "85.3",
    "growth": "12%",
    "gdp_2010": "71534205306.59 "
  },
  {
    "city_inedx": "95",
    "population": "4771900",
    "gdp": "170033000000.00 ",
    "gdp_per_cap": "35632.14 ",
    "area": "1570.00 ",
    "industria": "70.4",
    "growth": "11%",
    "gdp_2010": "99822471067.61 "
  },
  {
    "city_inedx": "96",
    "population": "4641600",
    "gdp": "365553000000.00 ",
    "gdp_per_cap": "78755.82 ",
    "area": "639.60 ",
    "industria": "91.4",
    "growth": "11%",
    "gdp_2010": "212307605503.45 "
  },
  {
    "city_inedx": "97",
    "population": "2179000",
    "gdp": "76040000000.00 ",
    "gdp_per_cap": "34896.74 ",
    "area": "759.80 ",
    "industria": "81.1",
    "growth": "10%",
    "gdp_2010": "47863997849.33 "
  },
  {
    "city_inedx": "98",
    "population": "3291000",
    "gdp": "125305000000.00 ",
    "gdp_per_cap": "38075.05 ",
    "area": "601.50 ",
    "industria": "72.3",
    "growth": "12%",
    "gdp_2010": "72125921430.00 "
  },
  {
    "city_inedx": "99",
    "population": "4115000",
    "gdp": "338480000000.00 ",
    "gdp_per_cap": "82255.16 ",
    "area": "1536.00 ",
    "industria": "86.5",
    "growth": "12%",
    "gdp_2010": "193960138663.48 "
  },
  {
    "city_inedx": "100",
    "population": "3176500",
    "gdp": "350248000000.00 ",
    "gdp_per_cap": "110262.24 ",
    "area": "1083.00 ",
    "industria": "94.1",
    "growth": "12%",
    "gdp_2010": "202872164698.15 "
  },
  {
    "city_inedx": "101",
    "population": "6192100",
    "gdp": "216834000000.00 ",
    "gdp_per_cap": "35017.85 ",
    "area": "1316.00 ",
    "industria": "69.1",
    "growth": "15%",
    "gdp_2010": "108274762055.55 "
  },
  {
    "city_inedx": "102",
    "population": "4919100",
    "gdp": "194297000000.00 ",
    "gdp_per_cap": "39498.49 ",
    "area": "565.00 ",
    "industria": "69.4",
    "growth": "11%",
    "gdp_2010": "117938256954.28 "
  },
  {
    "city_inedx": "103",
    "population": "5844000",
    "gdp": "270900000000.00 ",
    "gdp_per_cap": "46355.24 ",
    "area": "2510.00 ",
    "industria": "74.3",
    "growth": "11%",
    "gdp_2010": "159612284828.00 "
  },
  {
    "city_inedx": "104",
    "population": "4853800",
    "gdp": "212619000000.00 ",
    "gdp_per_cap": "43804.65 ",
    "area": "2108.00 ",
    "industria": "77.1",
    "growth": "12%",
    "gdp_2010": "121619897094.81 "
  },
  {
    "city_inedx": "105",
    "population": "3739700",
    "gdp": "119858000000.00 ",
    "gdp_per_cap": "32050.16 ",
    "area": "1569.00 ",
    "industria": "68.6",
    "growth": "11%",
    "gdp_2010": "70429170419.99 "
  },
  {
    "city_inedx": "106",
    "population": "1351600",
    "gdp": "66583000000.00 ",
    "gdp_per_cap": "49262.36 ",
    "area": "2246.03 ",
    "industria": "84.4",
    "growth": "9%",
    "gdp_2010": "42411432073.77 "
  },
  {
    "city_inedx": "107",
    "population": "1640515",
    "gdp": "77206000000.00 ",
    "gdp_per_cap": "47062.05 ",
    "area": "580.00 ",
    "industria": "84.9",
    "growth": "10%",
    "gdp_2010": "47376296905.92 "
  },
  {
    "city_inedx": "108",
    "population": "2315000",
    "gdp": "104020000000.00 ",
    "gdp_per_cap": "44933.05 ",
    "area": "2164.80 ",
    "industria": "82.7",
    "growth": "8%",
    "gdp_2010": "69561848797.86 "
  },
  {
    "city_inedx": "109",
    "population": "2630000",
    "gdp": "60543000000.00 ",
    "gdp_per_cap": "23020.15 ",
    "area": "4535.00 ",
    "industria": "64.4",
    "growth": "12%",
    "gdp_2010": "35067978881.59 "
  },
  {
    "city_inedx": "110",
    "population": "1816400",
    "gdp": "41619000000.00 ",
    "gdp_per_cap": "22912.90 ",
    "area": "639.60 ",
    "industria": "53.5",
    "growth": "12%",
    "gdp_2010": "23998964422.79 "
  },
  {
    "city_inedx": "111",
    "population": "2526500",
    "gdp": "159596000000.00 ",
    "gdp_per_cap": "63168.81 ",
    "area": "1518.90 ",
    "industria": "82.9",
    "growth": "11%",
    "gdp_2010": "96874753891.59 "
  },
  {
    "city_inedx": "112",
    "population": "2298000",
    "gdp": "119863000000.00 ",
    "gdp_per_cap": "52159.70 ",
    "area": "639.60 ",
    "industria": "83.5",
    "growth": "7%",
    "gdp_2010": "84745447967.87 "
  },
  {
    "city_inedx": "113",
    "population": "1436000",
    "gdp": "54470000000.00 ",
    "gdp_per_cap": "37931.75 ",
    "area": "2431.70 ",
    "industria": "73.4",
    "growth": "11%",
    "gdp_2010": "32854626907.43 "
  },
  {
    "city_inedx": "114",
    "population": "2640000",
    "gdp": "133951000000.00 ",
    "gdp_per_cap": "50739.02 ",
    "area": "2659.66 ",
    "industria": "65.1",
    "growth": "11%",
    "gdp_2010": "80722133294.75 "
  },
  {
    "city_inedx": "115",
    "population": "470500",
    "gdp": "22450000000.00 ",
    "gdp_per_cap": "47715.20 ",
    "area": "3019.00 ",
    "industria": "80.2",
    "growth": "12%",
    "gdp_2010": "12906098150.55 "
  }
]
export default data;
