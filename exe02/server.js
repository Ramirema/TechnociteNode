const fs = require('fs')

// ------------------------------------------------------------------------- 1ère version

// fs.readFile('liste.txt', {encoding:'utf8'}, function(err, data){
//     console.log(data)
// })

// ------------------------------------------------------------------------- 2ème version

// fs.readFile('liste.txt', {encoding:'utf8'}, (err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

// ------------------------------------------------------------------------- 3ème version

// fs.readFile(`${process.cwd()}/liste.txt`, {encoding:'utf8'},(err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

// ---------------------------------------------------------------------------------------

// console.log(process.argv[2])

fs.readFile(`${process.cwd()}/liste.txt`, {encoding:'utf8'},(err, data)=>{
    if (err) throw err
})

// récuperer la valeur de l'argument
// tester l'argument "add" ou "remove"
// si non renvoyer une erreur
// si oui
// si "add" ajouter la valeur
// si "remove" enlever la valeur

const [action, value] = [process.argv[2], process.argv[3]]
const possibleActions = ['add', 'remove']
const fileMger = require('./method/fileManager')
const checkActions = (action)=>{
    // let tempArr = possibleActions.filter(item) => {
    //     item === action
    // }
    // let l = tempArr.length
    // let returnValue = false
    // if(l > 0)
    // {
    //     returnValue=true
    // }
    // return returnValue
    return possibleActions.filter(item => item === action).length > 0
}

const checkValue = (value) => (value) ? true : false

const init = () => {
    if (!checkActions(action)){
        console.log(`Error : the possible actions are : 
                                        - add
                                        - remove`)
    }else if (!checkValue(value)){
        console.log(`Error : You need to give value for insertion`)
    }else{
        fileMger.init('liste.txt',action,value)
    }
}
init()