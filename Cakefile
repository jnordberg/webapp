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

    # build app.js
    mainjs = fs.readFileSync 'build/src/main.js'
    reqjs = fs.readFileSync 'build/src/lib/require-bare.js'

    fs.writeFileSync('build/js/app.js', reqjs + ';\n' + mainjs);

    #fs.renameSync 'build/src/main.js', 'build/js/app.js'
    rmdirSyncRecursive 'build/src'
    fs.unlinkSync 'build/build.txt'

    sys.print 'done!\n'
