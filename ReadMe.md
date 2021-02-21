# 前提
- Pythonがインストールされていること

# 準備
## Node.js のインストール
- 以下のリンクから、Windows版のNode.jsをダウンロード&インストール
  - https://nodejs.org/ja/download/
- コマンドラインで以下のコマンドを実行し、Node.jsがインストールされていることを確認

```
> npm --version

# 6.14.11
```

## Pythonのパスの設定
- 以下のコマンドを実行し、環境変数からPythonの実行パスを調べる
  - `C:\Users\...\python.exe`をコピー

```
> py --list-paths

# Installed Pythons found by C:\Windows\py.exe Launcher for Windows
# -3.8-32        C:\Users\...\python.exe *
```

- `models/callPython.js` を開く
- `envPythonPath`の値に、`C:\Users\...\python.exe`を文字列として貼り付け



## パラメータ名の設定
- `parametors.json`を開く
- `"para*"`をパラメータの変数名、`"表示名*"`にGUI上で入力に使いたい表示名を入力する
  - 例: 以下を参照 
```
{
    "height" : "身長",
    "weight" : "体重",
    ...
}
```


## 実行するPythonファイルの設定
- `models/python/`に実行するPythonのファイルを配置する
- `model/python/interface.py`で、実行するPythonファイルをインポートし、`stub_method()`を実行するメソッドに置き換える

## テストデータと結果用ファイルのパスの設定
- `models/csvManager.js`を開く
- `testdata_csv_name` の値に、テストデータのパスに設定する
- `result_csv_name`の値に、計算結果が出力されるパスを設定する 

# 実行手順
- コマンドライン上で、以下のコマンドを実行する
  - 実行したままにする
```
> npm start
```

- ブラウザを開き、URLに`localhost:8080`を入力する
    - 入力画面に遷移する