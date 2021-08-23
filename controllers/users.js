const User = require("../Scema/UsersScema");
const jwt=require("jsonwebtoken"); 
const SECRET_KEY=process.env.SECRET_KEY;
const bcrypt = require('bcrypt');


module.exports.signin = async (req,res) => {
        const {email,password,teacher} = req.body;
        const user=await User.find({email: email,teacher})
        if(user.length===0) return res.status(400).json({"error": "Invalid credentials"})
        bcrypt.compare(password, user[0].password, function(err, result) {
            if(err) res.status(400).json({"error": "Invalid credentials"})
            if(result){
           
                const token=jwt.sign(email,SECRET_KEY)
                res.status(201).json({token:token})
            }
            else{
                res.status(400).json({"error": "Invalid credentials"})
            }
        });
        
}
module.exports.signup = async (req,res) => {
    const {name,email,password} = req.body;
    bcrypt.hash(password, 10, async(err, hash) =>{
        if(err) {console.log(err); return res.status(400).json({error:"Internal Error"})}

        try{
            const AlreadyUser=await User.find({email: email,})
            console.log(AlreadyUser.length)
            if(AlreadyUser.length!==0){
                res.status(400).json({message:"User Already Exists"})
            }
            else{
                const user=await new User({
                    name,
                    email,
                    password:hash,
                    teacher:false
                })
                await user.save();
                res.status(200).json({success:true})
            }
           
        }
        catch{
            res.status(400).json({error:"Internal Error"})
        }  
    });
    
}
