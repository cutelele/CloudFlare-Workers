export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/https\:\/\/raw.githubusercontent.com\/')) {
      url.href= url.pathname.substring(1,url.pathname.length);
      url.hostname = 'raw.githubusercontent.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
