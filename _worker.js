export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/' || url.pathname === '') {
      return Response.redirect(
        'https://raw.githubusercontent.com/barry818/TV/refs/heads/main/btv.json',
        302  // 302 临时重定向
      );
    }
    
    return new Response('Not Found', { status: 404 });
  },
};