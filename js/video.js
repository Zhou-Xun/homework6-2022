const video = document.querySelector("#player1");
const slider = document.querySelector('#slider')

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", () => {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = slider.value + "%";
});

document.querySelector('#pause').addEventListener("click", () => {
	console.log("Pause Video");
	video.pause()
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
	video.currentTime += 15;
	if (video.currentTime === video.duration) {
		video.currentTime = 0;
	}
	console.log(`New location ${video.currentTime}`);
})

document.querySelector('#mute').addEventListener("click", () => {
	console.log(document.querySelector('#mute').innerHTML)
	if (video.muted) {
		video.muted = false
		document.querySelector('#mute').innerHTML = "Mute"
	} else {
		video.muted = true
		document.querySelector('#mute').innerHTML = "Unmute"
	}
})

document.querySelector('#vintage').addEventListener("click", () => {
	document.querySelector("video").classList.add("oldSchool");
})

document.querySelector('#orig').addEventListener("click", () => {
	document.querySelector("video").classList.remove("oldSchool");
})



// show volume
document.querySelector('#volume').innerHTML = video.volume * 100 + '%';

// change slider
document.querySelector('#slider').addEventListener("change", () => {
	video.volume = slider.value / 100;
	document.querySelector('#volume').innerHTML = slider.value + '%';
})
