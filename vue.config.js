const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host:'localhost',
    port: 3000,
    open: true
  },
  configureWebpack: {    
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },    
    module: {        
      rules: [    
        {    
          test: /\.tsx?$/,    
          loader: 'ts-loader',    
          exclude: /node_modules/,    
          options: {
            appendTsSuffixTo: [/\.vue$/],    
          }    
        }        
      ]    
    }    
  }
})
