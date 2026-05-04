import { Schema,model } from "mongoose";
// COLLABORATOR:
//     - collab_id
//     - user(user_id)
//     - repo(repo_id)
//     - role(owner,collaborator,viewer)
//     - addedAt(timestamp)

const collaboratorSchema = new Schema({
    role:{
        type:String,
        enum: ['OWNER', 'COLLABORATOR', 'VIEWER'],
        required:[true,"Role not defined"]
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    repo:{
        type: Schema.Types.ObjectId,
        ref:"Repository"
    }
},{
    versionKey: false,
    timestamps:true
});

export const CollaboratorModel = model("Collaborator",collaboratorSchema)