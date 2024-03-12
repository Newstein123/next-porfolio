import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";
import { getUserInfo } from "@/utlis/getUserInfo";

// get all posts 
export async function GET() {
    try {
        await connnectedToDB();
        const posts = await Post.find({}).populate('author').populate('category_id');
        return new Response(apiResponse(true, 'Post all', posts));      
    } catch(err) {
        return new Response(apiResponse(false, 'Something Wrong', null, err.message))
    }
}

// create post
export async function POST(req)
{
    try {
        await connnectedToDB();
        const res = await req.json();
        const {title, body, tags, category_id} = res;

        if(!title || !body || !category_id) {
            return new Response(apiResponse(false, 'All fields are required'))
        }
        const post = new Post({
            title,
            body,
            category_id,
            author : getUserInfo('_id'),
            tags : tags
        })
        await post.save();
        return new Response(apiResponse(true, 'Post created successfully', post), {
            status : 200
        })
    } catch (error) {
        return new Response(apiResponse(false, 'Something Wrong', null, error.message))
    }
}
