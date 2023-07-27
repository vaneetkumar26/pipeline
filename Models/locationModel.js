const mongoose=require("mongoose")


const locationSchema=mongoose.Schema({
     userId:{
     type:STRING,
     require:true,
     },
      name:{
        type:DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING,
      },
      location:{
        type:{type:String,require:true},
        coordinates:[]
      }
})
locationSchema.index({location:"2dsphare"})

mongoose.Model.exports=mongoose.model("Location",locationSchema)