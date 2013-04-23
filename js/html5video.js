var video = document.querySelector('video'),
	togglePlay = document.querySelector('#play'),
	position = document.querySelector('#position'),
	using = document.querySelector('#using'),
	ready = false,
	controls = document.querySelector('#controls'),
	fullscreen = null;

addEvent(togglePlay, 'click', function () {
	if (ready) {
		video.playbackRate = 0.5;
		if (video.paused) {
			if (video.ended) video.currentTime = 0;
			video.play();
			this.value = "pause";
		} else {
			video.pause();
			this.value = "play";
		}
	}
});

addEvent(video, 'timeupdate', function () {
	position.innerHTML = asTime(this.currentTime);
});

addEvent(video, 'ended', function () {
	togglePlay.value = "play";
});

addEvent(video, 'canplay', function () {
	video.muted = true;
	ready = true;
	document.querySelector('#duration').innerHTML = asTime(this.duration);
	using.innerHTML = this.currentSrc;
	if (video.webkitSupportsFullscreen) {
		fullscreen = document.createElement('input');
		fullscreen.setAttribute('type', 'button');
		fullscreen.setAttribute('value', 'fullscreen');
		controls.insertBefore(fullscreen, controls.firstChild);
		addEvent(fullscreen, 'click', function () {
			video.webkitEnterFullScreen();
		});
	}
});

function asTime(t) {
	t = Math.round(t);
	var s = t % 60;
	var m = Math.round(t / 60);

	return two(m) + ':' + two(s);
}

function two(s) {
	s += "";
	if (s.length < 2) s = "0" + s;
	return s;
}