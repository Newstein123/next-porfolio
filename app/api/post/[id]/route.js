import { connnectedToDB } from "@/utlis/db";
import apiResponse from "@/utlis/apiResponse";
import Post from "@/models/post";
import { del } from "@vercel/blob";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connnectedToDB();
    const post = await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { views: 1 } },
      { new: true }
    )
      .populate("author")
      .populate("category_id");

    if (post) {
      return new Response(apiResponse(true, "Post detail", post), {
        status: 200,
      });
    }

    return new Response(apiResponse(true, "Post not found"));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message),
      {
        status: 500,
      }
    );
  }
}

// update post
export async function PUT(req, { params }) {
  try {
    await connnectedToDB();
    const res = await req.json();
    const { title, body, category_id, tags } = res;
    const id = params.id;

    const post = await Post.findOneAndUpdate(
      { _id: id },
      {
        title,
        body,
        category_id,
        tags,
      },
      { new: true }
    );
    await post.save();
    return new Response(apiResponse(true, "Post updated successfully", post));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message)
    );
  }
}

// delete post
export async function DELETE(req, { params }) {
  try {
    await connnectedToDB();
    const id = params.id;
    const post = await Post.findOneAndDelete({ _id: id });
    if (post.post_images.length > 0) {
      post.post_images.map((item) => {
        del(item, {
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
      });
    }
    return new Response(apiResponse(true, "Post deleted successfully", []));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message)
    );
  }
}
