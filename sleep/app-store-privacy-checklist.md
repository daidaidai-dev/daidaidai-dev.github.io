# App Storeプライバシー提出チェックリスト

最終確認日: 2026-07-23

この文書は、現在の「ねむもこ｜睡眠と体調管理」アプリ実装に合わせた提出前チェックリストです。App Store Connectの回答は、提出時に使用するSDK、AdMob管理画面の設定、XcodeのPrivacy Reportを再確認して確定してください。

## アプリ実装

- [x] アプリ本体に`PrivacyInfo.xcprivacy`を追加
- [x] `UserDefaults`／`@AppStorage`の利用理由として`CA92.1`を申告
- [x] アプリ独自の処理はトラッキングなしとして申告
- [x] ATT許可を要求しないため、`NSUserTrackingUsageDescription`を削除
- [x] Google Mobile Adsの広告パーソナライズを無効化
- [x] パブリッシャーのファーストパーティIDを無効化
- [x] 睡眠・体調・服薬・メモを広告リクエストへ付加しない
- [ ] 公開済みプライバシーポリシーURLを`Sleep/AppLinks.swift`へ設定
- [ ] ReleaseアーカイブからPrivacy Reportを生成して最終確認

## アプリ独自のデータ

次の情報は端末内のCore DataまたはUserDefaultsへ保存し、本アプリ独自のサーバーへ送信しません。

- 睡眠時間、寝つき、夜間覚醒
- 朝・日中の調子
- 食事、カフェイン、飲酒、運動、入浴、スマートフォン、リラクゼーション
- ストレス、疲労
- 服薬名、時刻、入力された用量
- メモ
- 通知設定、表示設定、進行中の睡眠タイマー

端末内だけで処理する情報は、Appleの定義上の「収集」に通常は含まれません。将来、同期・分析SDK・クラウドバックアップを追加した場合は回答を更新します。

## 外部通信

### Google AdMob／User Messaging Platform

Googleの現行資料では、Mobile Ads SDKが次の情報を処理する可能性があると説明されています。

- IPアドレスから推定されるおおよその位置情報
- 端末IDなどの識別子
- 広告データ
- 広告やアプリに関する操作情報
- クラッシュデータ
- パフォーマンスデータ

Release成果物内のGoogle Mobile AdsのPrivacy Manifestでは、端末IDが「トラッキングに使用される可能性あり」と申告されています。本アプリは広告パーソナライズとパブリッシャーのファーストパーティIDを無効化していますが、App Store ConnectではSDKの申告を無視せず、Xcode Privacy ReportとGoogleの最新資料を基準に回答します。

App Store Connectでは、提出時のGoogle公式「App store data disclosure」とXcode Privacy Reportを基準に、位置情報、識別子、使用状況データ、診断の各回答を確認します。非パーソナライズ設定でも、SDKの広告配信・不正防止・計測に必要な処理がすべてなくなるわけではありません。

### holidays-jp API

リスト画面の祝日表示時に`https://holidays-jp.github.io/api/v1/date.json`へアクセスします。睡眠・体調・服薬・メモはリクエストへ含めません。接続先では通常のWeb通信に伴うIPアドレス、通信日時、User-Agentなどが処理される可能性があります。

## App Store Connect提出直前

- [ ] プライバシーポリシーURLがログアウト状態のブラウザで開ける
- [ ] ポリシーにAdMob、UMP、holidays-jp、削除方法、問い合わせ先が記載されている
- [ ] App Store Connectの「Appのプライバシー」とPrivacy Reportが一致している
- [ ] AdMobで追加のメディエーションSDKや実験機能を利用していないか確認する
- [ ] 追加SDKがある場合、各SDKのデータ収集とPrivacy Manifestを確認する
- [ ] Releaseアプリにアプリ本体とGoogle SDKのPrivacy Manifestが含まれている
- [ ] 睡眠・体調・服薬・メモを広告・分析イベントへ送っていない
- [ ] サポートフォームとデータ削除導線が実際に利用できる

## 公式資料

- Apple: https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api
- Apple: https://developer.apple.com/app-store/app-privacy-details/
- Google: https://developers.google.com/admob/ios/privacy/data-disclosure
- Google: https://developers.google.com/admob/ios/privacy/strategies
- Google: https://developers.google.com/ad-manager/mobile-ads-sdk/ios/targeting
