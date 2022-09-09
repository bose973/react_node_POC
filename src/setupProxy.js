

const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app) {
  // if (useIT == false){
  //   app.use(
  //     '/',
  //     createProxyMiddleware({
  //       target: "http://localhost:3001",
  //       changeOrigin: true,
  //     })
  //   );

  // }
  // else{
  //   app.use(
  //     ReactSession.get("route"),
  //     createProxyMiddleware({
  //       target: ReactSession.get("target"),
  //       changeOrigin: true,
  //     })
  //   );
  // }
  app.use(
    '/python',
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  // app.use(
  //   '/py',
  //   createProxyMiddleware({
  //     target: "http://localhost:3001",
  //     changeOrigin: true,
  //   })
  // );

  app.use(
    '/py',
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );

  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    '/bodyCheck',
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );

  app.use(
    '/scheduler',
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );  

  app.use(
    '/dsstarsai/v2/api/eds/batch',
    createProxyMiddleware({
      target: "https://sit-dsmbrsvc.anthem.com",
      changeOrigin: true,
    })
  )

};

