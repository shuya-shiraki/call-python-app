var { PythonShell } = require('python-shell');

// Python本体のexeファイルへのパス
var envPythonPath = 'path/to/python.exe';

// interface.pyへのパス
var pythonCodePath = './models/python/interface.py'

var option = {
    mode: 'text',
    path: envPythonPath,
    pythonOptions: ['-u'],
}

function call() {
    var pyshell = new PythonShell(pythonCodePath, option);
    pyshell.send();
    console.log('Calling')
    return new Promise(function (resolve) {
        pyshell.on('message', function (message) {
            console.log('Called');
            resolve(message);
        })
    });
}

exports.call = call;