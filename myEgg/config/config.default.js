
exports.keys = 'my-cookie-secret-key';

// add view's configurations
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  exports.robot = {
    ua: [/curl/i, /Baiduspider/i],  //这里是robot的参数  就是传过去的option 暂时这样理解
  };

  exports.middleware = ['robot']; //这一行代码是注册使用robot中间件的代码
// robot's configurations
  