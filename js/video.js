const video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", () => {
	if (video.paused) {
		console.log("Play Video");
		video.play();
	}
});

document.querySelector('#pause').addEventListener("click", () => {
	if (!video.paused) {
		video.pause();
	}
})

document.querySelector('#slower').addEventListener("click", () => {
	video.playbackRate *= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
})

document.querySelector('#faster').addEventListener("click", () => {
	video.playbackRate /= 0.95;
	console.log(`New speed is ${video.playbackRate}`);
})

document.querySelector('#skip').addEventListener("click", () => {
	console.log(`Original location ${video.currentTime}`);
	video.currentTime -= 15;
	console.log(`New location ${video.currentTime}`);
})

document.querySelector('#mute').addEventListener("click", () => {
	if (video.muted) {
		video.muted = false
		document.getElementById("mute").innerText = "mute"
	} else {
		video.muted = true
		document.getElementById("mute").innerText = "unmute"
	}
})

document.querySelector('#vintage').addEventListener("click", () => {
	video.style.filter = "grayscale(100%)";
})

document.querySelector('#orig').addEventListener("click", () => {
	video.style.filter = "none";
})



// show volume
document.querySelector('#volume').innerHTML = video.volume * 100 + '%';

// change slider
const slider = document.querySelector('#slider')
document.querySelector('#slider').addEventListener("change", () => {
	video.volume = slider.value / 100;
	document.querySelector('#volume').innerHTML = slider.value + '%';
})
