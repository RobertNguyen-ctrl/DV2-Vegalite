/* ============================================================================
   How Active Is Australia?  —  FIT2179 Data Visualisation 2
   All Vega-Lite specifications. Data loaded from js/ausplay_data.json
   Sources:  (1) AusPlay Survey 2025, Australian Sports Commission
             (2) ABS Estimated Resident Population, 30 Sep 2024
   ============================================================================ */

const NAVY  = "#0d2137";
const TEAL  = "#1e6fa5";
const SKY   = "#7ec8e3";
const CORAL = "#e07b8a";
const GRID  = "#e6edf4";
const SEQ   = ["#dbeaf5","#aed0e8","#6fa9d4","#2b7bb5","#0d4d7a"];

const CFG = {
  "font": "Inter, sans-serif",
  "view": {"stroke": null},
  "background": "transparent",
  "axis": {
    "labelFont":"Inter","titleFont":"Inter","labelColor":"#54657a",
    "titleColor":"#36475c","titleFontWeight":600,"titleFontSize":11,
    "labelFontSize":10,"gridColor":GRID,"domainColor":"#cbd6e2","tickColor":"#cbd6e2"
  },
  "legend":{
    "labelFont":"Inter","titleFont":"Inter","labelColor":"#54657a",
    "titleColor":"#36475c","titleFontSize":11,"labelFontSize":10
  },
  "title":{
    "font":"Fraunces, Georgia, serif","fontSize":13,"color":NAVY,
    "anchor":"start","fontWeight":600
  }
};

const embedOpts = {actions:false, renderer:"svg"};

function show(id, spec){
  const el = document.getElementById(id);
  if(!el){ console.warn("no element:", id); return; }
  function render(){
    const card = el.closest('.card') || el;
    const cardW = Math.max(card.clientWidth - 48, el.clientWidth - 4, 300);
    let s = spec._fitWidth ? spec._fitWidth(cardW) : spec;
    if(s && s.width === "container") s = Object.assign({}, s, {width: cardW});
    let specH = null;
    if(s){
      if(s.height) specH = s.height;
      else if(s.hconcat && s.hconcat[0] && s.hconcat[0].height) specH = s.hconcat[0].height;
      else if(s.vconcat && s.vconcat[0] && s.vconcat[0].height) specH = s.vconcat[0].height;
      else if(s.spec && s.spec.height) specH = s.spec.height;
    }
    vegaEmbed("#"+id, s, embedOpts).then(()=>{
      const svg = el.querySelector('svg.marks');
      if(svg && specH){ svg.style.width='100%'; svg.style.height=specH+'px'; svg.style.display='block'; }
    }).catch(console.error);
  }
  let attempts = 0;
  function tryRender(){
    const card = el.closest('.card') || el;
    if(card.clientWidth < 10 && attempts++ < 10){ setTimeout(tryRender, 80); return; }
    render();
    let t;
    new ResizeObserver(()=>{ clearTimeout(t); t=setTimeout(render,150); }).observe(card);
  }
  requestAnimationFrame(tryRender);
}

/* ── Inline data arrays (declared before fetch so they're always available) ── */

