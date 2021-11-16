#!/usr/bin/env node

const { hidden } = require('chalk')
const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv._
const fetchUrl = require('fetch').fetchUrl



fetchUrl(`https://goweather.herokuapp.com/weather/"${argv[0]}`, function(error, meta, body){
    console.log(argv[0])
if(meta.status != 404){
    
    var data = JSON.parse(body)
    console.log(data)
}else{
    console.log('Cidade não encontrada')
}
    
    
    
})





