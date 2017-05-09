// Path is a node module that kind of helps you resolve paths, so you don't have to do it by hand
const path = require('path')

module.exports = {
// Just letting webpack know whenever I run this command from anywhere inside of this project, go back to the root directory
  context: __dirname,
	// Where to enter your project
  entry: './js/ClientApp.js',
	// This is a debugging tool to help you instead of seeing line 50,000 of bundle up JS
  devtool: 'source-map',
	// Where you have to put your output
  output: {
		// Where you want the bundle.js to go
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
		// If I say require this file with no extension, this is the progression of file name it's going to go through before it gives up
    extensions: ['.js', '.json']
  },
	// what kind of stuff do you want webpack to report on
  stats: {
    colors: true,
		// Gonna tell you if stuff fails and why it failed
    reasons: true,
		//
    chunks: false
  },
	// This is basically all of the transforms that you want webpack to apply
  module: {
		// If it passes this rule, then apply this transformation
    rules: [
			// Same way to tell if a file is going to be included or not
      {
        test: /\.js$/,
        loader: 'babel-loader'
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
				
			}
    ]
  }
}
