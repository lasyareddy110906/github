import { Schema, model } from 'mongoose';
const IssuesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    repo_id:{
        type: Schema.Types.ObjectId,
        ref: "Repository",
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    assignees: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
},
    { timestamps: true ,
  versionKey: false,
  strict: "throw"});
        

export const IssuesModel = model("Issues", IssuesSchema);