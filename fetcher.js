const request = require('request')
const fs = require('fs');
// to filter out and only return the arguments after calling node fetcher.js
const commandLineArgument = process.argv.slice(2);
const url = commandLineArgument[0];
const path = commandLineArgument[1];



function writeFile(fileName,content){
  fs.writeFile(fileName,content, function( error){
    if(error){
      console.log(error)
      return;
    }
    const size= fs.statSync(fileName).size
    console.log(`Downloaded and saved ${size} bytes to ${fileName}`)
  })
};

const fetcher = function (urlPassed) {
  request(urlPassed, function (error, response, body) {
    if(error){
      console.log(error)
      return;
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    writeFile(path, body)
  })}
  fetcher( url, path);


