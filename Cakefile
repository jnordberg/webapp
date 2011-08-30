sys = require 'sys'
fs = require 'fs'
exec = require('child_process').exec;

rmdirSyncRecursive = (path) ->
  currDir = path
  for file in fs.readdirSync(path)
    currPath = currDir + '/' + file
    currFile = fs.statSync currPath
    if currFile.isDirectory()
      rmdirSyncRecursive currPath
    else if currFile.isSymbolicLink()
      fs.unlinkSync currPath
    else
      fs.unlinkSync currPath
  fs.rmdirSync path

task 'build', 'builds project', ->
  # could probably load the js directly
  sys.print 'building project...'
  exec 'rm -r build/* && node bin/r.js -o config.js', (error, stdout, stderr) ->
    sys.print stdout
    if error
      throw error

    fs.renameSync 'build/src/main.js', 'build/js/app.js'
    rmdirSyncRecursive 'build/src'
    fs.unlinkSync 'build/build.txt'

    # glue require.js to app
    appjs = fs.readFileSync 'build/js/app.js'
    reqjs = fs.readFileSync 'build/js/require.js'

    fs.writeFileSync('build/js/app.js', reqjs + '\n' + appjs);

    sys.print 'done!\n'
