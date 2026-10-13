# 酸素ボンベ残量ナビ — 公開サイト

公開先: https://daidaidai-dev.github.io/oxygen-cylinder-navi/

公開用リポジトリ `daidaidai-dev/daidaidai-dev.github.io` の `oxygen-cylinder-navi/` に配置する静的サイトです。HTML・CSS・JavaScriptだけで動作し、npmインストールやビルド、環境変数は不要です。このディレクトリはアプリ側に保管する公開ファイルのコピーです。公開された正本は、公開用リポジトリで管理します。

## ページ

| 用途               | ファイル             | 公開URL                                                       |
| ------------------ | -------------------- | ------------------------------------------------------------- |
| Marketing URL      | `index.html`         | https://daidaidai-dev.github.io/oxygen-cylinder-navi/         |
| Support URL        | `support/index.html` | https://daidaidai-dev.github.io/oxygen-cylinder-navi/support/ |
| Privacy Policy URL | `privacy/index.html` | https://daidaidai-dev.github.io/oxygen-cylinder-navi/privacy/ |

お問い合わせ先: https://forms.gle/mD5skuNYgSNvddSS6

## ローカルで確認

このディレクトリで次を実行します。

```sh
python3 -m http.server 4317 --bind 127.0.0.1
```

ブラウザーで `http://127.0.0.1:4317/` を開きます。JavaScriptを無効にした場合も、本文・FAQ・iPhone画像・サポート導線を閲覧できます。

## デザインと素材

- 白とミントを基調とし、OSのカラーテーマ追従と手動の明暗切替に対応。
- 見出しはZen Maru Gothic Blackの必要文字だけを含むWOFF2。本文はOSの日本語フォントを使用。
- アプリの実画面と、既存のボンベん・メータん素材をWebP化して使用。生成したデザイン画像は、アプリ画面の代わりに掲載していません。
- トップの端末画像は、元の計算画面の上部をCSSで表示。開発用広告の領域は表示範囲外です。アプリ内の文字・数値・UIは描き直していません。
- 紹介画像は既存のiPhone/iPad用アートボード各5枚。480/640/960px幅を使い分け、拡大時には960px版を表示。
- 数値は撮影用の入力例です。確認済み製品仕様・推奨設定・臨床上の標準値として扱いません。
- `assets/brand/og.png` はSNS共有用の1200×630画像です。

素材の元データはアプリプロジェクトの `assets/characters/`、`assets/images/`、`AppStoreScreenshots/public/screenshots/raw/`、`AppStoreScreenshots/exports/` にあります。元ファイルは変更していません。

## 更新するとき

1. 文章とリンクは対応するHTMLを直接編集します。繰り返し登場する案内は、紹介・サポート・プライバシーを合わせて確認します。
2. 配色・余白・フォントは `styles.css` の変数、操作は `site.js` で管理します。
3. 見出しに新しい文字を加えた場合は、元のZen Maru Gothic Blackを使用してWOFF2のサブセットを再生成してください。含まれない文字は端末のフォントにフォールバックします。ライセンス文は同梱しています。
4. App Store URLが確定したら、「公開準備中」の案内とFAQを更新し、正式なリンクを掲載します。価格・評価・医療効果・配信開始日など、未確認の情報は追加しません。
5. 公開URLを変える場合は、全ページのcanonical・OGP・構造化データ・`sitemap.xml`・`site.js`で参照するcanonicalを確認します。
6. 更新後は、明暗表示、スマホ幅、画像切替・拡大、FAQ、フォームへのリンクを確認します。

GitHub Pagesは既存の `main` ブランチのルート配信を利用します。このサイトのフォルダだけを追加・更新し、他アプリのページや共通の `app-ads.txt` は変更しません。アプリ本体の公開範囲・ビルド・計算式・保存スキーマも変更しません。

## 実装時の確認範囲

公開ページの作成と公開を扱っています。App Storeへの登録・審査提出、アプリ内のプライバシーリンク追加、本番広告の審査・ストア申告は別の作業です。審査通過を保証するものではありません。

## ファイル一覧

以下に、このサイトで追加したファイルを列挙します。

- `.nojekyll`
- `README.md`
- `assets/brand/app-icon.webp`
- `assets/brand/apple-touch-icon.png`
- `assets/brand/bonben-record.webp`
- `assets/brand/bonben.webp`
- `assets/brand/favicon.png`
- `assets/brand/meteran.webp`
- `assets/brand/og.png`
- `assets/fonts/NotoSansJP-OFL.txt`
- `assets/fonts/ZenMaruGothic-OFL.txt`
- `assets/fonts/zen-maru-black.woff2`
- `assets/screens/hero-480.webp`
- `assets/screens/hero-800.webp`
- `assets/screens/ipad-1-480.webp`
- `assets/screens/ipad-1-640.webp`
- `assets/screens/ipad-1-960.webp`
- `assets/screens/ipad-2-480.webp`
- `assets/screens/ipad-2-640.webp`
- `assets/screens/ipad-2-960.webp`
- `assets/screens/ipad-3-480.webp`
- `assets/screens/ipad-3-640.webp`
- `assets/screens/ipad-3-960.webp`
- `assets/screens/ipad-4-480.webp`
- `assets/screens/ipad-4-640.webp`
- `assets/screens/ipad-4-960.webp`
- `assets/screens/ipad-5-480.webp`
- `assets/screens/ipad-5-640.webp`
- `assets/screens/ipad-5-960.webp`
- `assets/screens/iphone-1-480.webp`
- `assets/screens/iphone-1-640.webp`
- `assets/screens/iphone-1-960.webp`
- `assets/screens/iphone-2-480.webp`
- `assets/screens/iphone-2-640.webp`
- `assets/screens/iphone-2-960.webp`
- `assets/screens/iphone-3-480.webp`
- `assets/screens/iphone-3-640.webp`
- `assets/screens/iphone-3-960.webp`
- `assets/screens/iphone-4-480.webp`
- `assets/screens/iphone-4-640.webp`
- `assets/screens/iphone-4-960.webp`
- `assets/screens/iphone-5-480.webp`
- `assets/screens/iphone-5-640.webp`
- `assets/screens/iphone-5-960.webp`
- `index.html`
- `privacy/index.html`
- `site.js`
- `sitemap.xml`
- `styles.css`
- `support/index.html`
