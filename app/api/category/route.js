import Category from "@/models/category";
import { connnectedToDB } from "@/utlis/db";

export async function GET() {
  await connnectedToDB();
  try {
    const categories = await Category.find();
    return Response.json(categories);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req) {
  const response = await req.json();
  const { name } = response;
  try {
    await connnectedToDB();
    const categoy = new Category({ name });

    await categoy.save();
    return new Response(JSON.stringify({ name }), { status: 201 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new prompt", {
      status: 500,
    });
  }
}
