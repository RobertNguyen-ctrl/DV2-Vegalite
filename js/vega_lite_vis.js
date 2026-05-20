const stateData = [
  {"state":"New South Wales",             "abbr":"NSW","rate":63.2,"participants":5012000,"pop":7928000},
  {"state":"Victoria",                    "abbr":"VIC","rate":65.1,"participants":4238000,"pop":6511000},
  {"state":"Queensland",                  "abbr":"QLD","rate":66.8,"participants":3421000,"pop":5122000},
  {"state":"South Australia",             "abbr":"SA", "rate":61.4,"participants":1148000,"pop":1869000},
  {"state":"Western Australia",           "abbr":"WA", "rate":67.9,"participants":1876000,"pop":2763000},
  {"state":"Tasmania",                    "abbr":"TAS","rate":58.3,"participants": 304000,"pop": 521000},
  {"state":"Northern Territory",          "abbr":"NT", "rate":54.7,"participants": 132000,"pop": 241000},
  {"state":"Australian Capital Territory","abbr":"ACT","rate":72.1,"participants": 305000,"pop": 423000}
];

const chart1 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":380,"height":240,
  "projection":{"type":"mercator"},
  "layer":[
    {"data":{"url":"data/aus_states.topojson","format":{"type":"json","property":"features"}},
     "mark":{"type":"geoshape","fill":"#d0dde8","stroke":"white","strokeWidth":1}},
    {"data":{"url":"data/aus_states.topojson","format":{"type":"json","property":"features"}},
     "transform":[{"lookup":"properties.STATE_NAME","from":{"data":{"values":stateData},"key":"state","fields":["abbr","rate","participants","pop"]}},{"filter":"datum.rate != null"}],
     "mark":{"type":"geoshape","stroke":"white","strokeWidth":1.5},
     "encoding":{
       "color":{"field":"rate","type":"quantitative","title":"Rate (%)","scale":{"type":"threshold","domain":[57,62,65,68],"range":["#c6dbef","#9ecae1","#6baed6","#2b8cbe","#08519c"]},"legend":{"orient":"bottom-right","labelExpr":"datum.label+'%'"}},
       "tooltip":[{"field":"properties.STATE_NAME","type":"nominal","title":"State"},{"field":"rate","type":"quantitative","title":"Rate (%)","format":".1f"},{"field":"participants","type":"quantitative","title":"Participants","format":","}]
     }}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart2 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":300,
  "data":{"values":[
    {"sport":"Walking","n":6821000},{"sport":"Swimming","n":3862000},{"sport":"Gym/Fitness","n":3654000},
    {"sport":"Cycling","n":2841000},{"sport":"Running/Jogging","n":2634000},{"sport":"Golf","n":1821000},
    {"sport":"Tennis","n":1654000},{"sport":"Football (Soccer)","n":1432000},{"sport":"Yoga/Pilates","n":1398000},
    {"sport":"AFL","n":1187000},{"sport":"Netball","n":1043000},{"sport":"Basketball","n":987000},
    {"sport":"Cricket","n":921000},{"sport":"Bushwalking","n":876000},{"sport":"Surfing","n":743000},
    {"sport":"Dance","n":698000},{"sport":"Martial Arts","n":612000},{"sport":"Rugby League","n":589000},
    {"sport":"Lawn Bowls","n":521000},{"sport":"Volleyball","n":487000}
  ]},
  "mark":{"type":"bar","cornerRadiusEnd":3},
  "encoding":{
    "y":{"field":"sport","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
    "x":{"field":"n","type":"quantitative","title":"Participants","axis":{"format":",.0f","labelFontSize":9}},
    "color":{"field":"n","type":"quantitative","scale":{"scheme":"blues"},"legend":null},
    "tooltip":[{"field":"sport","type":"nominal","title":"Sport"},{"field":"n","type":"quantitative","title":"Participants","format":","}]
  },
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart3 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":220,
  "data":{"values":[
    {"sport":"Walking","age":"15–24","rate":38},{"sport":"Walking","age":"25–34","rate":52},{"sport":"Walking","age":"35–44","rate":61},{"sport":"Walking","age":"45–54","rate":67},{"sport":"Walking","age":"55–64","rate":72},{"sport":"Walking","age":"65+","rate":74},
    {"sport":"Swimming","age":"15–24","rate":31},{"sport":"Swimming","age":"25–34","rate":28},{"sport":"Swimming","age":"35–44","rate":30},{"sport":"Swimming","age":"45–54","rate":27},{"sport":"Swimming","age":"55–64","rate":25},{"sport":"Swimming","age":"65+","rate":22},
    {"sport":"Gym/Fitness","age":"15–24","rate":48},{"sport":"Gym/Fitness","age":"25–34","rate":44},{"sport":"Gym/Fitness","age":"35–44","rate":36},{"sport":"Gym/Fitness","age":"45–54","rate":28},{"sport":"Gym/Fitness","age":"55–64","rate":19},{"sport":"Gym/Fitness","age":"65+","rate":12},
    {"sport":"Cycling","age":"15–24","rate":18},{"sport":"Cycling","age":"25–34","rate":22},{"sport":"Cycling","age":"35–44","rate":25},{"sport":"Cycling","age":"45–54","rate":24},{"sport":"Cycling","age":"55–64","rate":21},{"sport":"Cycling","age":"65+","rate":16},
    {"sport":"Running","age":"15–24","rate":29},{"sport":"Running","age":"25–34","rate":32},{"sport":"Running","age":"35–44","rate":27},{"sport":"Running","age":"45–54","rate":21},{"sport":"Running","age":"55–64","rate":14},{"sport":"Running","age":"65+","rate":8},
    {"sport":"Golf","age":"15–24","rate":7},{"sport":"Golf","age":"25–34","rate":10},{"sport":"Golf","age":"35–44","rate":14},{"sport":"Golf","age":"45–54","rate":18},{"sport":"Golf","age":"55–64","rate":22},{"sport":"Golf","age":"65+","rate":24},
    {"sport":"Tennis","age":"15–24","rate":16},{"sport":"Tennis","age":"25–34","rate":15},{"sport":"Tennis","age":"35–44","rate":14},{"sport":"Tennis","age":"45–54","rate":13},{"sport":"Tennis","age":"55–64","rate":11},{"sport":"Tennis","age":"65+","rate":9},
    {"sport":"AFL","age":"15–24","rate":18},{"sport":"AFL","age":"25–34","rate":12},{"sport":"AFL","age":"35–44","rate":8},{"sport":"AFL","age":"45–54","rate":5},{"sport":"AFL","age":"55–64","rate":3},{"sport":"AFL","age":"65+","rate":2},
    {"sport":"Netball","age":"15–24","rate":14},{"sport":"Netball","age":"25–34","rate":11},{"sport":"Netball","age":"35–44","rate":8},{"sport":"Netball","age":"45–54","rate":4},{"sport":"Netball","age":"55–64","rate":2},{"sport":"Netball","age":"65+","rate":1},
    {"sport":"Yoga","age":"15–24","rate":14},{"sport":"Yoga","age":"25–34","rate":18},{"sport":"Yoga","age":"35–44","rate":16},{"sport":"Yoga","age":"45–54","rate":13},{"sport":"Yoga","age":"55–64","rate":11},{"sport":"Yoga","age":"65+","rate":9}
  ]},
  "mark":{"type":"rect","cornerRadius":2},
  "encoding":{
    "y":{"field":"sport","type":"nominal","title":null,"sort":["Walking","Gym/Fitness","Running","Swimming","Cycling","Tennis","Yoga","Golf","AFL","Netball"],"axis":{"labelFontSize":10}},
    "x":{"field":"age","type":"ordinal","title":"Age Group","sort":["15–24","25–34","35–44","45–54","55–64","65+"],"axis":{"labelFontSize":10}},
    "color":{"field":"rate","type":"quantitative","title":"Rate (%)","scale":{"scheme":"blues"}},
    "tooltip":[{"field":"sport","type":"nominal","title":"Sport"},{"field":"age","type":"ordinal","title":"Age"},{"field":"rate","type":"quantitative","title":"Rate (%)"}]
  },
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart4 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":240,
  "data":{"values":[
    {"sport":"Rugby League","gap":38},{"sport":"Cricket","gap":34},{"sport":"AFL","gap":28},
    {"sport":"Rugby Union","gap":24},{"sport":"Golf","gap":18},{"sport":"Basketball","gap":8},
    {"sport":"Cycling","gap":6},{"sport":"Football (Soccer)","gap":5},{"sport":"Tennis","gap":2},
    {"sport":"Running","gap":1},{"sport":"Swimming","gap":-1},{"sport":"Walking","gap":-2},
    {"sport":"Gym/Fitness","gap":-4},{"sport":"Bushwalking","gap":-6},
    {"sport":"Yoga/Pilates","gap":-21},{"sport":"Dance","gap":-24},{"sport":"Netball","gap":-28}
  ]},
  "layer":[
    {"mark":{"type":"bar","cornerRadiusEnd":3},
     "encoding":{
       "y":{"field":"sport","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
       "x":{"field":"gap","type":"quantitative","title":"← More Female  |  More Male →","axis":{"labelFontSize":9,"titleFontSize":10}},
       "color":{"condition":{"test":"datum.gap > 0","value":"#2b8cbe"},"value":"#e07b8a"},
       "tooltip":[{"field":"sport","type":"nominal","title":"Sport"},{"field":"gap","type":"quantitative","title":"Gender Gap (M−F %)"}]
     }},
    {"mark":{"type":"rule","color":"#999","strokeWidth":1},"encoding":{"x":{"datum":0}}}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart5 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":380,"height":300,
  "data":{"values":[
    {"year":2016,"rate":61.4,"note":null},{"year":2017,"rate":62.1,"note":null},
    {"year":2018,"rate":63.2,"note":null},{"year":2019,"rate":63.8,"note":null},
    {"year":2020,"rate":59.2,"note":"COVID-19"},{"year":2021,"rate":61.7,"note":null},
    {"year":2022,"rate":63.1,"note":null},{"year":2023,"rate":63.9,"note":null},
    {"year":2024,"rate":64.3,"note":null}
  ]},
  "layer":[
    {"mark":{"type":"area","fill":"#2b8cbe","fillOpacity":0.12,"line":false},
     "encoding":{
       "x":{"field":"year","type":"ordinal"},
       "y":{"field":"rate","type":"quantitative","scale":{"domain":[56,67],"zero":false}},
       "y2":{"datum":56}
     }},
    {"mark":{"type":"line","color":"#2b8cbe","strokeWidth":2.5},
     "encoding":{
       "x":{"field":"year","type":"ordinal","title":"Year","axis":{"labelFontSize":10}},
       "y":{"field":"rate","type":"quantitative","title":"Rate (%)","scale":{"domain":[56,67],"zero":false},"axis":{"labelFontSize":10}},
       "tooltip":[{"field":"year","type":"ordinal","title":"Year"},{"field":"rate","type":"quantitative","title":"Rate (%)","format":".1f"}]
     }},
    {"mark":{"type":"point","filled":true,"size":70},
     "encoding":{
       "x":{"field":"year","type":"ordinal"},
       "y":{"field":"rate","type":"quantitative","scale":{"domain":[56,67]}},
       "color":{"condition":{"test":"datum.year === 2020","value":"#e07b8a"},"value":"#2b8cbe"}
     }},
    {"mark":{"type":"text","dy":-12,"fontSize":10,"fontWeight":"bold","color":"#e07b8a"},
     "transform":[{"filter":"datum.note != null"}],
     "encoding":{
       "x":{"field":"year","type":"ordinal"},
       "y":{"field":"rate","type":"quantitative","scale":{"domain":[56,67]}},
       "text":{"field":"note","type":"nominal"}
     }}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart6 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":380,"height":220,
  "data":{"values":[
    {"sport":"Walking","type":"Informal","pct":94},{"sport":"Walking","type":"Organised","pct":6},
    {"sport":"Running","type":"Informal","pct":81},{"sport":"Running","type":"Organised","pct":19},
    {"sport":"Cycling","type":"Informal","pct":79},{"sport":"Cycling","type":"Organised","pct":21},
    {"sport":"Swimming","type":"Informal","pct":72},{"sport":"Swimming","type":"Organised","pct":28},
    {"sport":"Gym/Fitness","type":"Informal","pct":68},{"sport":"Gym/Fitness","type":"Organised","pct":32},
    {"sport":"Tennis","type":"Informal","pct":58},{"sport":"Tennis","type":"Organised","pct":42},
    {"sport":"Golf","type":"Informal","pct":47},{"sport":"Golf","type":"Organised","pct":53},
    {"sport":"Basketball","type":"Informal","pct":44},{"sport":"Basketball","type":"Organised","pct":56},
    {"sport":"AFL","type":"Informal","pct":29},{"sport":"AFL","type":"Organised","pct":71},
    {"sport":"Netball","type":"Informal","pct":26},{"sport":"Netball","type":"Organised","pct":74},
    {"sport":"Cricket","type":"Informal","pct":22},{"sport":"Cricket","type":"Organised","pct":78}
  ]},
  "mark":{"type":"bar","cornerRadiusEnd":3},
  "encoding":{
    "y":{"field":"sport","type":"nominal","title":null,"sort":["Walking","Running","Cycling","Swimming","Gym/Fitness","Tennis","Golf","Basketball","AFL","Netball","Cricket"],"axis":{"labelFontSize":10}},
    "x":{"field":"pct","type":"quantitative","title":"Share (%)","axis":{"labelFontSize":9}},
    "color":{"field":"type","type":"nominal","scale":{"domain":["Informal","Organised"],"range":["#6baed6","#08519c"]},"legend":{"title":"Type","orient":"top","labelFontSize":10}},
    "order":{"field":"type","sort":"descending"},
    "tooltip":[{"field":"sport","type":"nominal","title":"Sport"},{"field":"type","type":"nominal","title":"Type"},{"field":"pct","type":"quantitative","title":"Share (%)"}]
  },
  "config":{"view":{"stroke":null},"background":"white"}
};

vegaEmbed('#chart1',chart1,{actions:false}).then(()=>console.log("C1 ✅")).catch(console.error);
vegaEmbed('#chart2',chart2,{actions:false}).then(()=>console.log("C2 ✅")).catch(console.error);
vegaEmbed('#chart3',chart3,{actions:false}).then(()=>console.log("C3 ✅")).catch(console.error);
vegaEmbed('#chart4',chart4,{actions:false}).then(()=>console.log("C4 ✅")).catch(console.error);
vegaEmbed('#chart5',chart5,{actions:false}).then(()=>console.log("C5 ✅")).catch(console.error);
vegaEmbed('#chart6',chart6,{actions:false}).then(()=>console.log("C6 ✅")).catch(console.error);

const chart7 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":220,
  "data":{"values":[
    {"reason":"Physical health",    "pct":84},
    {"reason":"Mental wellbeing",   "pct":71},
    {"reason":"Enjoyment / fun",    "pct":68},
    {"reason":"Weight management",  "pct":57},
    {"reason":"Social connection",  "pct":49},
    {"reason":"Stress relief",      "pct":44},
    {"reason":"Challenge / goals",  "pct":32},
    {"reason":"Family activity",    "pct":28},
    {"reason":"Competition",        "pct":21}
  ]},
  "layer":[
    {"mark":{"type":"rule","color":"#d0dde8","strokeWidth":2},
     "encoding":{
       "y":{"field":"reason","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
       "x":{"field":"pct","type":"quantitative","title":"% of participants","axis":{"labelFontSize":9}},
       "x2":{"datum":0}
     }},
    {"mark":{"type":"point","filled":true,"size":90,"color":"#2b8cbe"},
     "encoding":{
       "y":{"field":"reason","type":"nominal","sort":"-x","title":null},
       "x":{"field":"pct","type":"quantitative"},
       "tooltip":[
         {"field":"reason","type":"nominal","title":"Reason"},
         {"field":"pct","type":"quantitative","title":"% of participants"}
       ]
     }}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart8 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":220,
  "data":{"values":[
    {"barrier":"Not enough time",     "pct":43},
    {"barrier":"Cost too high",       "pct":31},
    {"barrier":"Injury / health",     "pct":28},
    {"barrier":"No nearby facilities","pct":22},
    {"barrier":"Work commitments",    "pct":21},
    {"barrier":"Family commitments",  "pct":19},
    {"barrier":"Not interested",      "pct":18},
    {"barrier":"No one to go with",   "pct":14},
    {"barrier":"Transport issues",    "pct":11}
  ]},
  "layer":[
    {"mark":{"type":"rule","color":"#f5c6cb","strokeWidth":2},
     "encoding":{
       "y":{"field":"barrier","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
       "x":{"field":"pct","type":"quantitative","title":"% of inactive Australians","axis":{"labelFontSize":9}},
       "x2":{"datum":0}
     }},
    {"mark":{"type":"point","filled":true,"size":90,"color":"#e07b8a"},
     "encoding":{
       "y":{"field":"barrier","type":"nominal","sort":"-x","title":null},
       "x":{"field":"pct","type":"quantitative"},
       "tooltip":[
         {"field":"barrier","type":"nominal","title":"Barrier"},
         {"field":"pct","type":"quantitative","title":"% citing this barrier"}
       ]
     }}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart9 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":220,
  "data":{"values":[
    {"sport":"Padel",          "change": 41},
    {"sport":"Pickleball",     "change": 38},
    {"sport":"Yoga/Pilates",   "change": 18},
    {"sport":"Bushwalking",    "change": 14},
    {"sport":"Cycling",        "change":  9},
    {"sport":"Running",        "change":  4},
    {"sport":"Swimming",       "change":  2},
    {"sport":"Golf",           "change": -3},
    {"sport":"Tennis",         "change": -5},
    {"sport":"AFL",            "change": -6},
    {"sport":"Cricket",        "change": -8},
    {"sport":"Lawn Bowls",     "change":-11}
  ]},
  "layer":[
    {"mark":{"type":"bar","cornerRadiusEnd":3},
     "encoding":{
       "y":{"field":"sport","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
       "x":{"field":"change","type":"quantitative","title":"YoY Change (%)","axis":{"labelFontSize":9}},
       "color":{
         "condition":{"test":"datum.change > 0","value":"#2b8cbe"},
         "value":"#e07b8a"
       },
       "tooltip":[
         {"field":"sport","type":"nominal","title":"Sport"},
         {"field":"change","type":"quantitative","title":"YoY Change (%)"}
       ]
     }},
    {"mark":{"type":"rule","color":"#999","strokeWidth":1},
     "encoding":{"x":{"datum":0}}}
  ],
  "config":{"view":{"stroke":null},"background":"white"}
};

const chart10 = {
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "width":340,"height":220,
  "data":{"values":[
    {"year":2016,"age":"15–24","rate":58.1},{"year":2018,"age":"15–24","rate":59.2},{"year":2020,"age":"15–24","rate":55.4},{"year":2022,"age":"15–24","rate":58.8},{"year":2024,"age":"15–24","rate":59.3},
    {"year":2016,"age":"25–44","rate":62.3},{"year":2018,"age":"25–44","rate":63.8},{"year":2020,"age":"25–44","rate":59.1},{"year":2022,"age":"25–44","rate":63.4},{"year":2024,"age":"25–44","rate":64.8},
    {"year":2016,"age":"45–64","rate":63.7},{"year":2018,"age":"45–64","rate":65.1},{"year":2020,"age":"45–64","rate":60.2},{"year":2022,"age":"45–64","rate":64.9},{"year":2024,"age":"45–64","rate":66.1},
    {"year":2016,"age":"65+",  "rate":59.4},{"year":2018,"age":"65+",  "rate":62.8},{"year":2020,"age":"65+",  "rate":56.3},{"year":2022,"age":"65+",  "rate":64.1},{"year":2024,"age":"65+",  "rate":67.2}
  ]},
  "mark":{"type":"line","point":true,"strokeWidth":2},
  "encoding":{
    "x":{"field":"year","type":"ordinal","title":"Year","axis":{"labelFontSize":10}},
    "y":{"field":"rate","type":"quantitative","title":"Rate (%)","scale":{"domain":[52,70],"zero":false},"axis":{"labelFontSize":10}},
    "color":{
      "field":"age","type":"nominal","title":"Age Group",
      "scale":{"range":["#c6dbef","#6baed6","#2b8cbe","#08519c"]},
      "legend":{"orient":"bottom-right","labelFontSize":10}
    },
    "tooltip":[
      {"field":"age","type":"nominal","title":"Age Group"},
      {"field":"year","type":"ordinal","title":"Year"},
      {"field":"rate","type":"quantitative","title":"Rate (%)","format":".1f"}
    ]
  },
  "config":{"view":{"stroke":null},"background":"white"}
};

vegaEmbed('#chart7',chart7,{actions:false}).then(()=>console.log("C7 ✅")).catch(console.error);
vegaEmbed('#chart8',chart8,{actions:false}).then(()=>console.log("C8 ✅")).catch(console.error);
vegaEmbed('#chart9',chart9,{actions:false}).then(()=>console.log("C9 ✅")).catch(console.error);
vegaEmbed('#chart10',chart10,{actions:false}).then(()=>console.log("C10 ✅")).catch(console.error);
