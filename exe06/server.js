const http = require('http')
const fs = require('fs')


const routes = [
    {url:'/', controller : 'home'},
    {url:'/api/books', controller : 'books'},
]
const router = (req,res) => {
    let indexRoute = routes.findIndex(item => item.url === req.url)
    if(indexRoute !== -1){
        require(`./routes/${routes[indexRoute].controller}`)(req,res)
    }else{
        require(`./routes/error`)(req,res)
    }
}



http.createServer(router).listen(8100,()=>{
    console.log('server running and listening port 8100')
})
