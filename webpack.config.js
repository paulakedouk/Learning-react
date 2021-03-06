// Path is a node module that kind of helps you resolve paths, so you don't have to do it by hand
const path = require('path')

module.exports = {
// Just letting webpack know whenever I run this command from anywhere inside of this project, go back to the root directory
  context: __dirname,
	// Where to enter your project
  entry: './js/ClientApp.js',
	// This is a debugging tool to help you instead of seeing line 50,000 of bundle up JS
  devtool: 'cheap-module-source-map',
	// Where you have to put your output
  output: {
		// Where you want the bundle.js to go
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // },
		// If I say require this file with no extension, this is the progression of file name it's going to go through before it gives up    
    extensions: ['.js', '.jsx', '.json']
  },
	// what kind of stuff do you want webpack to report on
  stats: {
    colors: true,
		// Gonna tell you if stuff fails and why it failed
    reasons: true,
		//
    chunks: false
  },
  devServer: {
		publicPath: '/public/',
		// Tell to devServer: if you dont match something here, the browser probably will know what to do with it, so just send it on down anyway (like reroute 404s to the homepage)
		historyApiFallback: true
	},
  
	// This is basically all of the transforms that you want webpack to apply
  module: {
		// If it passes this rule, then apply this transformation
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
				// Don't lint anything in node_modules
        exclude: /node_modules/
      },
      {
				// If you see a .css path, then you're going to use style loader
        test: /\.css$/,
        use: [
					// Doesn't need configuration, it just works as default
					// Going to inject your styles into yout bundle.js
          'style-loader',
          {
						// Makes it so webpack can read CSS
            loader: 'css-loader',
						// Bugs me about the css-loader
            options: {
              url: false
            }
          }
        ]
      },
			{
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve('js'),
          path.resolve('node_modules/preact-compat/src')
        ]
      },
      {
        // Same way to tell if a file is going to be included or not
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
