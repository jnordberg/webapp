
if (console == undefined)
  var console = {log: Function(), warn: Function(), error: Function()};

require({paths: {cs: 'src/lib/cs'}}, ['cs!src/app'], function(App) {
  require.ready(function() {
    window.app = new App();
  });
});
