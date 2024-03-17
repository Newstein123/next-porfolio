import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request) {
  const userToken = cookies().get("token");
  if (!userToken) {
    jwt.verify(userToken, process.env.SECRECT_KEY, (err) => {
      if(err) {
        return Response.json(JSON.stringify({
          success : false,
          message : "Unauthourized",
        }))
      }
    })
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: [
    '/admin/dashboard', 
    '/admin/post', 
    '/admin/category', 
    '/admin/profile', 
    '/admin/user', 
    '/admin/general_setting',
  ],
};
