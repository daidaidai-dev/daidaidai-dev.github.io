# ねむもこ｜睡眠と体調管理 公開サイト

App Store審査、SNS、ユーザー向け説明に使用する静的サイトです。公開先は `daidaidai-dev/daidaidai-dev.github.io` リポジトリの `/sleep/` です。

## 正式URL

- マーケティングURL: `https://daidaidai-dev.github.io/sleep/`
- サポートURL: `https://daidaidai-dev.github.io/sleep/support/`
- プライバシーポリシーURL: `https://daidaidai-dev.github.io/sleep/privacy/`
- サイトマップ: `https://daidaidai-dev.github.io/sleep/sitemap.xml`

`Sleep` リポジトリは非公開のため、`docs/` の公開用ファイルを `daidaidai-dev/daidaidai-dev.github.io` の `/sleep/` へ同期します。

## 構成

- `index.html`: 現行の睡眠記録フロー、7枚のアートボード、分析、直近7日の振り返り、プライバシー
- `support/index.html`: お問い合わせとよくある質問
- `privacy/index.html`: 保存データ、広告、祝日API、削除、医療上の位置づけ
- `marketing.css` / `marketing.js`: ホーム専用のレスポンシブ表示とiPhone / iPad画像切替
- `styles.css` / `site.js`: サポート・プライバシーページ用の既存スタイルと動作
- `assets/brand/`: アプリアイコン、ねむもこ、ヒーロー、OG画像
- `assets/artboards/`: `submission-artboards-2026-09-19` からWeb向けに軽量化したiPhone / iPad紹介画像

Web用画像は `AppStoreScreenshots/submission-artboards-2026-09-19/exports/` の完成画像から作成します。原本と生成スクリプトは変更しません。
OG画像は `swift docs/generate-og.swift docs/assets/brand/og.jpg docs/assets/artboards/01-nemuru-mae-kara-iphone.jpg` で再生成できます。

## 公開前の確認

1. ローカルHTTPサーバーでホーム、サポート、プライバシーを開く。
2. 相対リンク、画像、iPhone / iPad切替、ライト / ダーク切替を確認する。
3. canonical、OG画像、構造化データ、サイトマップを確認する。
4. `Sleep/AppLinks.swift` のプライバシーポリシーURLと正式URLが一致することを確認する。
5. [App Storeプライバシー提出チェックリスト](app-store-privacy-checklist.md)を確認する。

## 公開後の確認

1. 正式URLの3ページがHTTPS、HTTP 200で表示されることを確認する。
2. ホーム、サポート、プライバシー間の相互リンクを確認する。
3. 本番ページから画像、CSS、JavaScript、OG画像を読み込めることを確認する。
4. App Store Connect、アプリ内リンク、SNSで使うURLを上記の正式URLへ統一する。
