module.exports={
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        styles: "@assets/style"
      }
    }

  },
  devServer:{
    proxy:{
      '/apix': {
        target: 'http://yery.bjchyedu.cn/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/': '/'
        },
        onProxyReq: function(proxyReq, req, res){
          proxyReq.setHeader('Host', 'yery.bjchyedu.cn')
          proxyReq.setHeader('Origin', 'http://yery.bjchyedu.cn')
          proxyReq.setHeader('Referer', 'http://yery.bjchyedu.cn/html/map.html')
          console.log(req.headers, req)
        }
      }
    }
    
  }
}