const ENTITY_TYPE_DATA = [
  {"activity":"Fitness/Gym","entity_type":"Sports club","pct":0.881,"total_organised":13.499},
  {"activity":"Fitness/Gym","entity_type":"Recreation club","pct":0.613,"total_organised":13.499},
  {"activity":"Fitness/Gym","entity_type":"Gym/fitness centre","pct":6.502,"total_organised":13.499},
  {"activity":"Fitness/Gym","entity_type":"Private/commercial","pct":2.949,"total_organised":13.499},
  {"activity":"Fitness/Gym","entity_type":"Personal trainer","pct":3.155,"total_organised":13.499},
  {"activity":"Fitness/Gym","entity_type":"Educational institution","pct":0.424,"total_organised":13.499},
  {"activity":"Pilates","entity_type":"Sports club","pct":0.084,"total_organised":5.56},
  {"activity":"Pilates","entity_type":"Recreation club","pct":0.076,"total_organised":5.56},
  {"activity":"Pilates","entity_type":"Gym/fitness centre","pct":1.732,"total_organised":5.56},
  {"activity":"Pilates","entity_type":"Private/commercial","pct":3.67,"total_organised":5.56},
  {"activity":"Pilates","entity_type":"Personal trainer","pct":0.434,"total_organised":5.56},
  {"activity":"Pilates","entity_type":"Educational institution","pct":0.067,"total_organised":5.56},
  {"activity":"Running/jogging","entity_type":"Sports club","pct":0.696,"total_organised":4.923},
  {"activity":"Running/jogging","entity_type":"Recreation club","pct":0.523,"total_organised":4.923},
  {"activity":"Running/jogging","entity_type":"Gym/fitness centre","pct":0.647,"total_organised":4.923},
  {"activity":"Running/jogging","entity_type":"Private/commercial","pct":0.322,"total_organised":4.923},
  {"activity":"Running/jogging","entity_type":"Personal trainer","pct":0.401,"total_organised":4.923},
  {"activity":"Running/jogging","entity_type":"Educational institution","pct":0.439,"total_organised":4.923},
  {"activity":"Walking (Recreational)","entity_type":"Sports club","pct":0.266,"total_organised":4.212},
  {"activity":"Walking (Recreational)","entity_type":"Recreation club","pct":0.351,"total_organised":4.212},
  {"activity":"Walking (Recreational)","entity_type":"Gym/fitness centre","pct":0.335,"total_organised":4.212},
  {"activity":"Walking (Recreational)","entity_type":"Private/commercial","pct":0.175,"total_organised":4.212},
  {"activity":"Walking (Recreational)","entity_type":"Personal trainer","pct":0.201,"total_organised":4.212},
  {"activity":"Walking (Recreational)","entity_type":"Educational institution","pct":0.361,"total_organised":4.212},
  {"activity":"Football/soccer","entity_type":"Sports club","pct":1.788,"total_organised":3.618},
  {"activity":"Football/soccer","entity_type":"Recreation club","pct":0.668,"total_organised":3.618},
  {"activity":"Football/soccer","entity_type":"Gym/fitness centre","pct":0.413,"total_organised":3.618},
  {"activity":"Football/soccer","entity_type":"Private/commercial","pct":0.21,"total_organised":3.618},
  {"activity":"Football/soccer","entity_type":"Personal trainer","pct":0.329,"total_organised":3.618},
  {"activity":"Football/soccer","entity_type":"Educational institution","pct":0.661,"total_organised":3.618},
  {"activity":"Yoga","entity_type":"Sports club","pct":0.071,"total_organised":2.907},
  {"activity":"Yoga","entity_type":"Recreation club","pct":0.117,"total_organised":2.907},
  {"activity":"Yoga","entity_type":"Gym/fitness centre","pct":0.862,"total_organised":2.907},
  {"activity":"Yoga","entity_type":"Private/commercial","pct":1.55,"total_organised":2.907},
  {"activity":"Yoga","entity_type":"Personal trainer","pct":0.173,"total_organised":2.907},
  {"activity":"Yoga","entity_type":"Educational institution","pct":0.082,"total_organised":2.907},
  {"activity":"Swimming","entity_type":"Sports club","pct":0.483,"total_organised":2.672},
  {"activity":"Swimming","entity_type":"Recreation club","pct":0.268,"total_organised":2.672},
  {"activity":"Swimming","entity_type":"Gym/fitness centre","pct":0.766,"total_organised":2.672},
  {"activity":"Swimming","entity_type":"Private/commercial","pct":0.343,"total_organised":2.672},
  {"activity":"Swimming","entity_type":"Personal trainer","pct":0.37,"total_organised":2.672},
  {"activity":"Swimming","entity_type":"Educational institution","pct":0.298,"total_organised":2.672},
  {"activity":"Basketball","entity_type":"Sports club","pct":1.002,"total_organised":2.301},
  {"activity":"Basketball","entity_type":"Recreation club","pct":0.429,"total_organised":2.301},
  {"activity":"Basketball","entity_type":"Gym/fitness centre","pct":0.298,"total_organised":2.301},
  {"activity":"Basketball","entity_type":"Private/commercial","pct":0.13,"total_organised":2.301},
  {"activity":"Basketball","entity_type":"Personal trainer","pct":0.165,"total_organised":2.301},
  {"activity":"Basketball","entity_type":"Educational institution","pct":0.484,"total_organised":2.301},
  {"activity":"Golf","entity_type":"Sports club","pct":1.362,"total_organised":2.257},
  {"activity":"Golf","entity_type":"Recreation club","pct":0.362,"total_organised":2.257},
  {"activity":"Golf","entity_type":"Gym/fitness centre","pct":0.087,"total_organised":2.257},
  {"activity":"Golf","entity_type":"Private/commercial","pct":0.201,"total_organised":2.257},
  {"activity":"Golf","entity_type":"Personal trainer","pct":0.199,"total_organised":2.257},
  {"activity":"Golf","entity_type":"Educational institution","pct":0.043,"total_organised":2.257},
  {"activity":"Bush walking","entity_type":"Sports club","pct":0.21,"total_organised":2.241},
  {"activity":"Bush walking","entity_type":"Recreation club","pct":0.311,"total_organised":2.241},
  {"activity":"Bush walking","entity_type":"Gym/fitness centre","pct":0.145,"total_organised":2.241},
  {"activity":"Bush walking","entity_type":"Private/commercial","pct":0.313,"total_organised":2.241},
  {"activity":"Bush walking","entity_type":"Personal trainer","pct":0.119,"total_organised":2.241},
  {"activity":"Bush walking","entity_type":"Educational institution","pct":0.262,"total_organised":2.241},
  {"activity":"Tennis","entity_type":"Sports club","pct":0.872,"total_organised":1.95},
  {"activity":"Tennis","entity_type":"Recreation club","pct":0.288,"total_organised":1.95},
  {"activity":"Tennis","entity_type":"Gym/fitness centre","pct":0.175,"total_organised":1.95},
  {"activity":"Tennis","entity_type":"Private/commercial","pct":0.171,"total_organised":1.95},
  {"activity":"Tennis","entity_type":"Personal trainer","pct":0.339,"total_organised":1.95},
  {"activity":"Tennis","entity_type":"Educational institution","pct":0.194,"total_organised":1.95},
  {"activity":"Netball","entity_type":"Sports club","pct":0.982,"total_organised":1.853},
  {"activity":"Netball","entity_type":"Recreation club","pct":0.374,"total_organised":1.853},
  {"activity":"Netball","entity_type":"Gym/fitness centre","pct":0.166,"total_organised":1.853},
  {"activity":"Netball","entity_type":"Private/commercial","pct":0.071,"total_organised":1.853},
  {"activity":"Netball","entity_type":"Personal trainer","pct":0.047,"total_organised":1.853},
  {"activity":"Netball","entity_type":"Educational institution","pct":0.249,"total_organised":1.853}
];

const AGE_COHORT_TREND_DATA = [
  {"period":"2023/24","age_group":"15–17","annual":84.23,"weekly":66.11,"three":46.77},
  {"period":"2024",   "age_group":"15–17","annual":83.18,"weekly":65.29,"three":44.6},
  {"period":"2024/25","age_group":"15–17","annual":84.81,"weekly":68.09,"three":49.46},
  {"period":"2025",   "age_group":"15–17","annual":87.43,"weekly":71.03,"three":53.08},
  {"period":"2023/24","age_group":"18–24","annual":87.44,"weekly":67.28,"three":48.09},
  {"period":"2024",   "age_group":"18–24","annual":87.26,"weekly":66.78,"three":46.94},
  {"period":"2024/25","age_group":"18–24","annual":87.78,"weekly":67.67,"three":47.06},
  {"period":"2025",   "age_group":"18–24","annual":88.75,"weekly":69.55,"three":48.91},
  {"period":"2023/24","age_group":"25–34","annual":89.24,"weekly":67.27,"three":47.27},
  {"period":"2024",   "age_group":"25–34","annual":90.55,"weekly":68.93,"three":48.68},
  {"period":"2024/25","age_group":"25–34","annual":89.91,"weekly":69.14,"three":49.22},
  {"period":"2025",   "age_group":"25–34","annual":89.43,"weekly":70.29,"three":50.09},
  {"period":"2023/24","age_group":"35–44","annual":87.56,"weekly":65.87,"three":44.89},
  {"period":"2024",   "age_group":"35–44","annual":88.17,"weekly":66.91,"three":46.01},
  {"period":"2024/25","age_group":"35–44","annual":88.79,"weekly":67.97,"three":47.0},
  {"period":"2025",   "age_group":"35–44","annual":88.7, "weekly":68.43,"three":47.64},
  {"period":"2023/24","age_group":"45–54","annual":86.41,"weekly":68.15,"three":49.81},
  {"period":"2024",   "age_group":"45–54","annual":87.93,"weekly":69.82,"three":50.89},
  {"period":"2024/25","age_group":"45–54","annual":88.26,"weekly":70.7, "three":51.53},
  {"period":"2025",   "age_group":"45–54","annual":89.25,"weekly":71.54,"three":52.65},
  {"period":"2023/24","age_group":"55–64","annual":84.22,"weekly":69.46,"three":53.32},
  {"period":"2024",   "age_group":"55–64","annual":86.01,"weekly":70.59,"three":53.72},
  {"period":"2024/25","age_group":"55–64","annual":86.06,"weekly":71.13,"three":54.84},
  {"period":"2025",   "age_group":"55–64","annual":87.45,"weekly":73.45,"three":56.86},
  {"period":"2023/24","age_group":"65+","annual":73.6, "weekly":60.27,"three":44.7},
  {"period":"2024",   "age_group":"65+","annual":75.48,"weekly":61.83,"three":45.71},
  {"period":"2024/25","age_group":"65+","annual":75.88,"weekly":61.98,"three":45.8},
  {"period":"2025",   "age_group":"65+","annual":75.43,"weekly":61.85,"three":45.99}
];

