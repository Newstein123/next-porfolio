import apiResponse from "@/utlis/apiResponse";

export async function POST(req) {
  try {
    await connnectedToDB();
    console.log(req.params);
  } catch (error) {
    return apiResponse(false, error.message, []);
  }
}
