const mongoose = require ('mongoose')

const Schema = mongoose.Schema 

const MehandiSchema = new Schema ({
        name : {
            type:String
        },
        contact :{
            type: String 
        },
        area : {
            type: String 
        }
        
},
{
    timestamps:true
}
)

module.exports = mongoose.model('mehandi', MehandiSchema)
