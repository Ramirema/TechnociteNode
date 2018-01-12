const fs = require('fs')
let values = []
module.exports = {
    init: (file,action,value)=>{
        fs.readFile(file,(err,data)=>{
            values = data.toString().split('\r')
            if (action === 'add'){
                add(value,file)
            }else{remove(value,file)}
        })
    }
}


const add = (value,file)=>{
    if(!checkValueInlist(value)){
    values.push(value)
    }else {
        console.log('this element is already in our file')
    }
    save(file)
}
const remove = (value,file)=>{
    if(!checkValueInlist(value)){
        values.splice(values.findIndex(item =>item === value),1)
        }else {
            console.log('element doesn\'t exist in our file')
        }
        save(file)
}

const checkValueInlist = (value) =>{
    return values.filter(item=>item===value).length > 0
}

const save = (file)=>{
    let tempStr = values.reduce((prev,current)=>{
        return `${prev}\r${current}`
    })
    fs.writeFile(file,tempStr,(err)=>{
        if (err) console.log(err)
        console.log('file saved')
    })
}