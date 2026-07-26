# ねむもこ｜睡眠と体調管理 プライバシー・サポートサイト

公開先は `daidaidai-dev/daidaidai-dev.github.io` リポジトリの `/sleep/` です。`Sleep` リポジトリは非公開のため、この `docs/` を公開用リポジトリへ同期します。

## 正式URL

- マーケティングURL: `https://daidaidai-dev.github.io/sleep/`
- サポートURL: `https://daidaidai-dev.github.io/sleep/support/`
- プライバシーポリシーURL: `https://daidaidai-dev.github.io/sleep/privacy/`

`https://daidaidai-dev.github.io/Sleep/privacy/` は非公開リポジトリを公開元としており、使用しません。Notion、アプリ内リンク、App Store Connectには上記の正式URLを設定します。

## 公開前の確認

1. `docs/` 配下のHTML、CSS、画像を公開用リポジトリの `/sleep/` へ同期する。
2. 相対リンクが `/sleep/` 配下で正しく解決することをローカルで確認する（`index.html` → `privacy/`・`support/`、各ページからホームへ戻る導線）。
3. `Sleep/AppLinks.swift` の `privacyPolicyURLString` が正式URLと完全一致することを確認する。
4. Notionの「ねむもこ｜睡眠と体調管理 サポート」に同じプライバシーポリシーURLを掲載する。
5. App Store Connectへ登録する前に、[プライバシーチェックリスト](app-store-privacy-checklist.md)を確認する。

## 公開後の確認

1. シークレットウインドウまたはログアウト状態で、正式URLの3ページを開く。
2. `https://daidaidai-dev.github.io/sleep/privacy/` がHTTP 200、HTTPSで表示されることを確認する。
3. プライバシーページからサポート、サポートページからプライバシー、ホームへの相互リンクを確認する。
4. 実機またはSimulatorで「設定」→「プライバシー」→「プライバシーポリシーを開く」を押し、同じURLがSafariで開くことを確認する。
5. App Store ConnectのプライバシーポリシーURLにも同じURLを登録し、再度ログアウト状態で表示を確認する。

## 更新手順

1. `docs/` を編集する。
2. 公開用リポジトリの `/sleep/` へ同期してコミット・pushする。
3. GitHub Pagesのデプロイ完了後、上記「公開後の確認」を実施する。
4. 実装と公開内容が一致しない間は、App Store ConnectのURLを変更しない。

## Notionサポートページに載せる内容

# ねむもこ｜睡眠と体調管理 サポート

「ねむもこ｜睡眠と体調管理」の不具合、使い方、機能要望はサポートフォームから送信してください。

## サポートフォーム

https://docs.google.com/forms/d/e/1FAIpQLScyP8eN59fo-did71U8-Ackaa5mt35HS60rbxuaTmxAsSoSeA/viewform

## よくある質問

### 記録はどこに保存されますか？

睡眠記録、薬剤名、通知設定、表示設定はこの端末内に保存されます。

### 睡眠記録は外部サーバーへ送信されますか？

本アプリ独自のサーバーへ睡眠記録を送信しません。

### 記録を削除できますか？

アプリ内のデータ管理画面から、保存済みデータを削除できます。

### 通知を変更できますか？

アプリ内の通知設定、またはiOSの通知設定から変更できます。
