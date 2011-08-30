###

define is a require.js construct
syntax is a bit loose, documenting here for my own sanity

if the first argument of define is a array, that is assumed to be the dependencies
of the module you define

any function argument will be called with the dependencies (if any) in order and
the return value of that function will be "defined" as that module

this means you cannot define a class directly! even if it has no dependencies
since javascript classes are in fact functions.

###

define ->

  class App
    constructor: ->
      hello = 'hello world'
      h1 = document.createElement('h1')
      h1.style.textAlign = 'center'
      for letter in hello
        rgb = [Math.random() * 255, Math.random() * 255, Math.random() * 255].map (v) ->
          return parseInt(v)
        el = document.createElement('span')
        el.textContent = letter
        el.style.color = "rgb(#{ rgb.join(',') })"
        h1.appendChild(el)
      document.body.appendChild(h1)
