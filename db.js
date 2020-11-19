const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/bank_server',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const User = mongoose.model('User',{
    
        userName: String,
        firstName: String,
        lastName: String,
        phoneNo: Number,
        address: String,
        pincode: Number
});
module.exports ={
    User
}