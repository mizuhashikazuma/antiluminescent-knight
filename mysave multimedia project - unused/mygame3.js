kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	background: [ 0, 0, 255, ],

});

const MOVE_SPEED = 300;

//loadRoot()//
loadSprite("samurai_1_right", "image/samurai_1_right.png");
loadSprite("samurai_1_left", "image/samurai_1_left.png");
loadSprite("enemy1", "image/enemy1.png");
loadSprite("bg", "image/grass.jpg");
loadSprite("wall", "image/Castle_Wall2.png");

scene("mygame", () =>{

	layer(["bg", "obj", "ui"], "bg");
	
	add([sprite("bg"), scale(2.5), layer("bg")
	]);

	const player = add([
	sprite("samurai_1_right"),
	pos(50,100),
	scale(0.5),
	]);
	
	player.action(()=> {
		player.resolve()
	});
	
	
	keyDown("left", () => {
		player.changeSprite("samurai_1_left")
		player.move(-MOVE_SPEED,0)
		player.dir = vec2(-1,0)
	});
		
	keyDown("right", () => {
		player.changeSprite("samurai_1_right")
		player.move(MOVE_SPEED,0)
		player.dir = vec2(-1,0)
	})
	
	keyDown("down", () => {
		player.move(0, MOVE_SPEED)
		player.dir = vec2(0,-1)
	})
	
	keyDown("up", () => {
		player.move(0, -MOVE_SPEED)
		player.dir = vec2(0,-1)
	})
	
	add([
	sprite("enemy1"),
	pos(950,300),
	]);


	
});

start("mygame");