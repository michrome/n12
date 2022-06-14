export function middleware(req) {
  const output = {};
  req.headers.forEach((value, name) => (output[name] = value));
  return new Response(JSON.stringify(output, null, 2));
}
