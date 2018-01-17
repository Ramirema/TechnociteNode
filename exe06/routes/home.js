const fs = require('fs')
const promisify = require('es6-promisify')
const read = promisify(fs.readFile)
module.exports = (req,res) =>{
    let templatesPromise = read(`${process.cwd()}/templates/home.html`)
    templatesPromise.then(html =>{
        res.end(html)
    }).catch(e =>{
        console.log(e)
    })
}
