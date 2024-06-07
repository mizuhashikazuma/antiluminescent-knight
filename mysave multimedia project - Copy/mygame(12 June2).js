kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	clearColor: [0,0,0,1]
	// background: [ 0, 0, 255, ],

})

const MOVE_SPEED = 200;

loadSprite('samurai_1_right', 'image/samurai_1_right.png')
loadSprite('samurai_1_left', 'image/samurai_1_left.png')
loadSprite('samurai_1_up', 'image/samurai_1_up.png')
loadSprite('samurai_1_down', 'image/samurai_1_down.png')
loadSprite('slash1', 'image/slash1.png')
loadSprite('enemy1', 'image/enemy1.png')
loadSprite('enemy2', 'image/enemy2.png')
loadSprite('enemy2_right', 'image/enemy2_right.png')

loadSprite('bg', 'image/ground7.png')
loadSprite('wall', 'image/Castle_Wall2.png')
loadSprite('wall1', 'image/mosswall1.png')
loadSprite('wall2', 'image/mosswall2.png')
loadSprite('wall3', 'image/mosswall3.png')
loadSprite('wall4', 'image/mosswall4.png')
loadSprite('wall5', 'image/mosswall5.png')
loadSprite('wall6', 'image/mosswall6.png')
loadSprite('wall7', 'image/mosswall7.png')
loadSprite('wallr1', 'image/redwall1.png')
loadSprite('wallr2', 'image/redwall2.png')
loadSprite('wallr3', 'image/redwall3.png')

loadSprite('tree1', 'image/tree1.png')
loadSprite('tree2', 'image/tree2.png')
loadSprite('tree3', 'image/tree3.png')
loadSprite('tree4', 'image/tree4.png')
loadSprite('stone1', 'image/stone1.png')

loadSprite('escape-door', 'image/gate1.png')

loadSound('sound_dead', 'sound/sound_dead.mp3')
loadSound('soundhit', 'sound/soundhit.mp3')
loadSound('themesong', 'sound/themesong.mp3')
loadSound('sounddestroy', 'sound/destroy.mp3')
loadSound('sounddestroy2', 'sound/destroy2.mp3')
// const music = play("themesong", {loop: true, volume: 0.5});

