

import { Schema, model } from 'mongoose';

const fileSchema = new Schema({

    repository: {
        type:  Schema.Types.ObjectId,
        ref: 'Repository'
         
    },
    name: {
        type: String,
        required: true
    },
    editedFiles:{
        type: Schema.Types.ObjectId,
        ref: 'Commit'
         
    },
    content:{
        type: String,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    }
});

export const FileModel = model('File', fileSchema);