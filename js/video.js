const video = document.querySelector("#player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

// show volume
document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
console.log(video.volume);

// change slider
const slider = document.querySelector('#slider')
window.setInterval(changeVolume, 1);

function changeVolume() {
	video.volumn = slider.value / 100;
	console.log(video.volumn * 100 + '%');
	// document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	document.querySelector('#volume').innerHTML = slider.value + '%';
}

function play() {
	if (video.paused) {
		video.play();
	}
}

function pause() {
	if (!video.paused) {
		video.pause();
	}
}

function slower() {
	video.playbackRate *= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
}

function faster() {
	video.playbackRate /= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
}

function skip(value) {
	console.log(`Original location ${video.currentTime}`);
	video.currentTime += value;
	console.log(`New location ${video.currentTime}`);
}

function mute() {
	if (video.muted) {
		video.muted = false
		document.getElementById("mute").innerText = "mute"
	} else {
		video.muted = true
		document.getElementById("mute").innerText = "unmute"
	}
}

function oldStyle() {
	video.style.filter = "grayscale(100%)";
}

function orig() {
	video.style.filter = "none";
}

