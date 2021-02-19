import React from 'react'
const express=require('express');
const path=require('path');
const port=process.env.PORT||9800;
const app=express();
app.use(express.static(path.join(_dirname,'build')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'build/index.html'))
});
app.listen(port);