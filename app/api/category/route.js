import Category from "@/models/category";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";

export async function GET() {
  await connnectedToDB();
  try {
    const categories = await Category.find();
    return new Response(apiResponse(true, "All categories", categories));
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}

export async function POST(req) {
  const response = await req.json();
  const { name } = response;
  try {
    await connnectedToDB();
    const category = new Category({ name });

    await category.save();
    return new Response(
      apiResponse(true, "Category created successfully", category)
    );
  } catch (error) {
    console.log(error);
    return new Response(apiResponse(false, error.message, []));
  }
}
