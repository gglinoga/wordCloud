const fs = require('fs');
let args = process.argv;
let type = args[2];
let arr = [];
let bufferString;
var jsonObj = [];
var headers;
    wait = () =>{console.log(obj)}

csvHandler = () => {

    let obj = fs.readFile('../data/words.csv', (err, data) => {
        if (err) throw err;

        bufferString = data.toString();
        arr = bufferString.split('\n');

        console.log('test')
        // console.log(arr);

        for (i = 0; i < arr.length; i++) {
            JSON.stringify(arr[i]);
        }

        var headers = arr[0].split(',');

    
        for (var i = 1; i < arr.length; i++) {
            var data = arr[i].split(',');
            var obj = {};
            for (var j = 0; j < data.length; j++) {
                obj[headers[j].trim()] = data[j].trim();
            }
            jsonObj.push(obj);
        }
        JSON.stringify(jsonObj);
        // console.log(jsonObj)
        // console.log(jsonObj);
        return jsonObj;
    })
}

csvHandler();