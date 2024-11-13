const express=require('express');


const app=express();


app.get('/healthCheck',(req,res)=>{

    const userName=req.headers.userName;
    const password=req.headers.password;
    const kidneyId=req.query.kidneyId;


    if(userName==='admin' && password==='admin'){
        if(kidneyId=='1' && kidneyId=='2' ){
           
            res.json('Success');
        }
    
    }    
    else{
        res.json({
            msg:'Your kidney is fine!'
            
        })
    
        
    }


    res.status(400).json({
        msg:'Something went wrong!'
        
        
    })

    
});

app.listen(3000,()=>{   
    console.log('Server is running on port 3000');
});