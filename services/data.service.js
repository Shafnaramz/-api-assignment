const db=require("../db")

let details= {
    1001: { userName: "sebastin",firstName:"sebas1" ,lastName:"sebas2",phoneno:23456789,address:"house455",pincode: 123423   },
    1002: { userName: "varudev", firstName:"dev1" ,lastName:"dev2",phoneno:233456789,address:"house456", pincode: 133489  },
    1003: { userName: "ranveerraj", firstName:"ranvee1" ,lastName:"ranvee2",phoneno:234563456789,address:"house22",pincode:4567888 },
    1004: { userName: "rajuprabu", firstName:"prabu1" ,lastName:"prabu2",phoneno:4567845678,address:"house444",pincode:234567 },
    1005: { userName: "teenatom", firstName:"teena1" ,lastName:"tom2",phoneno:234567890,address:"house55",pincode:4567888 },
}
//user creating
const create = (userName,firstName,lastName,phoneno,address,pincode)=>{
    return db.User.findOne({
        userName
    })
     .then(user=>{
 if(user){
     return{
         status:false,
         statusCode:422,
         message:"User already exists" 
     }
 }
//   const hash =generateHash (data.password);
 
//   data.password = hash;
 const newUser = new  db.User({
     userName,firstName,lastName,phoneno,address,pincode
 }); 

 

 
 newUser.save();
     return{
         status:true,
         statusCode:200,
         message:"User created successfully",
         userlist:newUser.userlist
     }
     })
     
     }
//finding user 
     const find=(firstName)=>{
return db.User.findOne({
    firstName
})
.then(user =>{
    if(user){
        return{
            status:true,
            statusCode:200,
            message:" founded"
        }
    }
    else{
        return{
            status:false,
            statusCode:422,
            message:"not founded"
        }
    }
})
     }
     const getUsers =(req)=>{
         return db.User.find({
             userlist:req.userlist
         })
         .then(user=>{
             return{
                 status:true,
                 statusCode:200,
                 userlist:user,
             }
         })
     }
     
 const updateUser = (id,data)=>{
     return db.User.findOneAndUpdate({
      _id:id   
     },data);
 
     }
 
     const deleteUser =(id)=>{
         return db.User.findOneAndDelete({
             _id:id 
         })
         .then(user=>{
             return{
                 status:true,
                 statusCode:200,
                 message:'User deleted successfully'
             }
         })
     }
 
 
 module.exports={
     create,
     find,
     getUsers,
     updateUser,
     deleteUser
 }