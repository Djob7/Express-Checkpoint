const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentday = currentDate.getDay();

    if(currentday == 0 ||  currentday == 6 ||  currentHour >17 || currentHour<6){
        return res.send('Closed')
    }
    next()
}

app.use(middleware)



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/Public/Home.html')
})

app.get('/Contactus',(req,res)=>{
    res.sendFile(__dirname+'/Public/Contactus.html')
})

app.get('/Services',(req,res)=>{
    res.sendFile(__dirname+'/Public/Services.html')
})


app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/style.css')
})


app.use(express.static('Public'))


app.listen(port, console.log('Server is running'))