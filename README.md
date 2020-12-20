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

## Usage
- 後述するモジュールのインストール手順が終わったら、 main.js が存在するディレクトリで cmd や ターミナル を起動
- ``node_modules\.bin\electron .`` で Electron を起動
- 後はちょっと待てば 15 Puzzle が起動します。

## How-to-Install
- このリポジトリの上の方にある Code と書いてある所をクリックし Download ZIP をクリック。
- ダウンロードされた ZIPファイル を展開 (または解凍) し、中のフォルダを適当な所に置く。<br>
  この際、 ``main.js`` と ``package-lock.json`` を必ず同じディレクトリに配置する事。デスクトップにそのまま置く、などは止めましょう。
- ``package-lock.json`` が存在するディレクトリで cmd や ターミナル を起動。
- ``npm i``と打ってかっこよくEnterを押そう。もしここでエラーが出たなら Node.js か npm をインストールしよう。
- Electron のダウンロードに時間がかかるので、スマホゲーでもして待ちましょう。回線・PCスペックにも左右されますが、おおよそ3分ぐらいはかかります。
- ``npm i`` が終わったら、 ``node_modules\.bin\electron .`` で 15 Puzzle が起動します。**Enjoy!**

# その他

- 元の 15 Puzzle の GitHub リポジトリは [こちら](https://github.com/HiraginoYuki/fifteen-puzzle) 。
