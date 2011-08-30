({
  appDir: 'app',
  baseUrl: 'src',
  // Uncomment to turn off uglify minification.
  //optimize: 'none',
  dir: 'build',
  paths: {
    cs: 'lib/cs',
  },
  // This pragma excludes the CoffeeScript compiler code
  // from the optimized source, since all CoffeeScript files
  // are converted and inlined into the main.js built file.
  pragmasOnSave: {
    excludeCoffeeScript: true
  },
  modules: [{
    name: 'main',
  }]
})
