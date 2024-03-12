import { connnectedToDB } from "@/utlis/db"
import apiResponse from "@/utlis/apiResponse"
import Post from "@/models/post";

export async function GET()
{
    try {
        await connnectedToDB();
        const post = await Post.findOne({}).populate('author').populate('category_id');
        
        if(post) {
            return new Response(apiResponse(true, 'Post detail', post), {
                status : 200
            })
        }

        return new Response(apiResponse(true, 'Post not found'))
    } catch (error) {
        return new Response(apiResponse(false, 'Something Wrong', null, error.message), {
            status : 500
        })
    }
}

// update post
export async function PUT(req, {params})
{
    try {
        await connnectedToDB()
        const res = await req.json();
        const {title, body, category_id, tags} = res;
        const id = params.id;

        const post = await Post.findOneAndUpdate({_id : id}, {
            title, body, category_id, tags
        }, {new : true})
        await post.save();
        return new Response(apiResponse(true, 'Post updated successfully', post))
    } catch (error) {
        return new Response(apiResponse(false, 'Something Wrong', null, error.message))
    }
}



// delete post
export async function DELETE(req, {params})
{
    try {
        await connnectedToDB();
        const id = params.id;

        await Post.findOneAndDelete({_id : id});
        return new Response(apiResponse(true, 'Post deleted successfully'));
    } catch (error) {
        return new Response(apiResponse(false, 'Something Wrong', null, error.message))
    }
}