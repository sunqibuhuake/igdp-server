const indicators = [
  {
    "id": "ind01",
    "name": {
      "en": "Primary Energy Consump per GDP"
    },
    "unit": "tce / 10,000 RMB",
    "sid": "1",
    "pid": 1,
    "max": "10",
    "label": {
      "en": "Energy Consumption / GDP"
    }
  },
  {
    "id": "ind02",
    "name": {
      "en": "CO2 Emissions per GDP"
    },
    "unit": "tCO2 / 10,000 RMB",
    "sid": "1",
    "pid": 1,
    "max": "10",
    "label": {
      "en": "CO2 Emissions / GDP"
    }
  },
  {
    "id": "ind03",
    "name": {
      "en": "CO2 per Capita"
    },
    "unit": "t CO2 /cap /yr",
    "sid": "2",
    "pid": 2,
    "max": "6",
    "label": {
      "en": "CO2 / capita"
    }
  },
  {
    "id": "ind04",
    "name": {
      "en": "Primary Energy Consump per Capita"
    },
    "unit": "tce/cap / yr",
    "sid": "2",
    "pid": 2,
    "max": "6",
    "label": {
      "en": "Energy Consumption / capita"
    }
  },
  {
    "id": "ind05",
    "name": {
      "en": "Non-Fossil Fuel Share of Primary Energy"
    },
    "unit": "%",
    "sid": "2",
    "pid": 2,
    "max": "6",
    "label": {
      "en": "Non-Fossil Fuel Energy"
    }
  },
  {
    "id": "ind06",
    "name": {
      "en": "Industrial Econ Energy Intensity"
    },
    "unit": "tce / 10,000 RMB",
    "sid": "3",
    "pid": 2,
    "max": "9",
    "label": {
      "en": "Industrial Energy Intensity"
    }
  },
  {
    "id": "ind07",
    "name": {
      "en": "Heavy Industry GDP Share (of tot industrial GDP)"
    },
    "unit": "%",
    "sid": "3",
    "pid": 2,
    "max": "9",
    "label": {
      "en": "Heavy Industry GDP Share"
    }
  },
  {
    "id": "ind08",
    "name": {
      "en": "Num of Public Transport Vehicles per 10,000 people"
    },
    "unit": "units / 10,000 person",
    "sid": "4",
    "pid": 2,
    "max": "2",
    "label": {
      "en": "Public Trans Vehicles / 10,000 ppl"
    }
  },
  {
    "id": "ind09",
    "name": {
      "en": "Urban Rail Transit Line Extent"
    },
    "unit": "km / km2",
    "sid": "4",
    "pid": 2,
    "max": "2",
    "label": {
      "en": "Urban Rail Extent"
    }
  },
  {
    "id": "ind10",
    "name": {
      "en": "Bus Trips per Capita"
    },
    "unit": "trips / person / yr",
    "sid": "4",
    "pid": 2,
    "max": "2",
    "label": {
      "en": "Bus Trips / capita"
    }
  },
  {
    "id": "ind11",
    "name": {
      "en": "Green Buildings Share Goal + Plan"
    },
    "unit": "%",
    "sid": "5",
    "pid": 2,
    "max": "2",
    "label": {
      "en": "Green Buildings Share"
    }
  },
  {
    "id": "ind12",
    "name": {
      "en": "Residential Energy Consump per Capita"
    },
    "unit": "kWh / cap",
    "sid": "5",
    "pid": 2,
    "max": "3",
    "label": {
      "en": "Residential Energy / capita"
    }
  },
  {
    "id": "ind13",
    "name": {
      "en": "Commercial Energy Consump per Employee"
    },
    "unit": "kWh / employee",
    "sid": "5",
    "pid": 2,
    "max": "3",
    "label": {
      "en": "Commercial Energy / employee"
    }
  },
  {
    "id": "ind14",
    "name": {
      "en": "Annual Municipal Solid Waste per Capita"
    },
    "unit": "t / cap / yr",
    "sid": "6",
    "pid": 3,
    "max": "3",
    "label": {
      "en": "Solid Waste / capita"
    }
  },
  {
    "id": "ind15",
    "name": {
      "en": "Blue Sky Days, or AQI"
    },
    "unit": "%",
    "sid": "6",
    "pid": 3,
    "max": "4",
    "label": {
      "en": "Blue Sky Days (or AQI)"
    }
  },
  {
    "id": "ind16",
    "name": {
      "en": "PM 2.5"
    },
    "unit": "μg / m3 ",
    "sid": "6",
    "pid": 3,
    "max": "3",
    "label": {
      "en": "PM2.5"
    }
  },
  {
    "id": "ind17",
    "name": {
      "en": "Municip Water Consump per Capita"
    },
    "unit": " L / cap / d",
    "sid": "6",
    "pid": 3,
    "max": "3",
    "label": {
      "en": "Water Consumption / capita"
    }
  },
  {
    "id": "ind18",
    "name": {
      "en": "Energy Saving and Enviro Protect Spending, Budget Ratio"
    },
    "unit": "%",
    "sid": "6",
    "pid": 3,
    "max": "3",
    "label": {
      "en": "Energy & Enviro Budget Ratio"
    }
  },
  {
    "id": "ind19",
    "name": {
      "en": "Green Space per Capita"
    },
    "unit": "m2 / cap",
    "sid": "6",
    "pid": 3,
    "max": "4",
    "label": {
      "en": "Green Space / capita"
    }
  },
  {
    "id": "ind20",
    "name": {
      "en": "Municip Low Carbon / Climate Plan"
    },
    "unit": "[True/False]",
    "sid": "7",
    "pid": 4,
    "max": "2.5",
    "label": {
      "en": "Low Carbon / Climate Plan"
    }
  },
  {
    "id": "ind21",
    "name": {
      "en": "Municip RE + Alt Energy Strategy"
    },
    "unit": "[True/False]",
    "sid": "7",
    "pid": 4,
    "max": "2.5",
    "label": {
      "en": "Renew + Alt Energy Strategy"
    }
  },
  {
    "id": "ind22",
    "name": {
      "en": "Climate Resilience (assessment / plan)"
    },
    "unit": "[True/False]",
    "sid": "7",
    "pid": 4,
    "max": "2.5",
    "label": {
      "en": "Climate Resiliance Plan"
    }
  },
  {
    "id": "ind23",
    "name": {
      "en": "Low Carbon Lifestyle Publicity"
    },
    "unit": "[True/False]",
    "sid": "7",
    "pid": 4,
    "max": "2.5",
    "label": {
      "en": "Low Carbon Lifestyle Publicity"
    }
  }
]
export default indicators;
