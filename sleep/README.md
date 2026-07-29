# ねむもこ｜睡眠と体調管理 公開サイト

App Store審査、SNS、ユーザー向け説明に使用する静的サイトです。公開先は `daidaidai-dev/daidaidai-dev.github.io` リポジトリの `/sleep/` です。

## 正式URL

- マーケティングURL: `https://daidaidai-dev.github.io/sleep/`
- サポートURL: `https://daidaidai-dev.github.io/sleep/support/`
- プライバシーポリシーURL: `https://daidaidai-dev.github.io/sleep/privacy/`
- サイトマップ: `https://daidaidai-dev.github.io/sleep/sitemap.xml`

`Sleep` リポジトリは非公開のため、`docs/` の公開用ファイルを `daidaidai-dev/daidaidai-dev.github.io` の `/sleep/` へ同期します。

## 構成

- `index.html`: アプリ紹介、機能、競合との違い、スクリーンショット、プライバシー、FAQ
- `support/index.html`: お問い合わせとよくある質問
- `privacy/index.html`: 保存データ、広告、祝日API、削除、医療上の位置づけ
- `styles.css`: 共通テーマ、レスポンシブ、ダークモード
- `site.js`: テーマ、モバイルメニュー、iPhone / iPad画像切替、表示アニメーション
- `assets/brand/`: アプリアイコン、ねむもこ、ヒーロー、OG画像
- `assets/screenshots/`: Web表示用に軽量化したiPhone / iPad紹介画像

Web用画像は `AppStoreScreenshots/reference-style-v2/` の完成画像から作成します。原本と生成スクリプトは変更しません。

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
