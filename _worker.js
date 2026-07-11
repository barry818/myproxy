export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 如果用户访问根路径，返回 JSON 内容
    if (url.pathname === '/' || url.pathname === '') {
      const jsonUrl = 'https://raw.githubusercontent.com/barry818/TV/refs/heads/main/btv.json';
      
      try {
        const response = await fetch(jsonUrl);
        // 复制响应，并添加允许跨域的头（如果需要）
        const newResponse = new Response(response.body, response);
        newResponse.headers.set('Access-Control-Allow-Origin', '*');
        newResponse.headers.set('Content-Type', 'application/json');
        return newResponse;
      } catch (error) {
        return new Response('JSON 文件获取失败', { status: 500 });
      }
    }
    
    // 其他路径可以返回 404 或继续处理
    return new Response('Not Found', { status: 404 });
  },
};