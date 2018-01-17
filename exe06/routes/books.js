const fs = require('fs')
const promisify = require('es6-promisify')
const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)
module.exports = (req,res) =>{
    if(req.method === 'GET'){
        console.log(req.method)
        let templatesPromise = read(`${process.cwd()}/public/books.json`)
        templatesPromise.then(json =>{
            res.setHeader('Content-type', 'application/json')
            res.end(json)
        }).catch(e =>{
            console.log(e)
        })
    }else if(req.method === 'POST'){
        let formData = ''
        req.on('data', ((data) =>{
            formData += data
        }))
        req.on('end', ()=>{
            console.log('write to file', formData)
        })
    }
   
}

const generateHtml = (tpl,json) =>{
    // let values = JSON.parse(json)
    // let tempArr = values.map(item =>item.name)
    // console.log(tempArr)
    // let tempStr = tempArr.join('</li><li>')
    // console.log(tempStr)
    // let htmlStr = tpl.replace('%books%',tempStr)
    // console.log(htmlStr)
    // return htmlStr
    return tpl.replace('%books%',JSON.parse(json).map(item =>item.name).join('</li><li>'))
}
