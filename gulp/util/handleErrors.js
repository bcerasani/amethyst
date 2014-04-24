var notify = require("gulp-notify");

var HueApi = require("node-hue-api").HueApi;

var host = "192.168.100.122",
    username = "3ad334849f9efa2274b278f14d2977f",
    api = new HueApi(host, username);

function hueError(err) {
  api.lightStatus(3)
    .then(function(status) {
      api.setLightState(3, flash)
        .then(api.setLightState(3, status.state));
    })
    .done(console.log(err));
}

var flash = {
  "on":true,
  "bri": 255,
  "hue": 65535,
  "sat": 255,
  "transitiontime": 1
};

module.exports = function() {
	// Send error to notification center with gulp-notify
	notify.onError({
		title: "Compile Error",
		message: "<%= error.message %>"
	}).apply(this, arguments);
  hueError();
	// Keep gulp from hanging on this task
	this.emit('end');
};
