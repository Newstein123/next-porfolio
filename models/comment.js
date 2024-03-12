import mongoose, { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
    post_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    user_name : {
        type : String,
        require : [true, 'User Name is required'],
    },
    content : {
        type : String,
        require : [true, 'Content is required'],
    }
}, {timestamps : true});

const Comment = models.Comment || model('Comment', CommentSchema);
export default Comment;