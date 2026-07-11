export default {
  async fetch(request, env) {
    // 1. 获取用户请求的完整路径（比如 /api/video）
    const url = new URL(request.url);
    
    // 2. 修改目标地址（这里换成你的最终目标）
    // 只需要改 hostname（主机名），保留原有的路径和参数
    url.hostname = "webhtv-remote-cloudflare.879958251.workers.dev";
    url.protocol = "https:"; // 强制使用 HTTPS
    
    // 3. 转发请求
    const newRequest = new Request(url, request);
    return fetch(newRequest);
  },
};