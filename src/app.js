const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const app=express()

//console.log(__dirname)
const pathd=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialsPath)

app.set('view engine','hbs')
app.set('views',viewpath)
app.use(express.static(pathd))
app.get('',(req,res)=>{
    res.render('index',{
        title:'Welcome to dynamic index',
        message:'created by utsav'
    })

})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Welcome to dynamic help',
        message:'created by utsav'
    })

    
})
app.get('/weather',(req,res)=>{
    if(!req.query.search)
    {
        res.send('Provide Address')
    }
    else{
        geocode(req.query.search,(error,data)=>{
            if(error)
            {
                res.send(error)
            }
            else
            {
               forecast(data.lat,data.long,(error,obj)=>{
                   if(error)
                   res.send(error)
                   else
                   res.send(obj)
        
               })
        
            }
        })



        
    }
    
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Welcome to dynamic about',
        message:'created by utsav'
    })

    
})



app.listen(3000,()=>{
    console.log('server is listening on :3000')
})