/* ============================================================================
   FETCH DATA — ALL chart functions live inside this callback
   ============================================================================ */
fetch("js/ausplay_data.json").then(r=>r.json()).then(DATA=>{

/* ---------------------------------------------------------------------------
   CHART 1 — INTERACTIVE CHOROPLETH MAP
   --------------------------------------------------------------------------- */
function mapSpec(){
  const states = DATA.states.map(s=>({
    state:s.state, abbr:s.abbr, annual:s.annual, weekly:s.weekly,
    three:s.three, active:s.active, pop:s.pop,
    activeM: +(s.active/1e6).toFixed(2)
  }));
  const spec = {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":500,"height":390,
    "params":[{
      "name":"metric","value":"annual",
      "bind":{
        "input":"select","name":"Show map by: ",
        "options":["annual","weekly","activeM"],
        "labels":["Yearly rate (%)","Weekly rate (%)","Active people (M)"]
      }
    }],
    "projection":{"type":"mercator","center":[134,-28],"scale":620},
    "layer":[
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "mark":{"type":"geoshape","fill":"#eef3f8","stroke":"#ffffff","strokeWidth":1.2}},
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "transform":[
         {"lookup":"properties.STATE_NAME",
          "from":{"data":{"values":states},"key":"state",
                  "fields":["abbr","annual","weekly","three","active","pop","activeM"]}},
         {"calculate":"metric==='annual'?datum.annual:metric==='weekly'?datum.weekly:datum.activeM","as":"val"}
       ],
       "mark":{"type":"geoshape","stroke":"#ffffff","strokeWidth":1.4},
       "encoding":{
         "color":{"field":"val","type":"quantitative",
                  "scale":{"range":SEQ},
                  "legend":{"orient":"bottom-left","title":null,"gradientLength":150,
                            "labelExpr":"metric==='activeM'?format(datum.value,'.1f')+'M':format(datum.value,'.0f')+'%'"}},
         "tooltip":[
           {"field":"properties.STATE_NAME","type":"nominal","title":"State / Territory"},
           {"field":"annual","type":"quantitative","title":"Active 1+/yr (%)","format":".1f"},
           {"field":"weekly","type":"quantitative","title":"Active weekly (%)","format":".1f"},
           {"field":"active","type":"quantitative","title":"Active people (est.)","format":","},
           {"field":"pop","type":"quantitative","title":"Population (ABS 2024)","format":","}
         ]
       }},
      {"data":{"values":DATA.state_emoji_labels},
       "mark":{"type":"text","align":"center","baseline":"middle","opacity":0.92},
       "encoding":{
         "longitude":{"field":"lon","type":"quantitative"},
         "latitude":{"field":"lat","type":"quantitative"},
         "text":{"field":"emoji","type":"nominal"},
         "size":{"field":"sz","type":"quantitative","scale":{"range":[8,25]},"legend":null},
         "tooltip":[
           {"field":"abbr","title":"State"},{"field":"rank","title":"Rank"},
           {"field":"activity","title":"Activity"},{"field":"pct","title":"Participation (%)","format":".1f"},
           {"field":"participants","title":"Est. participants","format":","}
         ]
       }}
    ],
    "config":CFG
  };
  spec._fitWidth = function(W){
    const s = JSON.parse(JSON.stringify(spec)); delete s._fitWidth;
    s.width = W; s.height = Math.round(W * 0.75);
    s.projection.scale = Math.round(620 * (W / 500));
    return s;
  };
  return spec;
}

/* ---------------------------------------------------------------------------
   CHART 2 — Top 20 activities (ranked bar)
   --------------------------------------------------------------------------- */
function topSportsSpec(){
  return {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":"container","height":440,
    "data":{"values":DATA.sports},
    "layer":[
      {"mark":{"type":"bar","cornerRadiusEnd":3},
       "encoding":{
         "y":{"field":"sport","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":10}},
         "x":{"field":"pct","type":"quantitative","title":"Participation rate (% of Australians 15+)"},
         "color":{"field":"pct","type":"quantitative","scale":{"range":SEQ},"legend":null},
         "tooltip":[{"field":"sport","title":"Activity"},{"field":"pct","title":"Participation (%)","format":".1f"},{"field":"rank","title":"Rank"}]
       }},
      {"mark":{"type":"text","align":"left","dx":4,"fontSize":9,"color":"#54657a"},
       "encoding":{
         "y":{"field":"sport","type":"nominal","sort":"-x"},
         "x":{"field":"pct","type":"quantitative"},
         "text":{"field":"pct","type":"quantitative","format":".1f"}
       }}
    ],
    "config":CFG
  };
}

/* ---------------------------------------------------------------------------
   CHART 3 — Sport × Age heatmap (Golf annotated)
   --------------------------------------------------------------------------- */
function ageHeatSpec(){
  const order = DATA.sports.slice(0,12).map(s=>s.sport);
  return {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":"container","height":320,
    "data":{"values":DATA.heatmap},
    "layer":[
      /* heatmap rects */
      {"mark":{"type":"rect","cornerRadius":2,"stroke":"#ffffff","strokeWidth":2},
       "encoding":{
         "y":{"field":"sport","type":"nominal","title":null,"sort":order,"axis":{"labelFontSize":10}},
         "x":{"field":"age","type":"ordinal","title":"Age group",
              "sort":["15-17","18-24","25-34","35-44","45-54","55-64","65+"],
              "axis":{"labelAngle":0,"labelFontSize":10}},
         "color":{"field":"pct","type":"quantitative","title":"Rate (%)","scale":{"range":["#fdd9a0","#f5a623","#c45c00"],"domain":[0,50]}},
         "tooltip":[{"field":"sport","title":"Activity"},{"field":"age","title":"Age"},{"field":"pct","title":"Rate (%)","format":".1f"}]
       }},
      /* highlight entire Golf row with coral outline */
      /* annotation label pinned to Golf / 55-64 cell, inside chart */
      {"data":{"values":[{"sport":"Golf","age":"55-64"}]},
       "mark":{"type":"text","align":"right","baseline":"middle","dx":-4,"dy":0,
               "fontSize":9,"fontWeight":700,"color":"#c45c6a"},
       "encoding":{
         "y":{"field":"sport","type":"nominal","sort":order},
         "x":{"field":"age","type":"ordinal","sort":["15-17","18-24","25-34","35-44","45-54","55-64","65+"]},
         "text":{"value":"↗ grows with age"}
       }}
    ],
    "config":CFG
  };
}

/* ---------------------------------------------------------------------------
   CHART 4 — Gender butterfly (HTML, emoji icons, sorted by gap)
   --------------------------------------------------------------------------- */
