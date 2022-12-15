const mongoose=require('mongoose');
const dbConnect=()=>{
    return mongoose.connect(`mongodb+srv://shirso:shirso@shoppinglist.mnxeyz4.mongodb.net/shoppinglist`)
}
module.exports=dbConnect;