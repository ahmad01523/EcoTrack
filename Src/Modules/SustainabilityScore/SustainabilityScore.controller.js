import Score from "../../../DB/SustainScore.mode.js";

export const getScore = async (req,res)=>{
    try{
        const pScore = req.score * 10;
        console.log(pScore);    
        const score = await Score.create({
          Score:pScore 
        })
        res.json({message:"success",score})
    }catch(err){
        res.json({message:"An error has occured",err});
    }
}