function initGenderButterfly(){
  const host = document.getElementById('chart-gender');
  if(!host) return;

  // Sports with avg participation >= 1%, mapped to emoji
  const EMOJI = {
    "Walking (Recreational)":"🚶","Pilates":"🧘","Yoga":"🧘","Fitness/Gym":"🏋️",
    "Bush walking":"🥾","Running/jogging":"🏃","Swimming":"🏊","Cycling":"🚴",
    "Football/soccer":"⚽","Golf":"⛳","Basketball":"🏀","Tennis":"🎾",
    "Netball":"🏐","Cricket":"🏏","Australian football":"🏉","Badminton":"🏸",
    "Surfing":"🏄","Dancing (recreational)":"💃","Table tennis":"🏓",
    "Athletics, track and field":"🏅","Volleyball (indoor and outdoor)":"🏐",
    "Pickleball/padel":"🎾","DanceSport":"💃","Fishing (recreational)":"🎣"
  };

  // Filter to sports with avg >= 1%, sort by gap ascending (most female → most male)
  const rows = DATA.gendergap
    .filter(d => (d.male + d.female) / 2 >= 1.0)
    .sort((a,b) => a.gap - b.gap);

  const maxAbs = 16; // domain: -16 to +8
  const totalRange = 24; // total pp range shown

  function pxLeft(gap){
    // centre axis is at 16/24 = 66.7% from left
    const centrePct = (maxAbs / totalRange) * 100;
    return centrePct + (gap / totalRange) * 100;
  }

  const centrePct = (maxAbs / totalRange) * 100;

  let html = `
  <div style="position:relative;padding:0 0 8px;">
    <!-- header labels -->
    <div style="display:flex;justify-content:space-between;font-size:10px;font-weight:600;
         color:#54657a;margin-bottom:10px;padding-left:170px;">
      <span style="color:#e07b8a;">← More female</span>
      <span style="color:#8497ab;font-style:italic;">Equal</span>
      <span style="color:#1e6fa5;">More male →</span>
    </div>
    <!-- axis ticks -->
    <div style="position:relative;height:18px;margin-left:170px;margin-bottom:4px;border-bottom:1px solid #e2e9f1;">
      ${[-15,-10,-5,0,5].map(v=>{
        const pct = (maxAbs / totalRange) * 100 + (v / totalRange) * 100;
        return `<div style="position:absolute;left:${pct}%;transform:translateX(-50%);
          font-size:9px;color:#8497ab;bottom:2px;">${v > 0 ? '+'+v : v}</div>
          <div style="position:absolute;left:${pct}%;bottom:0;width:1px;height:6px;background:#e2e9f1;"></div>`;
      }).join('')}
    </div>`;

  rows.forEach(d => {
    const emoji = EMOJI[d.sport] || '🏅';
    const leftPct  = pxLeft(Math.min(d.gap, 0));
    const rightPct = pxLeft(Math.max(d.gap, 0));
    const barLeft  = Math.min(leftPct, centrePct);
    const barWidth = Math.abs(d.gap) / totalRange * 100;
    const isFemale = d.gap < 0;
    const barColor = isFemale ? '#e07b8a' : '#1e6fa5';
    const gapLabel = (d.gap > 0 ? '+' : '') + d.gap.toFixed(1) + 'pp';

    html += `
    <div style="display:flex;align-items:center;margin-bottom:5px;min-height:10px;"
         title="${d.sport}: Female ${d.female.toFixed(1)}%, Male ${d.male.toFixed(1)}%, Gap ${gapLabel}">
      <!-- label -->
      <div style="width:162px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;
           gap:5px;padding-right:8px;">
        <span style="font-size:13px;line-height:1;">${emoji}</span>
        <span style="font-size:10px;color:#34465b;text-align:right;line-height:1.2;">${d.sport}</span>
      </div>
      <!-- bar track -->
      <div style="flex:1;position:relative;height:20px;background:#f4f7fb;border-radius:3px;">
        <!-- equal zone shading -->
        <div style="position:absolute;left:${centrePct - (2/totalRange*100)}%;
             width:${(4/totalRange*100)}%;height:100%;background:#eaeff5;border-radius:2px;"></div>
        <!-- centre line -->
        <div style="position:absolute;left:${centrePct}%;top:0;width:1.5px;height:100%;
             background:#8497ab;opacity:0.5;"></div>
        <!-- bar -->
        <div style="position:absolute;left:${barLeft}%;width:${barWidth}%;height:100%;
             background:${barColor};border-radius:3px;opacity:0.88;"></div>
        <!-- gap label on bar end -->
        <div style="position:absolute;${isFemale?'left':'left'}:${isFemale ? barLeft-0.5 : barLeft+barWidth+0.5}%;
             top:50%;transform:translateY(-50%) ${isFemale?'translateX(-100%)':'translateX(0)'};
             font-size:8.5px;font-weight:700;color:${barColor};white-space:nowrap;padding:0 3px;">
          ${gapLabel}
        </div>
      </div>
    </div>`;
  });

  html += `
    <!-- legend -->
    <div style="display:flex;gap:18px;margin-top:12px;margin-left:170px;font-size:10.5px;">
      <div style="display:flex;align-items:center;gap:5px;">
        <div style="width:20px;height:10px;background:#e07b8a;border-radius:2px;"></div>
        <span style="color:#54657a;">Female-skewed</span>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <div style="width:20px;height:10px;background:#e8eef4;border:1px solid #8497ab;border-radius:2px;"></div>
        <span style="color:#54657a;">±2pp (roughly equal)</span>
      </div>
      <div style="display:flex;align-items:center;gap:5px;">
        <div style="width:20px;height:10px;background:#1e6fa5;border-radius:2px;"></div>
        <span style="color:#54657a;">Male-skewed</span>
      </div>
    </div>
  </div>`;

  host.innerHTML = html;
}
/* ---------------------------------------------------------------------------
   CHART 5 — BUMP chart (FIXED: rank direction label + highlight colours)
   --------------------------------------------------------------------------- */
