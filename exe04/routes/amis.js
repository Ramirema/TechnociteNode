const fs = require('fs')
module.exports = (req,res) =>{
    fs.readFile(`${process.cwd()} /public/friends.json`, {encoding: 'utf-8'} , (err,json) =>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/html'})
            res.end('The server has a problem please try later')
        }else{
         fs.readFile(`${process.cwd()}/templates/amis.html`, {encoding : 'utf-8'}, (err,data)=>{
             res.writeHead(404,{'Content-Type':'text/html'})
         })
        res.end(generateHtml(data,json))   
        }
        
    })
}
const generateHtml = (tpl,json) =>{
    return tpl.replace('%friends', JSON.parse(json).map(item => item.name).join('</li><li>'))
}