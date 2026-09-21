const screens = [
  ["01-nemuru-mae-kara", "眠る前から起きたあとまで", "睡眠の前後をひとつの流れで", "眠る前から起きたあとまでの入力画面"],
  ["02-kantan-kiroku", "睡眠時間をかんたん記録", "スタートして、起きたら記録", "睡眠中のタイマー画面"],
  ["03-mainichi-no-choshi", "毎日の調子もいっしょに", "気分や疲労、生活習慣まで", "日中の調子やストレスを選ぶ記録画面"],
  ["04-calendar", "カレンダーで変化をチェック", "日々の記録をひと目で", "表情と色で記録を見返すカレンダー画面"],
  ["05-graph", "グラフで眠りを振り返り", "記録の移り変わりを見る", "睡眠時間を振り返るグラフ画面"],
  ["06-analysis", "自分の傾向を見つけよう", "記録がそろうと分析を表示", "ねむもこ分析の画面"],
  ["07-weekly-review", "ねむもこと週ごとに振り返り", "直近7日をやさしく確認", "直近7日の振り返り画面"]
];

const grid = document.querySelector("#screen-grid");
const buttons = [...document.querySelectorAll("[data-device]")];
let device = "iphone";

function renderScreens() {
  grid.replaceChildren(...screens.map(([name, title, subtitle, alt], index) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `./assets/artboards/${name}-${device}.jpg`;
    img.alt = alt;
    img.loading = index === 0 ? "eager" : "lazy";
    img.width = device === "iphone" ? 829 : 1125;
    img.height = device === "iphone" ? 1800 : 1500;
    const caption = document.createElement("figcaption");
    const number = document.createElement("b");
    number.textContent = String(index + 1).padStart(2, "0");
    const label = document.createElement("span");
    label.textContent = title;
    const small = document.createElement("small");
    small.textContent = subtitle;
    label.append(small);
    caption.append(number, label);
    figure.append(img, caption);
    return figure;
  }));
  grid.dataset.device = device;
}

buttons.forEach(button => button.addEventListener("click", () => {
  device = button.dataset.device;
  buttons.forEach(item => {
    const active = item === button;
    item.classList.toggle("selected", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderScreens();
}));
renderScreens();
