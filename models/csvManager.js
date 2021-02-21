const fs = require("fs");

// テストデータのファイル名
var testdata_csv_name = './models/python/' + 'test_data.csv';

// 結果を出力するファイル名
var result_csv_name = './models/python/' + 'result_data.csv';

// パラメータをCSVファイルに出力
async function makeTestDataFile(json) {
    return new Promise(function (resolve) {
        // データの加工
        var keys = Object.keys(json);
        var data = keys.join(',') + '\n';
        var contents = []
        keys.forEach(key => {
            contents.push(json[key]);
        });
        data += contents.join(',');

        // データの出力
        fs.writeFile(testdata_csv_name, data, (err) => {
            if (err) throw err;
            resolve(data);
        });
    });
}

// 結果出力用のCSVファイルの作成
async function makeResultDataFile() {
    return new Promise(function (resolve) {
        // 空ファイルの作成
        fs.writeFile(result_csv_name, '', (err) => {
            if (err) throw err;
            resolve();
        });
    });
}

// 結果のCSVファイルを読み込み
async function readResultDataFile() {
    return new Promise(function (resolve) {
        // 結果の読み込み
        fs.readFile(result_csv_name, "utf-8", (err, data) => {
            if (err) throw err;
            resolve(data);
        });
    })
}

exports.makeTestDataFile = makeTestDataFile;
exports.makeResultDataFile = makeResultDataFile;
exports.readResultDataFile = readResultDataFile;