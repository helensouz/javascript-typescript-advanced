const fs = require('fs').promises
const { read } = require('fs');
const path = require('path')

async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files)
}

async function walk(files){
    for(let file of files){
     
        console.log(files)
    }
}

readdir('/javascriptAndTypescriptFull/nodeJs/A004/')