import mongoose from 'mongoose';

const UserModel = new mongoose.model('Name', 
    (
        new mongoose.Schema({
            rank: {
                type: Number,
                required:true,
                unique:true,
                
            },
            country:
            {
                type:String,
                required:true,
                trim:true,
            },
            name :
            {
                type:String,
                required:true,
                unique:true
            }
        },
        {timestamps: true}
    )
));

export default UserModel;