import {Schema,model} from "mongoose";

// NOTIFICATIONS:
//     - notification_id
//     - timestamp
//     - isSeen
//     - type
//     - user(user_id)
//     - message

const notificationSchema = new Schema({
    message:{
        type: String,
        required: [true,"Message required"]
    },
    isSeen:{
        type: Boolean,
        default: false
    },
    type:{
        type:String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    versionKey: false,
    timestamps: true
});

export const NotificationModel = model("Notification",notificationSchema)
