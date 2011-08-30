/*
  Minimal implementation of CommonJS's AsynchronousDefinition Module
  and Require.js's async require
   - Johan Nordberg <code@johan-nordberg.com>
*/

(function() {

var modules = {
  'exports': this,
  'module': null // is module supposed to be the current module?
};

function define(/* id?, dependencies?, factory */) {
  var i, factory, id = 'main', dependencies = ['require', 'exports', 'module'];
  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == 'string') id = arguments[i];
    else if (arguments[i] instanceof Array) dependencies = arguments[i];
    else factory= arguments[i];
  };

  if (!factory)
    throw new Error('invalid arguments passed to define');

  if (typeof factory == 'function') {
    require(dependencies, function() {
      modules[id] = factory.apply(factory, arguments);
    });
  } else {
    modules[id] = factory;
  }
};
define.amd = {};

function require() {
  var mods, callback, i;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) mods = arguments[i];
    else if (typeof arguments[i] == 'function') callback = arguments[i];
  };

  if (!mods || !callback)
    throw new Error('invalid arguments passed to require');

  var args = [];
  for (var i = 0; i < mods.length; i++)
    args.push(modules[mods[i]]);

  callback.apply(callback, args);
};

modules['define'] = this.define = define;
modules['require'] = this.require = require;

// require.js's reqdyfunction replacement
var readychain = [], domready = false;
require.ready = function(callback) {
  if (domready)
    callback.call();
  else
    readychain.push(callback);
};
function onReady() {
  if (domready) return;
  domready = true;
  for (var i = 0; i < readychain.length; i++)
    readychain[i].call();
};
window.addEventListener('DOMContentLoaded', onReady, false);
window.addEventListener('load', onReady, false); // for crap browsers

}).apply((typeof exports != 'undefined') ? exports : this);
