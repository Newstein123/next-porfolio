import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";
import { getUserInfo } from "@/utlis/getUserInfo";

// get all posts 
export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || 1;
    const perpage = searchParams.get('perpage') || 5;
    const title = searchParams.get('title');
    const tag = searchParams.get('tag');
    const category_id = searchParams.get('category_id');
    const createdAt = searchParams.get('createdAt');
    const offset = (page - 1) * perpage;

    const query = {};

    if(title) {
        query.title = { $regex: title, $options: 'i' };
    }

    if(createdAt) {
        const isoDateString = `${createdAt}T00:00:00.000Z`;
        query.createdAt = { $gte: isoDateString, $lt: new Date(new Date(isoDateString).getTime() + 24 * 60 * 60 * 1000).toISOString() };
    }

    if (tag) {
        const tagsRegex = new RegExp(tag, 'i');
        query.tags = tagsRegex;
    }

    if(category_id) {
        query.category_id = category_id;
    }

    try {
        await connnectedToDB();
        const posts = await Post.find(query).populate('author')
                                        .sort({createdAt : -1})
                                        .skip(offset)
                                        .limit(perpage);
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
