
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

exports.App = App;