function bumpSpec(){
  const periods = ["2023/24","2024/25","2025"];
  const byS = {};
  DATA.bump.forEach(d=>{ (byS[d.sport] = byS[d.sport]||{})[d.period] = d.rank; });
  const moved = {};
  Object.keys(byS).forEach(s=>{
    const a=byS[s]["2023/24"], b=byS[s]["2025"];
    moved[s] = (a!=null&&b!=null) ? a-b : 0;
  });
  const rows = DATA.bump.map(d=>({
    ...d,
    move: moved[d.sport],
    dir: moved[d.sport]>0?"Rose":moved[d.sport]<0?"Fell":"Steady"
  }));

  return {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":"container","height":370,
    "data":{"values":rows},
    "title":{
      "text":"",
      "subtitle":"Rank 1 = most popular (top of chart). Blue = climbed, coral = slipped.",
      "subtitleFontSize":10.5,"subtitleColor":"#54657a",
      "subtitleFontStyle":"italic","subtitlePadding":6
    },
    "encoding":{
      "x":{"field":"period","type":"ordinal","title":null,"sort":periods,
           "scale":{"padding":0.18},
           "axis":{"labelFontSize":11,"labelFontWeight":600,"domain":false,"ticks":false}},
      "y":{"field":"rank","type":"quantitative",
           "scale":{"reverse":true,"domain":[1,12]},
           "axis":{
             "title":"Rank (1 = most popular, at top)",
             "titleFontSize":10,"titleColor":"#54657a",
             "values":[1,3,5,7,9,11],"grid":true,"gridColor":GRID
           }},
      "detail":{"field":"sport","type":"nominal"}
    },
    "layer":[
      /* rank-1 band */
      {"mark":{"type":"rect"},
       "encoding":{
         "y":{"datum":0.5,"type":"quantitative"},
         "y2":{"datum":1.5},
         "color":{"value":"#f4f7fb"},
         "opacity":{"value":1}
       }},
      /* "Most popular" annotation */
      {"mark":{"type":"text","align":"right","baseline":"middle","fontSize":9,"fontStyle":"italic","dx":-8},
       "encoding":{
         "x":{"datum":"2023/24","type":"ordinal"},
         "y":{"datum":1,"type":"quantitative"},
         "text":{"value":"↑ Most popular"},
         "color":{"value":"#2d7a4f"}
       }},
      /* "Least shown" annotation */
      {"mark":{"type":"text","align":"right","baseline":"middle","fontSize":9,"fontStyle":"italic","dx":-8},
       "encoding":{
         "x":{"datum":"2023/24","type":"ordinal"},
         "y":{"datum":12,"type":"quantitative"},
         "text":{"value":"↓ Least popular"},
         "color":{"value":"#c45c6a"}
       }},
      /* lines */
      {"mark":{"type":"line","strokeWidth":2.4,"opacity":0.85,"interpolate":"monotone"},
       "encoding":{
         "color":{
           "condition":[
             {"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'","value":TEAL},
             {"test":"datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":CORAL}
           ],
           "value":"#c8d8e8"
         },
         "opacity":{
           "condition":[{"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'||datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":1}],
           "value":0.3
         }
       }},
      /* dots */
      {"mark":{"type":"point","filled":true,"size":70,"opacity":1},
       "encoding":{
         "color":{
           "condition":[
             {"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'","value":TEAL},
             {"test":"datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":CORAL}
           ],
           "value":"#c8d8e8"
         },
         "opacity":{
           "condition":[{"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'||datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":1}],
           "value":0.3
         },
         "tooltip":[
           {"field":"sport","title":"Activity"},{"field":"period","title":"Period"},
           {"field":"rank","title":"Rank"},{"field":"pct","title":"Participation %","format":".1f"}
         ]
       }},
      /* right-side labels */
      {"transform":[{"filter":"datum.period==='2025'"}],
       "mark":{"type":"text","align":"left","dx":8,"fontSize":9.5},
       "encoding":{
         "text":{"field":"sport","type":"nominal"},
         "color":{
           "condition":[
             {"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'","value":"#0d4d7a"},
             {"test":"datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":"#c45c6a"}
           ],
           "value":"#90a2b6"
         },
         "fontWeight":{
           "condition":[{"test":"datum.sport==='Pilates'||datum.sport==='Fitness/Gym'||datum.sport==='Basketball'||datum.sport==='Yoga'||datum.sport==='Football/soccer'","value":700}],
           "value":400
         }
       }},
      /* left rank numbers */
      {"transform":[{"filter":"datum.period==='2023/24'"}],
       "mark":{"type":"text","align":"right","dx":-8,"fontSize":9,"color":"#9aa9ba"},
       "encoding":{"text":{"field":"rank","type":"quantitative"}}}
    ],
    "resolve":{"scale":{"color":"shared"}},
    "config":Object.assign({},CFG,{"view":{"stroke":null,"continuousWidth":400}})
  };
}

/* ---------------------------------------------------------------------------
   CHART 6 — Lifecycle layered area (org vs informal)
   --------------------------------------------------------------------------- */
function lifecycleSpec(){
  const rows = [];
  DATA.orgnature.forEach(d=>{
    rows.push({age:d.age, type:"Informal only", pct:d.informal});
    rows.push({age:d.age, type:"Mixed",         pct:d.mixed});
    rows.push({age:d.age, type:"Organised only",pct:d.organised});
  });
  return {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":"container","height":300,
    "data":{"values":rows},
    "mark":{"type":"area","interpolate":"monotone","line":{"strokeWidth":1.5},"opacity":0.9},
    "encoding":{
      "x":{"field":"age","type":"ordinal","title":"Age group",
           "sort":["15-17","18-24","25-34","35-44","45-54","55-64","65+"],
           "axis":{"labelAngle":0}},
      "y":{"field":"pct","type":"quantitative","title":"Share of population (%)","stack":true},
      "color":{"field":"type","type":"nominal",
               "scale":{"domain":["Informal only","Mixed","Organised only"],"range":[SKY,"#9fb8cc",TEAL]},
               "legend":{"orient":"top","title":null,"direction":"horizontal"}},
      "tooltip":[{"field":"age","title":"Age"},{"field":"type","title":"Setting"},{"field":"pct","title":"Share (%)","format":".1f"}]
    },
    "config":CFG
  };
}

/* ---------------------------------------------------------------------------
   CHART 7 — Entity-type stacked bar (NEW — Fig 11, Section 04)
   --------------------------------------------------------------------------- */
function entityTypeSpec(){
  return {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":"container","height":400,
    "data":{"values":ENTITY_TYPE_DATA},
    "transform":[{"calculate":"datum.entity_type==='Sports club'||datum.entity_type==='Recreation club'?'Club-based':datum.entity_type==='Gym/fitness centre'||datum.entity_type==='Private/commercial'?'Commercial studio':'Other (PT / school)'","as":"venue_group"}],"mark":{"type":"bar","tooltip":true},
    "encoding":{
      "y":{
        "field":"activity","type":"nominal",
        "sort":{"field":"total_organised","order":"descending"},
        "axis":{"title":null,"labelFontSize":11,"labelColor":"#34465b","ticks":false,"domain":false,"labelLimit":170}
      },
      "x":{
        "field":"pct","type":"quantitative","stack":"zero",
        "axis":{"title":"Adults participating via this venue type (%)","titleFontSize":10,"titleColor":"#54657a",
                "labelFontSize":10,"grid":true,"gridColor":GRID}
      },
      "color":{
        "field":"venue_group","type":"nominal",
        "sort":["Club-based","Commercial studio","Other (PT / school)"],
        "scale":{
          "domain":["Club-based","Commercial studio","Other (PT / school)"],
          "range":["#1e6fa5","#e07b8a","#b8c8d8"]
        },
        "legend":{
          "title":"Venue type","titleFontSize":10,"titleColor":NAVY,
          "labelFontSize":10,"labelColor":"#34465b",
          "orient":"bottom","direction":"horizontal","symbolSize":100
        }
      },
      "tooltip":[
        {"field":"activity","title":"Activity"},
        {"field":"entity_type","title":"Venue type"},
        {"field":"venue_group","title":"Group"},
        {"field":"pct","title":"% of all adults","format":".2f"}
      ]
    },
    "config":CFG
  };
}

