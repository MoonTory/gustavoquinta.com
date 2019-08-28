const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // This configuration is for working with absolute imports
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  })
}
