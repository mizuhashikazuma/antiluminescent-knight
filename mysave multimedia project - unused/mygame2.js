kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	// background-image: url(../image/bg.jpg);
});

// add a piece of text at position (120, 80)
add([
    pos(24, 24),
    text("ohhi", {
        size: 48, // 48 pixels tall
        width: 320, // it'll wrap to next line when width exceeds this value
        font: "sink", // there're 4 built-in fonts: "apl386", "apl386o", "sink", and "sinko"
    }),
])

go("mygame2");