/* ---------------------------------------------------------------------------
   STATE EXPLORER (coordinated map + HTML bars)
   --------------------------------------------------------------------------- */
function stateExplorerSpec(){
  const states = DATA.states.map(s=>({
    state:s.state, abbr:s.abbr, annual:s.annual, weekly:s.weekly, active:s.active, pop:s.pop
  }));

  function renderBars(abbr){
    const acts = DATA.state_activities.filter(r=>r.abbr===abbr).sort((a,b)=>b.pct-a.pct).slice(0,8);
    const bars = DATA.state_barriers.filter(r=>r.abbr===abbr).sort((a,b)=>b.pct-a.pct).slice(0,8);
    const maxAct = Math.max(...acts.map(r=>r.pct), 1);
    const maxBar = Math.max(...bars.map(r=>r.pct), 1);
    const stateName = (DATA.states.find(s=>s.abbr===abbr)||{state:abbr}).state;

    function barRow(label, pct, max, color){
      const w = Math.max(2, Math.round(pct/max*100));
      return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">'
        +'<div style="width:130px;font-size:10px;color:#54657a;text-align:right;flex-shrink:0;line-height:1.2;">'+label+'</div>'
        +'<div style="flex:1;position:relative;height:22px;background:#f0f4f8;border-radius:3px;">'
        +'<div style="position:absolute;left:0;top:0;height:100%;width:'+w+'%;background:'+color+';border-radius:3px;"></div>'
        +'</div>'
        +'<div style="width:32px;font-size:10px;font-weight:600;color:#36475c;flex-shrink:0;">'+pct.toFixed(1)+'%</div>'
        +'</div>';
    }

    const el = document.getElementById('chart-stateexp-bars');
    if(!el) return;
    el.innerHTML =
      '<div style="margin-bottom:18px;">'
      +'<div style="font-size:12px;font-weight:600;color:#1e6fa5;margin-bottom:10px;">Top activities — '+stateName+'</div>'
      +acts.map(r=>barRow(r.activity, r.pct, maxAct, '#2b7bb5')).join('')+'</div>'
      +'<div>'
      +'<div style="font-size:12px;font-weight:600;color:#c45c6a;margin-bottom:10px;">Top barriers — '+stateName+'</div>'
      +bars.map(r=>barRow(r.barrier, r.pct, maxBar, '#e07b8a')).join('')+'</div>';
  }

  const mapSpec = {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "width":300,"height":270,
    "projection":{"type":"mercator","center":[134,-28],"scale":370},
    "layer":[
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "mark":{"type":"geoshape","fill":"#eef3f8","stroke":"#fff","strokeWidth":1}},
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "transform":[{"lookup":"properties.STATE_NAME",
         "from":{"data":{"values":states},"key":"state","fields":["abbr","annual","active"]}}],
       "params":[{"name":"picked","select":{"type":"point","fields":["abbr"]},"value":[{"abbr":"VIC"}]}],
       "mark":{"type":"geoshape","stroke":"#fff","strokeWidth":1.5,"cursor":"pointer"},
       "encoding":{
         "color":{"value":"#6baed6"},
         "opacity":{"condition":{"param":"picked","value":1},"value":0.35},
         "tooltip":[{"field":"properties.STATE_NAME","type":"nominal","title":"State"},
                    {"field":"annual","title":"Annual (%)","format":".1f"},
                    {"field":"active","title":"Active people","format":","}]
       }}
    ],
    "config":CFG
  };

  return {mapSpec, renderBars};
}

function initStateExplorer(){
  const {mapSpec, renderBars} = stateExplorerSpec();
  const mapEl = document.getElementById('chart-stateexp-map');
  if(!mapEl) return;
  renderBars('VIC');

  const card = mapEl.closest('.card') || mapEl;
  const W = Math.max(card.clientWidth - 48, 300);
  const mW = Math.round(W * 0.36);
  mapSpec.width = mW;
  mapSpec.height = Math.round(mW * 0.92);
  mapSpec.projection.scale = Math.round(370*(mW/300));

  vegaEmbed('#chart-stateexp-map', mapSpec, {actions:false, renderer:'svg'}).then(result=>{
    const v = result.view;
    const trySignals = ['picked_tuple','picked','picked_store'];
    trySignals.forEach(sig=>{
      try {
        v.addSignalListener(sig, (name, val)=>{
          if(!val) return;
          let abbr = null;
          if(Array.isArray(val) && val[0] && val[0].abbr) abbr = val[0].abbr;
          else if(val && val.abbr) abbr = Array.isArray(val.abbr)?val.abbr[0]:val.abbr;
          else if(val && val.values && val.values[0]) abbr = val.values[0].abbr;
          if(abbr) renderBars(abbr);
        });
      } catch(e){}
    });
    const svgEl = document.querySelector('#chart-stateexp-map svg');
    if(svgEl){
      svgEl.addEventListener('click', ()=>{
        setTimeout(()=>{
          trySignals.forEach(sig=>{
            try {
              const val = v.signal(sig);
              if(!val) return;
              let abbr = null;
              if(Array.isArray(val) && val[0] && val[0].abbr) abbr = val[0].abbr;
              else if(val && val.abbr) abbr = Array.isArray(val.abbr)?val.abbr[0]:val.abbr;
              else if(val && val.values && val.values[0]) abbr = val.values[0].abbr;
              if(abbr) renderBars(abbr);
            } catch(e){}
          });
        }, 50);
      });
    }
  }).catch(console.error);
}

/* ---------------------------------------------------------------------------
   BIVARIATE CHOROPLETH
   --------------------------------------------------------------------------- */
