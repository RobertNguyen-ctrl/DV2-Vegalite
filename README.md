# Data Visualisation Portfolio — Vega-Lite & Tableau

Two visualisation projects on Australian food prices and consumption: an interactive
Vega-Lite chart gallery built from raw JSON grammar-of-graphics specifications, and a
long-form analytical dashboard in Tableau. Focus throughout is on choosing the right
encoding for the question rather than producing a chart that merely works.

| | Live | Tool |
|---|---|---|
| Chart gallery | **[View live →](https://robertnguyen-ctrl.github.io/DV2-Vegalite/)** | Vega-Lite v5, vanilla JS |
| Food Price Index dashboard | **[View on Tableau Public →](https://public.tableau.com/app/profile/bao.nguyen4604/viz/Assignment1_17763127288750/Dashboard1)** | Tableau Public |

<img width="1366" alt="Vega-Lite chart gallery" src="https://github.com/user-attachments/assets/cb747859-1275-4c4b-92f8-6c7ac8c4467b" />

---

## Part 1 — Vega-Lite chart gallery

<!-- CHƯA BIẾT — chỉ bạn điền được phần này. Cần 3 thứ:
     1. Bộ data nào (tên + link nguồn + khoảng thời gian)
     2. Câu hỏi bạn muốn trả lời
     3. Với mỗi chart: TẠI SAO chọn kiểu chart đó
     Ví dụ cách viết cho ý 3:
       ### Hourly heatmap
       Heatmap over hour × weekday. A line chart would hide the weekday/weekend
       split; a matrix layout makes both cycles readable at once. Sequential
       colour scheme because the measure is unipolar — no meaningful midpoint.
     Phần "tại sao" là thứ phân biệt bạn với người chỉ biết dùng tool. -->

**Data source:** <!-- TODO -->
**Question:** <!-- TODO -->

Each chart is a standalone Vega-Lite specification in [`specs/`](specs/), loaded into
the gallery page by [`js/`](js/). Design sketches and wireframes are in
[`sketch-dv2.pdf`](sketch-dv2.pdf).

<img width="1107" alt="Chart 2" src="https://github.com/user-attachments/assets/f8394205-06b2-45fa-8f0c-9365fdbf7420" />
<img width="1101" alt="Chart 3" src="https://github.com/user-attachments/assets/4df99bed-19af-41ff-956a-21b8a09b0e65" />
<img width="1116" alt="Chart 4" src="https://github.com/user-attachments/assets/8085ad57-aed7-4d36-a1cf-815b4408d9b6" />
<img width="1100" alt="Chart 5" src="https://github.com/user-attachments/assets/c0f1fcb5-d0fc-4bec-bf32-f49e8a033438" />
<img width="1108" alt="Chart 6" src="https://github.com/user-attachments/assets/335e2509-2291-4081-8f84-f9c1ec7b5a96" />
<img width="1111" alt="Chart 7" src="https://github.com/user-attachments/assets/a9cfe433-4de0-4bda-b863-6461c20e64e2" />
<img width="1106" alt="Chart 8" src="https://github.com/user-attachments/assets/2eb97220-9eb3-4417-8183-a21b374f43d6" />
<img width="1100" alt="Chart 9" src="https://github.com/user-attachments/assets/b206e971-3f5a-48e7-ade6-2f7abfe9c93e" />

<!-- TODO: đổi alt="Chart 2" thành tên thật của từng chart, và di chuyển mỗi ảnh
     xuống ngay dưới đoạn mô tả chart tương ứng. Chín ảnh xếp liền nhau không có
     chữ giữa thì người đọc không biết đang xem gì. -->

## Part 2 — Australian Food Price Index dashboard

A single scrolling dashboard answering: **how are Australians spending on food and
beverages, and what does that reveal about changing prices and diets?** It works
through household spending, per-capita consumption, category price trends, and
cross-country comparison.

<img width="900" alt="Dashboard: spending and consumption" src="https://github.com/user-attachments/assets/52dc29cb-a677-4e98-86ca-bbbc8a2cdc6b" />

### Findings

- Food and non-alcoholic beverages account for **15.75%** of the Australian spending
  basket; alcohol and tobacco a further **7.71%**. Food matters in daily life without
  dominating total expenditure.
- By weight, **milk/yoghurt/cheese (1,638 g)**, **grains and cereals (1,513 g)** and
  **vegetables and legumes (1,339 g)** are the largest daily food groups per capita,
  while oils make up a much smaller share.
- Since 2017 the steepest category increases are **tobacco**, **beef and veal**,
  **oils and fats** and **eggs**. **Poultry**, **jams and spreads** and **fish and
  other seafood** grew most slowly — long-term food inflation has been uneven, so its
  household impact depends on what's in the individual shopping basket.
- Staples (bread, milk, eggs, oils) share a common upward pattern with the steepest
  rise after **2021**. Fresh foods are more volatile than processed categories,
  consistent with sensitivity to supply conditions and market shocks.
- Across countries, food inflation has not moved uniformly: **Ukraine** and
  **Lao PDR** sit as clear outliers, while **Australia** stays in a relatively
  light band throughout.
- Australia combines a **moderate food price index (130.7)** with **low 2025 food
  inflation (2.93%)**, and sits in the high-GDP cluster (**GDP per capita ≈ USD
  64,441**) — high prices, but stable ones, unlike several lower-income economies.

<img width="898" alt="Dashboard: price index trends" src="https://github.com/user-attachments/assets/335e87a8-b580-46f9-8c22-5507490ae9d1" />
<img width="899" alt="Dashboard: percentage change since 2017" src="https://github.com/user-attachments/assets/5471201b-6b80-450b-8b1c-2672eb7bbb87" />
<img width="894" alt="Dashboard: cross-country comparison" src="https://github.com/user-attachments/assets/a720dfb2-9007-407f-a842-4ca6244d599e" />

### Views in the dashboard

| View | Mark type | Encodes |
|---|---|---|
| How much Australians spend on food and beverage | Pie | Share of total spending basket |
| Daily food consumption per capita | Packed bubbles | Grams per day by food group |
| All price index trend | Area | Overall food price index over time |
| Indexed price trends — staple / drinks / fresh / processed | Small multiples, multi-line | Category index, base 100 |
| Percentage change since 2017 | Horizontal bar | Cumulative % change, sorted |
| Food inflation rate by country | Heatmap | Country × year inflation intensity |
| Food price index vs food inflation (2025) | Scatter | Price level against inflation rate |
| Food price index vs GDP per capita | Scatter | Price level against income |

Small multiples are used for the four category groups rather than one overlaid
chart — around twenty series on a single axis becomes unreadable. All four share a
common index base of 100 so magnitudes stay comparable across panels.

### Data sources

| Source | Used for |
|---|---|
| [ABS Consumer Price Index, Australia](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release) | Category price indices, spending basket weights |
| [FAOSTAT](https://www.fao.org/faostat/en/#home) | Food price index by country |
| [World Bank — monthly food price inflation estimates by country](https://databank.worldbank.org/source/dataset/0000185/monthly-food-price-inflation-estimates-by-country) | Cross-country food inflation, GDP per capita |
| ABS mean daily grams and serves per capita | Per-capita consumption by food group |

## Repository structure

```
├── index.html          # chart gallery page (GitHub Pages entry point)
├── specs/              # Vega-Lite JSON specifications
├── js/                 # Vega embed + interaction handlers
├── css/                # styling
├── data/               # datasets — see data/README.md for sources & licences
├── tableau/            # .twbx packaged workbook
└── sketch-dv2.pdf      # design sketches and wireframes
```

## Running the gallery locally

Vega-Lite fetches its specs over HTTP, so opening `index.html` straight from the
filesystem will not work — serve the folder instead:

```bash
git clone https://github.com/RobertNguyen-ctrl/DV2-Vegalite.git
cd DV2-Vegalite
python -m http.server 8000
# then open http://localhost:8000
```

The Tableau workbook is saved as a packaged `.twbx`, so the data travels with the
file and it opens without needing the original extracts.

## What I would do differently

- **One colour system, not eight.** The Tableau dashboard grew chart by chart, and
  each view ended up on its own default palette — warm tones for consumption, gold
  for the index trend, four unrelated categorical schemes across the small multiples,
  cool blues for the bar chart, reds for the heatmap and scatters. Colour ends up
  decorating rather than encoding. The fix is to assign one hue family per narrative
  section and reuse a single ordered categorical palette across all four small
  multiples, so the reader learns the mapping once.
- **Fewer, larger annotations.** Stacking six commentary boxes beside the main area
  chart competes with the chart itself for attention. Two or three, placed next to
  the view each one refers to, would carry the same argument.
- **Cut the decorative row.** The icon strip adds no analytical information and
  interrupts the flow between the consumption section and the price-trend section.
- **Reproducibility.** The dashboard was built by hand from downloaded files. A small
  script that fetches each source and writes a tidy CSV would make the whole thing
  rebuildable from scratch, which matters more than any single chart.

## Tools

Vega-Lite v5 · JavaScript · HTML/CSS · Tableau Public

---

Author: Bao Nguyen (Robert) · Coursework for FIT2179 Data Visualisation, Monash
University
