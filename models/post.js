import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    title : {
        type : String,
        require : [true, "title is required"]
    },
    body : {
        type : String,
        require : [true, 'body is required']
    },
    category_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    post_images : {
        type : [String]
    },
    tags : {
        type : [String]
    }
}, {timestamps : true})

const Post = models.Post || model('Post', PostSchema )
export default Post;