# Data Visualisation Portfolio — Vega-Lite & Tableau

Interactive charts built from scratch with Vega-Lite grammar-of-graphics specifications,
plus dashboards in Tableau. Focus: choosing the right encoding for the question, not
just producing a chart.

**🔗 [View the live charts →](https://robertnguyen-ctrl.github.io/DV2-Vegalite/)**

<!-- TODO: xác nhận link này ở Settings → Pages. Nếu khác thì sửa lại. -->

![Overview of the charts](
<img width="1366" height="995" alt="Screenshot 2026-08-09 121719" src="https://github.com/user-attachments/assets/cb747859-1275-4c4b-92f8-6c7ac8c4467b" />
<img width="1107" height="1470" alt="Screenshot 2026-08-09 121813" src="https://github.com/user-attachments/assets/f8394205-06b2-45fa-8f0c-9365fdbf7420" />
<img width="1101" height="831" alt="Screenshot 2026-08-09 121851" src="https://github.com/user-attachments/assets/4df99bed-19af-41ff-956a-21b8a09b0e65" />
<img width="1116" height="899" alt="Screenshot 2026-08-09 121905" src="https://github.com/user-attachments/assets/8085ad57-aed7-4d36-a1cf-815b4408d9b6" />
<img width="1100" height="1085" alt="Screenshot 2026-08-09 121915" src="https://github.com/user-attachments/assets/c0f1fcb5-d0fc-4bec-bf32-f49e8a033438" />
<img width="1108" height="742" alt="Screenshot 2026-08-09 121922" src="https://github.com/user-attachments/assets/335e2509-2291-4081-8f84-f9c1ec7b5a96" />
<img width="1111" height="1169" alt="Screenshot 2026-08-09 121929" src="https://github.com/user-attachments/assets/a9cfe433-4de0-4bda-b863-6461c20e64e2" />
<img width="1106" height="1483" alt="Screenshot 2026-08-09 121939" src="https://github.com/user-attachments/assets/2eb97220-9eb3-4417-8183-a21b374f43d6" />
<img width="1100" height="551" alt="Screenshot 2026-08-09 121947" src="https://github.com/user-attachments/assets/b206e971-3f5a-48e7-ade6-2f7abfe9c93e" />


)

<!-- TODO: chụp ảnh trang web đang chạy, lưu thành docs/screenshots/overview.png -->

---

## What's here

| Section | Tool | What it shows |
|---|---|---|
| Vega-Lite charts | Vega-Lite v5, JSON specs | <!-- TODO: 1 dòng, vd: Interactive time-series and distribution views of Melbourne pedestrian counts --> |
| Tableau dashboard | Tableau Public | <!-- TODO: 1 dòng mô tả dashboard --> |

## Dataset

<!-- TODO: điền vào. Ví dụ:
**Source:** [Melbourne pedestrian counting system](https://data.melbourne.vic.gov.au/) — City of Melbourne Open Data
**Size:** ~X rows, Y columns, covering <khoảng thời gian>
**Why this data:** 1–2 câu giải thích tại sao chọn bộ data này, câu hỏi bạn muốn trả lời.
-->

## Chart specifications

Each chart is a standalone Vega-Lite JSON spec in [`specs/`](specs/). The encoding
choices behind each one:

<!-- TODO: liệt kê 3–5 chart. Với mỗi chart viết 1–2 câu về LÝ DO chọn kiểu chart đó.
Đây là phần thể hiện bạn hiểu visualization, không chỉ biết dùng tool. Ví dụ:

### `specs/hourly-heatmap.json`
Heatmap over hour × weekday. A line chart would hide the weekday/weekend split;
a matrix layout makes both cycles readable at once. Sequential colour scheme
because the measure is unipolar (counts, no meaningful midpoint).

### `specs/sensor-comparison.json`
Small multiples rather than an overlaid multi-line chart — 40+ sensors on one
axis becomes a hairball. Shared y-scale so magnitudes stay comparable across panels.
-->

## Tableau

<!-- TODO: publish lên Tableau Public (miễn phí) rồi dán link vào đây.
File .twbx cũng commit vào tableau/ nhưng link mới là thứ người ta bấm.

**🔗 [View on Tableau Public →](link)**

![Tableau dashboard](docs/screenshots/tableau-dashboard.png)
-->

## Repository structure

```
├── index.html          # chart gallery page (GitHub Pages entry point)
├── specs/              # Vega-Lite JSON specifications
├── data/               # dataset (see data/README.md for source & licence)
├── js/                 # Vega embed + interaction handlers
├── css/                # styling
├── tableau/            # .twbx workbook
└── docs/
    ├── screenshots/
    └── sketch-dv2.pdf  # design sketches / wireframes
```

## Running locally

Vega-Lite loads specs over HTTP, so opening `index.html` from the filesystem
won't work — serve the folder instead:

```bash
git clone https://github.com/RobertNguyen-ctrl/DV2-Vegalite.git
cd DV2-Vegalite
python -m http.server 8000
# open http://localhost:8000
```

## Tools

Vega-Lite v5 · JavaScript · Tableau Public · HTML/CSS

---

<!-- TODO (không bắt buộc nhưng nên có): mục "What I'd do differently"
2–3 bullet về giới hạn của bài này hoặc điều bạn sẽ làm khác đi.
Nghe có vẻ tự hạ mình nhưng nhà tuyển dụng đọc phần này rất kỹ —
nó cho thấy bạn tự đánh giá được công việc của mình. -->
