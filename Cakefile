
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

task 'setup', 'install deps & such', ->
  exec './bin/setup.sh', (error, stdout, stderr) ->
    sys.print stdout + stderr
    if error
      throw error

task 'build', 'builds project', ->
  sys.print 'building project...'
  exec 'rm -rf build/* && cp -r app/* build/ && ./bin/jacker -c -o build/app.js build/src/main.js', (error, stdout, stderr) ->
    sys.print stdout + stderr
    if error
      throw error
    else
      rmdirSyncRecursive 'build/src'
    sys.print 'done!\n'
