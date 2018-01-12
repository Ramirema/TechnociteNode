const http = require('http')
const fs = require('fs')
const values = []
const sitesToHack = ['http://www.pass.be','http://www.triptyk.be', 'http://www.mons.be']
let sitesLoaded = 0
const getPageFromSiteAndStock = (url) =>{
        http.get(url, res =>{
        let body = ''
        res.on('data', data =>{
            body += data
        })
        res.on('end',()=>{
            console.log(`end of loading ${url}`)
            values.push(body)
            checkFinishedProcess()
        })
    })
}


const checkFinishedProcess =()=>{
    sitesLoaded++
    if(sitesLoaded === sitesToHack.length){
        console.log(`all page are saved in the file`)
        const tmpStr = values.reduce((prev,current) =>{
            return `${prev}\n${current}`
        })
        fs.writeFile('result.html', tmpStr, (err) =>{

        })
    }
}
const init = ()=>{
    sitesToHack.map(item => getPageFromSiteAndStock(item))
}
init()