scene("mygame",  ({ level, score }) =>{

	layer(['bg', 'obj', 'ui'], 'bg')
	const background = add([sprite('bg'), scale(0.957), layer('bg')])
    const music = play("themesong", {loop: true, volume: 0.5})
    music.play()
    // music.pause()




	const maps = [
	    [
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
	        'a c                  c a',
	        'a aaaa aaaaaaaaaaa aaa a',
	        'a a       a  c  a  a   a',
	        'a aaaaaaa a a a   aa   g',
	        'a a       aaa aaaaaaaaaa',
	        'aaaa aaaaaa a     c  aaa',
	        'a           aaaaaaaa  aa',
	        'a aaaaaaaaaaa       a aa',
	        'a a           aaaaa a  a',
	        'a a aaaaaaaaaaa   a aa a',
	        'a a       a     a    a a',
	        'abaaaaaaa a aaaaaaaaaa a',
	        'a  c     ba      c a  ba',
	        'a aaaaaaa aaaa aaaaa a a',
	        'a  c a      a   c    a a',
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
        ],
        [

	        'vvvvvvvvvvvvvvvvvvvvvvvv',
	        'v     c                v',
	        'v                  b   v',
	        'v  %%%%%%%%%%%%%%%%^^  v',
	        'v  %%%%%%%%%%%%%%@@    v',
	        'v  v$$    ^  b  a      v',
	        'v  v$          a    @  v',
	        'v  v     ^     a       g',
	        'v  v     ^     a   b   v',
	        'v    @   %%%%^     b   v',
	        'v        %%%^^         v',
	        'v     c  %%^^ @        v',
	        'v$$$$$$  vv^^^     c   v',
	        'v       vvv^^          v',
	        'v   @@   v        @    v',
	        'v        $$$$          v',
	        'vvvvvvvvvvvvvvvvvvvvvvvv',
        ],
	]

	const levelCfg = {
		width: 43,   //31
		height: 43,  //31
		'a': [sprite('wall'), scale(1), solid(), 'walls'],
		'q': [sprite('wall1'), scale(1), solid(), 'walls'],
		'w': [sprite('wall2'), scale(1), solid(), 'walls'],
		'e': [sprite('wall3'), scale(1), solid(), 'walls'],
		'r': [sprite('wall4'), scale(1), solid(), 'walls'],
		't': [sprite('wall5'), scale(1), solid(), 'walls'],
		'y': [sprite('wall6'), scale(1), solid(), 'walls'],
		'u': [sprite('wall7'), scale(1), solid(), 'walls'],
		'j': [sprite('wallr1'), scale(1), solid(), 'walls'],
		'k': [sprite('wallr2'), scale(1), solid(), 'walls'],
		'l': [sprite('wallr3'), scale(1), solid(), 'walls'],
		'^': [sprite('tree1'), scale(1), solid(), 'walls'],
		'v': [sprite('tree2'), scale(1), solid(), 'walls'],
		'$': [sprite('tree3'), scale(1), solid(), 'walls'],
		'%': [sprite('tree4'), scale(1), solid(), 'walls'],
		'@': [sprite('stone1'), scale(1), solid(), 'walls'],
		'b': [sprite('enemy1'), scale(0.8), 'enemy1', 'danger', {dir: -1, timer: 0}, solid()],
		'c': [sprite('enemy2'), scale(1), 'enemy2', 'danger', {dir: -1, timer: 0}, solid()],
		'g': [sprite('escape-door'), 'next-level', scale(1)],
	}
	addLevel(maps[level], levelCfg,)
 
	const scoreLabel = add([
		pos(1370, 300),
		text('0'),
		layer('ui'),
		scale(3),

		{
			value: score,
		}
	])

	add([text('Level ' + parseInt(level+1)), pos(1180, 100), scale(4)])
    add([text('Kills: '), pos(1200, 300), layer('ui'), scale(3)])


	const player = add([
		sprite('samurai_1_right'),
		pos(50,200),
		// body(),
		scale(1),
		{
			dir: vec2(1,0),
		}
	])
	
	player.action(()=> {
		player.resolve()
	})

	player.overlaps('next-level', () => {
		go("mygame", {
			level: (level+1) % maps.length,
			score: scoreLabel.value,
			// background.changeSprite('bg_jungle'), scale(2), layer('bg'),
		})
	})
	
	
	keyDown('left', () => {
		player.changeSprite('samurai_1_left')
		player.move(-MOVE_SPEED,0)
		player.dir = vec2(-1,0)
	})
		
	keyDown('right', () => {
		player.changeSprite('samurai_1_right')
		player.move(MOVE_SPEED,0)
		player.dir = vec2(1,0)
	})
	
	keyDown('down', () => {
		player.changeSprite('samurai_1_down')
		player.move(0, MOVE_SPEED)
		player.dir = vec2(0,1)
	})

	keyDown('up', () => {
		player.changeSprite('samurai_1_up')
		player.move(0, -MOVE_SPEED)
		player.dir = vec2(0,-1)
	})
	
	// keyDown('z', () => {
	// 	// player.jump(100)
	// 	if(player.grounded())
	// 	{
	// 		player.jump(200)
	// 	}
	// })



	function attack(player){
		const obj = add([sprite('slash1'), pos(player), 'slash1',scale(0.75)])
		wait(0.125, () =>{
			destroy(obj)
		})
	}

	keyPress('space', () => {
		attack(player.pos.add(player.dir.scale(50)))   //scale50
		play('soundhit', {volume:0.5})
	})

	
	



//enemy1
	const ENEMY1_SPEED = 100

	action('enemy1', (e1) =>{
		e1.move(0,e1.dir * ENEMY1_SPEED)
		e1.timer -= dt()
		if (e1.timer <= 0){
			e1.dir = -e1.dir
			e1.timer = rand(5)
		}
	})

	collides('enemy1', 'walls', (e1,w) =>{
		e1.dir = -(e1.dir)
	})

	collides('slash1', 'enemy1', (s1,e1) =>{
		camShake(4)
		play('sounddestroy', {volume:0.75})
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e1)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})


//enemy2
	const ENEMY2_SPEED = 100
	action('enemy2', (e2) =>{
		e2.move(e2.dir * ENEMY2_SPEED,0)
		e2.timer -= dt()
		// e2.collides('walls',()=>{e2.dir = -(e2.dir)})
		if (e2.timer <= 0){
			e2.dir = -e2.dir
			// e2.changeSprite('enemy2_right')
			e2.timer = rand(4)
		}
	})

 //    enemy2.collides('walls',()=>{
 //    	enemy2.dir = -(enemy2.dir)
	// })


	collides('enemy2', 'walls', (e2,w) =>{
		e2.dir = -(e2.dir)
	})

	collides('slash1', 'enemy2', (s1,e2) =>{
		camShake(4)
		play('sounddestroy2', {volume:3})
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e2)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})





//wall
	player.collides('danger',() =>{
		play('sound_dead', {volume:2})
		music.pause()
		go('lose', { score: scoreLabel.value })
	})

	

})

scene("lose", ({score}) =>{
	add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
	add([text('Game Over!'), scale(6)])
})


start("mygame",{ level:0, score:0})