function bivariateMapSpec(){
  const PAL = {
    "0-0":"#b0b0d0","1-0":"#6699cc","2-0":"#1a5fa6",
    "0-1":"#cc88aa","1-1":"#8877aa","2-1":"#3355aa",
    "0-2":"#cc2266","1-2":"#882266","2-2":"#221155"
  };
  const states = DATA.states.map(s=>({
    state:s.state, abbr:s.abbr, annual:s.annual,
    committed:s.committed, bi_class:s.bi_class, col:PAL[s.bi_class], pop:s.pop, active:s.active
  }));
  const legend = [];
  for(let r=0;r<3;r++) for(let c=0;c<3;c++) legend.push({rate:c,comm:r,bi_class:`${c}-${r}`,col:PAL[`${c}-${r}`]});
  const hov = {"name":"hovcell","select":{"type":"point","fields":["bi_class"],"on":"pointerover","clear":"pointerout"}};

  const mapView = {
    "width":360,"height":280,
    "projection":{"type":"mercator","center":[133.5,-27],"scale":432},
    "layer":[
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "mark":{"type":"geoshape","fill":"#f0f4f8","stroke":"#fff","strokeWidth":1}},
      {"data":{"url":"data/aus_states.topojson","format":{"type":"topojson","feature":"states"}},
       "transform":[{"lookup":"properties.STATE_NAME",
         "from":{"data":{"values":states},"key":"state",
                 "fields":["abbr","annual","committed","bi_class","col","active","pop"]}}],
       "mark":{"type":"geoshape","stroke":"#fff","strokeWidth":1.4},
       "encoding":{
         "color":{"field":"col","type":"nominal","scale":null,"legend":null},
         "opacity":{"condition":{"param":"hovcell","value":1},"value":0.25},
         "tooltip":[{"field":"abbr","title":"State"},
                    {"field":"annual","title":"Active 1+/yr (%)","format":".1f"},
                    {"field":"committed","title":"Active 3+/week (%)","format":".1f"}]
       }}
    ]
  };
  const legendView = {
    "width":120,"height":120,"data":{"values":legend},"params":[hov],
    "layer":[{
      "mark":{"type":"rect","stroke":"#fff","strokeWidth":2,"cursor":"pointer"},
      "encoding":{
        "x":{"field":"rate","type":"ordinal","title":"Participation →",
             "axis":{"labelExpr":"['Low','Mid','High'][datum.value]","labelFontSize":8,"titleFontSize":9}},
        "y":{"field":"comm","type":"ordinal","sort":"descending","title":"Commitment →",
             "axis":{"labelExpr":"['Low','Mid','High'][datum.value]","labelFontSize":8,"titleFontSize":9}},
        "color":{"field":"col","type":"nominal","scale":null,"legend":null},
        "opacity":{"condition":{"param":"hovcell","value":1},"value":0.55}
      }
    }]
  };

  const spec = {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "hconcat":[mapView,legendView],"spacing":30,"config":CFG
  };
  spec._fitWidth = function(W){
    const s = JSON.parse(JSON.stringify(spec)); delete s._fitWidth;
    const lW = 140, mW = W - lW - 32;
    s.hconcat[0].width = mW;
    s.hconcat[0].height = Math.round(mW * 0.82);
    s.hconcat[0].projection = {"type":"mercator","center":[110,-13],"scale":Math.round(620*(mW/500))};
    s.hconcat[1].width = lW; s.hconcat[1].height = lW;
    return s;
  };
  return spec;
}

/* ---------------------------------------------------------------------------
   SPORT EXPLORER — 4 independent charts driven by a shared HTML <select>
   Vega-Lite nested hconcat/vconcat doesn't scale well to full card width,
   so we render four separate charts in a CSS grid and update them on change.
   --------------------------------------------------------------------------- */
function initSportExplorer(){
  const host = document.getElementById('chart-sportexp');
  if(!host) return;

  // Build HTML shell: dropdown + 2×2 grid of named divs
  host.innerHTML = `
    <div style="margin-bottom:14px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
      <label style="font-size:13px;font-weight:600;color:#0d2137;">Choose an activity:</label>
      <select id="sx-select" style="font-family:Inter,sans-serif;font-size:13px;padding:6px 28px 6px 12px;
        border:1.5px solid #c8d8e8;border-radius:8px;background:#fff;color:#0d2137;cursor:pointer;min-width:220px;">
        ${DATA.sx_list.map(s=>`<option value="${s}"${s==='Fitness/Gym'?' selected':''}>${s}</option>`).join('')}
      </select>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px 28px;" id="sx-grid">
      <div>
        <div style="font-size:11px;font-weight:600;color:#36475c;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;">Participation across age</div>
        <div id="sx-age" style="width:100%;"></div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;color:#36475c;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;">Trend, 2023/24 → 2025</div>
        <div id="sx-trend" style="width:100%;"></div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;color:#36475c;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;">Gender</div>
        <div id="sx-gender" style="width:100%;"></div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:600;color:#36475c;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em;">Structure</div>
        <div id="sx-setting" style="width:100%;"></div>
      </div>
    </div>`;

  const AGE_SORT = ["15-17","18-24","25-34","35-44","45-54","55-64","65+"];

  function panelW(){
    const grid = document.getElementById('sx-grid');
    if(!grid) return 400;
    return Math.max(Math.floor((grid.clientWidth - 28) / 2), 200);
  }

  function renderAll(sport){
    const ageData    = DATA.sx_age.filter(d=>d.sport===sport);
    const trendData  = DATA.sx_trend.filter(d=>d.sport===sport);
    const genderData = DATA.sx_gender.filter(d=>d.sport===sport);
    const settData   = DATA.sx_setting.filter(d=>d.sport===sport);
    const W = panelW();
    const H1 = Math.round(W * 0.52);
    const H2 = 120;

    // ── Age curve ──
    vegaEmbed('#sx-age', {
      "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
      "width":W,"height":H1,"data":{"values":ageData},
      "layer":[
        {"mark":{"type":"area","interpolate":"monotone","color":SKY,"opacity":0.25},
         "encoding":{
           "x":{"field":"age","type":"ordinal","sort":AGE_SORT,"title":null,"axis":{"labelAngle":-35,"labelFontSize":10}},
           "y":{"field":"pct","type":"quantitative","title":"% of adults","axis":{"titleFontSize":10}}}},
        {"mark":{"type":"line","interpolate":"monotone","color":TEAL,"strokeWidth":2.5,
                 "point":{"filled":true,"size":50,"color":TEAL}},
         "encoding":{
           "x":{"field":"age","type":"ordinal","sort":AGE_SORT},
           "y":{"field":"pct","type":"quantitative"},
           "tooltip":[{"field":"age","title":"Age"},{"field":"pct","title":"Rate (%)","format":".1f"}]}},
        {"mark":{"type":"text","dy":-11,"fontSize":9.5,"color":"#0d4d7a","fontWeight":600},
         "encoding":{
           "x":{"field":"age","type":"ordinal","sort":AGE_SORT},
           "y":{"field":"pct","type":"quantitative"},
           "text":{"field":"pct","format":".1f"}}}
      ],
      "config":CFG
    }, embedOpts).catch(console.error);

    // ── Trend ──
    vegaEmbed('#sx-trend', {
      "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
      "width":W,"height":H1,"data":{"values":trendData},
      "layer":[
        {"mark":{"type":"line","color":TEAL,"strokeWidth":2.5,
                 "point":{"filled":true,"size":60,"color":TEAL}},
         "encoding":{
           "x":{"field":"period","type":"ordinal","sort":["2023/24","2024/25","2025"],"title":null,
                "axis":{"labelFontSize":11,"labelFontWeight":600}},
           "y":{"field":"pct","type":"quantitative","title":"% of adults",
                "scale":{"zero":false,"padding":8},"axis":{"titleFontSize":10}},
           "tooltip":[{"field":"period","title":"Period"},{"field":"pct","title":"%","format":".2f"}]}},
        {"mark":{"type":"text","dy":-12,"fontSize":10,"color":"#0d4d7a","fontWeight":700},
         "encoding":{
           "x":{"field":"period","type":"ordinal","sort":["2023/24","2024/25","2025"]},
           "y":{"field":"pct","type":"quantitative"},
           "text":{"field":"pct","format":".1f"}}}
      ],
      "config":CFG
    }, embedOpts).catch(console.error);

    // ── Gender ──
    vegaEmbed('#sx-gender', {
      "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
      "width":W,"height":H2,"data":{"values":genderData},
      "mark":{"type":"bar","cornerRadiusEnd":4},
      "encoding":{
        "y":{"field":"gender","type":"nominal","title":null,
             "axis":{"labelFontSize":11,"labelColor":"#34465b","ticks":false,"domain":false}},
        "x":{"field":"pct","type":"quantitative","title":"% of that gender",
             "axis":{"titleFontSize":10,"labelFontSize":10}},
        "color":{"field":"gender","type":"nominal",
                 "scale":{"domain":["Female","Male"],"range":[CORAL,TEAL]},"legend":null},
        "tooltip":[{"field":"gender","title":"Gender"},{"field":"pct","title":"%","format":".1f"}]
      },
      "config":CFG
    }, embedOpts).catch(console.error);

    // ── Setting ──
    vegaEmbed('#sx-setting', {
      "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
      "width":W,"height":H2,"data":{"values":settData},
      "mark":{"type":"bar","cornerRadiusEnd":4},
      "encoding":{
        "y":{"field":"type","type":"nominal","title":null,"sort":["Informal","Organised"],
             "axis":{"labelFontSize":11,"labelColor":"#34465b","ticks":false,"domain":false}},
        "x":{"field":"pct","type":"quantitative","title":"% of participants",
             "scale":{"domain":[0,100]},"axis":{"titleFontSize":10,"labelFontSize":10}},
        "color":{"field":"type","type":"nominal",
                 "scale":{"domain":["Informal","Organised"],"range":[SKY,TEAL]},"legend":null},
        "tooltip":[{"field":"type","title":"Setting"},{"field":"pct","title":"%","format":".1f"}]
      },
      "config":CFG
    }, embedOpts).catch(console.error);
  }

  // Initial render
  renderAll('Fitness/Gym');

  // Dropdown change
  document.getElementById('sx-select').addEventListener('change', e=>{
    renderAll(e.target.value);
  });

  // Re-render on resize
  let resizeT;
  new ResizeObserver(()=>{
    clearTimeout(resizeT);
    resizeT = setTimeout(()=>{
      const sel = document.getElementById('sx-select');
      if(sel) renderAll(sel.value);
    }, 150);
  }).observe(host.closest('.card') || host);
}

