'use strict';

const FileReader = require('filereader'), 
    fileReader = new FileReader(),
    fs = require('fs'),
    parkingLot = require('./parking-lot');
    
function readTextFile(file)
{
    fileReader.setNodeChunkedEncoding(true || false);
    let fileContent = fs.readFileSync(file,'utf8');
    parkingLot.test(fileContent)
}

readTextFile(process.argv[2])
