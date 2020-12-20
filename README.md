# 15パズル - デスクトップ

## Overview
- [hiragino_yuki](https://twitter.com/hiraginoyuki "Twitter") 氏 制作の 15 Puzzle を Electron 上で実行、ブラウザを開かなくても遊べるようにしました。

## Description
- Node.js と Electron を使用し、 15 Puzzle を loadURL関数 を用いて Electron ウィンドウ内で表示。<br>
  いちいち~~クソ重たい~~ブラウザを起動しなくても、めっちゃかっこいい15パズルが遊べるようになります！ｗ

# あそびかた

## Requirements
- ``Node.js v14.8.0``<br>
  恐らく、これだけで大丈夫...だと思います。

## How to Play
- Releases から最新の Windows 向けビルドのzipをダウンロード、展開し中にある ``15puzzle-desktop.exe`` を起動するだけです。お手軽！<br>
  一応、ソースコード自体は上の Code をクリックし、 Download ZIP でダウンロードできます。<br>
  「自分で改造したい！」って人はご自由にどうぞ。

# その他

- 元の 15 Puzzle の GitHub リポジトリは [こちら](https://github.com/HiraginoYuki/fifteen-puzzle) 。

## Todo

- [x] Windows に対応。
- [ ] Mac OS X に対応させる。
- [ ] Linux OS に対応させる。
- [ ] ステータスバーみたいな奴の完全削除。
- [ ] loadURL関数に頼らないようにする。
