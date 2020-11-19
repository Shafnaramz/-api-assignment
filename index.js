const express=require('express')
const dataService=require('./services/data.service')
const session=require('express-session')
const Router = express.Router;


const app=express();

const router =new Router();
app.use(session({
    secret:'randomsecurestring',
    resave:false,
    saveUninitialized:false  
}));
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send ("Hello World");
 })
app.post('/create',(req,res)=>{
    dataService.create(req.body.userName,req.body.firstName,req.body.lastName,req.body.phoneno,req.body.address,req.body.pincode)
    .then(result=>{
   res.status (result.statusCode).json(result);
    })  
 })
 app.post('/find',(req,res)=>{
    dataService.find(req)
    .then(result=>{
   res.status (result.statusCode).json(result);
    })  
 })
 app.get('/userlist',(req,res)=>{
    dataService.getUsers(req)
    .then(result =>{
        res.status (result.statusCode).json(result);  
    })
 })
 app.put('/:id',function(req,res,next){
    let data=req.body;
    dataService.updateUser(req.params.id,data)
    .then(result =>{
      res.status(200).json({
        message:"User updated"
      });
    })
  }) 

  app.delete('/userlist/:id',(req,res)=>{
    dataService.deleteUser(req.params.id)
    .then(result=>{
    res.status(result.statusCode).json(result);
   });
   })

   app.listen(4000,()=>{
    console .log("Server started at port 4000") 
  })
  
