const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')


exports.home = async (req,res)=>{
    const magasins = await Magasin.find()
    console.log(magasins)
    res.render('home', {title :"Ma page", magasins:magasins})
}

exports.about = (req,res)=>{
    res.render('about', {title : "About" ,test : "Ceci est un test"})
}