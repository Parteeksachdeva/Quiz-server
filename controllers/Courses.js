const courses = require("../Scema/CoursesScema");
const jwt=require("jsonwebtoken"); 

module.exports.getCourses = async(req,res)=>{
    try{
        const it = await courses.find();
        res.json(it)
        res.status(200)
    }
    catch{
        res.status(400).json({error:"Internal Error"})
    }
}  
module.exports.addCourse = async(req,res)=>{
    const {CourseName} = req.body;
    try{
        const it= await new courses({
            CourseName,
            questions:[],
            Score:0,
            MaxScore:0
        })
        await it.save();
        res.status(200).json({message:"Sucessfully Uplouded"})
    }
    catch{
        res.status(400).json({error:"Internal Error"})
    }
} 
module.exports.updateCourse= async(req,res)=>{
    const {_id,CourseName,questions} = req.body;
    try{
        await courses.findByIdAndUpdate(_id,{questions:questions})
        res.status(200).json({message:"Sucessfully Uplouded"})
    }
    catch{
        res.status(400).json({"success": "false"})
    }
    
}
module.exports.addScore= async(req,res)=>{
    console.log("abc")
    const {score,id} = req.body
    try{
        const doc=await courses.findById(id)
        if(score>doc?.MaxScore) doc.MaxScore=score
        await doc.save()
        res.status(200).json({message:"Sucessfully Uplouded"})
    }
    catch{
        res.status(400).json({"success": "false"})
    }
    

}
