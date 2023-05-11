import { NextRequest, NextResponse } from "next/server";
// import { isAuthenticated } from "@lib/auth";

// Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: "/api/:function*",
// };

export function middleware(request) {
  // Call our authentication function to check the request
  //if (!isAuthenticated(request)) {
  // Respond with JSON indicating an error message
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders);
  // requestHeaders.set("x-hello-from-middleware1", "hello");
  console.log(JSON.stringify(request.headers));
  return new NextResponse(
    JSON.stringify({ success: false, message: "authentication failed" }),
    { status: 401, headers: { "content-type": "application/json" } }
  );
  // }
}