/* ---------------------------------------------------------------------------
   MOTIVATION / BARRIER SCATTER (brush-linked)
   --------------------------------------------------------------------------- */
function motivBarrierScatterSpec(){
  const brush = {"name":"brush","select":{"type":"interval","encodings":["x","y"]}};
  const hov   = {"name":"hov","select":{"type":"point","on":"pointerover","clear":"pointerout","fields":["label"]}};
  const scatter = {
    "width":330,"height":330,"data":{"values":DATA.scatter_mb},
    "layer":[
      {"data":{"values":[{"m":0,"f":0},{"m":70,"f":70}]},
       "mark":{"type":"line","color":"#cbd6e2","strokeDash":[4,4]},
       "encoding":{"x":{"field":"m","type":"quantitative","scale":{"domain":[0,70]}},
                   "y":{"field":"f","type":"quantitative","scale":{"domain":[0,70]}}}},
      {"params":[brush,hov],
       "mark":{"type":"point","filled":true,"size":120,"opacity":0.85,"stroke":"#fff","strokeWidth":1},
       "encoding":{
         "x":{"field":"male","type":"quantitative","title":"Male (%)","scale":{"domain":[0,70]}},
         "y":{"field":"female","type":"quantitative","title":"Female (%)","scale":{"domain":[0,70]}},
         "color":{"field":"type","type":"nominal","scale":{"domain":["Motivation","Barrier"],"range":[TEAL,CORAL]},
                  "legend":{"orient":"top","title":null,"direction":"horizontal"}},
         "size":{"condition":{"param":"hov","value":260},"value":120},
         "opacity":{"condition":{"param":"brush","value":0.95},"value":0.18},
         "tooltip":[{"field":"label","title":"Reason"},{"field":"type","title":"Type"},
                    {"field":"male","title":"Male (%)","format":".1f"},{"field":"female","title":"Female (%)","format":".1f"}]
       }},
      {"transform":[{"filter":{"param":"hov","empty":false}}],
       "mark":{"type":"text","align":"left","dx":10,"fontSize":9,"fontWeight":700,"color":"#36475c"},
       "encoding":{"x":{"field":"male","type":"quantitative"},"y":{"field":"female","type":"quantitative"},
                   "text":{"field":"label","type":"nominal"}}}
    ]
  };
  const rankBar = {
    "title":{"text":"Selected reasons (brush the scatter)","fontSize":11,"anchor":"start"},
    "width":250,"height":330,"data":{"values":DATA.scatter_mb},"transform":[{"filter":{"param":"brush"}}],
    "mark":{"type":"bar","cornerRadiusEnd":2},
    "encoding":{
      "y":{"field":"label","type":"nominal","sort":"-x","title":null,"axis":{"labelFontSize":9}},
      "x":{"field":"all","type":"quantitative","title":"Overall (%)"},
      "color":{"field":"type","type":"nominal","scale":{"domain":["Motivation","Barrier"],"range":[TEAL,CORAL]},"legend":null},
      "tooltip":[{"field":"label","title":"Reason"},{"field":"type","title":"Type"},{"field":"all","title":"Overall (%)","format":".1f"}]
    }
  };
  const spec = {
    "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
    "hconcat":[scatter,rankBar],"spacing":26,
    "resolve":{"scale":{"color":"shared"}},"config":CFG
  };
  spec._fitWidth = function(W){
    const s = JSON.parse(JSON.stringify(spec)); delete s._fitWidth;
    const sq = Math.round(W*0.44), bW = Math.round(W*0.48);
    s.hconcat[0].width = sq; s.hconcat[0].height = sq;
    s.hconcat[1].width = bW; s.hconcat[1].height = sq;
    return s;
  };
  return spec;
}

/* ── RENDER ALL CHARTS ── */
show("chart-map",         mapSpec());
show("chart-topsports",   topSportsSpec());
show("chart-ageheat",     ageHeatSpec());
requestAnimationFrame(()=>{ setTimeout(initGenderButterfly, 80); }); // HTML butterfly
show("chart-bump",        bumpSpec());              // ← FIXED (rank label)
show("chart-lifecycle",   lifecycleSpec());
show("chart-entitytype",  entityTypeSpec());        // ← NEW Fig 11
show("chart-bivariate",   bivariateMapSpec());
requestAnimationFrame(()=>{ setTimeout(initSportExplorer, 80); });
show("chart-mbscatter",   motivBarrierScatterSpec());
requestAnimationFrame(()=>{ setTimeout(initStateExplorer, 80); });

}).catch(err=>{
  console.error("Data load failed:", err);
  document.querySelectorAll(".chart-host").forEach(el=>{
    el.innerHTML='<p style="color:#999;font-size:0.85rem;padding:20px">Chart data could not be loaded. Run from a local server (e.g. <code>python3 -m http.server</code>) so the browser can read the JSON &amp; TopoJSON files.</p>';
  });
});