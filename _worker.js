export default {
  async fetch(request, env) {
    // 1. 解析请求的 URL
    const url = new URL(request.url);
    
    // 2. 在这里修改目标地址，例如代理到 'example.com'
    url.hostname = "example.com"; // 将 example.com 替换成你实际要代理的域名
    
    // 3. 创建新的请求并转发
    const newRequest = new Request(url, request);
    return fetch(newRequest);
  },
};