import { NextRequest, NextResponse } from "next/server";

// If the incoming request has the "beta" cookie
// then we'll rewrite the request to /beta
export function middleware(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  console.log(`req.headers=${req.headers}`);
  console.log(JSON.stringify(req.headers, null, 2));
  console.log(JSON.stringify(requestHeaders, null, 2));

  req.nextUrl.pathname = "/";
  return NextResponse.rewrite(req.nextUrl);
}

// // Supports both a single value or an array of matches
// export const config = {
//   matcher: '/',
// };

// import { NextRequest, NextResponse } from "next/server";
// // import { isAuthenticated } from "@lib/auth";

// // Limit the middleware to paths starting with `/api/`
// // export const config = {
// //   matcher: "/api/:function*",
// // };

// export function middleware(request) {
//   // Call our authentication function to check the request
//   //if (!isAuthenticated(request)) {
//   // Respond with JSON indicating an error message
//   // const requestHeaders = new Headers(request.headers);
//   // console.log(requestHeaders);
//   // requestHeaders.set("x-hello-from-middleware1", "hello");
//   console.log(JSON.stringify(request, null, 2));

//   // }
// }
