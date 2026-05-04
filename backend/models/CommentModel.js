
    import {Schema,model} from 'mongoose';

    const commentSchema = new Schema({
        user:{ 
            type:Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        text:{
            type:String,
            required:true
        },
        parent_type:{
            type:String,
            enum:['PR','ISSUE']
        },
        parent_id:{
            type: String
        }
    },{
    versionKey:false,
    timestamps:true,
    strict: "throw"
    });

    export const CommentModel = model("comment",commentSchema)