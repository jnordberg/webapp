
if (console == undefined)
  var console = {log: Function(), warn: Function(), error: Function()};

require({paths: {cs: 'lib/cs'}}, ['cs!app'], function(App) {
  require.ready(function() {
    window.app = new App();
  });
});
