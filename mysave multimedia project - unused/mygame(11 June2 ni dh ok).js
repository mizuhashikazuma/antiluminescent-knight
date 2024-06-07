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
loadSprite('slash1', 'image/slash1.png')
loadSprite('enemy1', 'image/enemy1.png')
loadSprite('enemy2', 'image/enemy2.png')
loadSprite('enemy2_right', 'image/enemy2_right.png')
// loadSprite('soundhit', 'sound/soundhit.mp3')
loadSprite('grss', 'image/grass.jpg')
loadSprite('bg', 'image/mossfloor.jpg')
loadSprite('bg_jungle', 'image/bg_jungle.png')
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
loadSprite('escape-door', 'image/gate1.png')

scene("mygame",  ({ level, score }) =>{

	layer(['bg', 'obj', 'ui'], 'bg')
	const background = add([sprite('bg'), scale(2), layer('bg')])

	const maps = [
	    [
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
	        'e   rq       uuuuuuu   a',
	        'e   rq       yyyyyyy   a',
	        'e   rq       aa  aaa   g',
	        'e   rq  b         a  aaa',
	        'e   rq     wtttt  a aaaa',
	        'e   rq   c w      a   aa',
	        'e   rq     w   b  a   aa',
	        'e   rq     w b    a  b a',
	        'e   rq     w      a    a',
	        'e   rq b   w      a    a',
	        'e   rq     w   c       a',
	        'e          wkkkkjjjlllja',
	        'eua a  b               a',
	        'eua a       c    a     a',
	        'euala a          a   b a',
	        'qqwweerryyuuaaaaaaaaaaaa',
        ],
        [

	        'wwwwwwwwwwwwwwwwwwwwwwww',
	        'a                      e',
	        'a       c          b   e',
	        'a  rrrrrrrrrrrrrrrrrr  e',
	        'a  r           a       e',
	        'a  r     q  b  a       e',
	        'a  r     q     a       e',
	        'a  r     q     a       g',
	        'a  r     q     a   b   e',
	        'a        qqqqq     b   e',
	        'a        qqqqq         e',
	        'a     c  qqqq          e',
	        'a        qqqqq     c   e',
	        'a        qqqq          e',
	        'a        q             e',
	        'a        q             e',
	        'yyyyyyyyyyyyyyyyyyyyyyyy',
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
		'b': [sprite('enemy1'), scale(1), 'enemy1', 'danger', {dir: -1, timer: 0}, solid(), ],
		'c': [sprite('enemy2'), scale(0.6), 'enemy2', 'danger', {dir: -1, timer: 0}, solid(), ],
		'g': [sprite('escape-door'), 'next-level', scale(1)],
	}
	addLevel(maps[level], levelCfg)

	const scoreLabel = add([
		pos(1270, 200),
		text('0'),
		layer('ui'),
		scale(2),

		{
			value: score,
		}
	])

	add([text('Level ' + parseInt(level+1)), pos(1200, 80), scale(2.5)])



	const player = add([
		sprite('samurai_1_right'),
		pos(50,300),
		body(),
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
		player.move(0, MOVE_SPEED)
		player.dir = vec2(0,1)
	})
	
	keyDown('space', () => {
		// player.jump(100)
		if(player.grounded())
		{
			player.jump(100)
		}
	})



	function attack(player){
		const obj = add([sprite('slash1'), pos(player), 'slash1',scale(0.75)])
		wait(0.125, () =>{
			destroy(obj)
		})
	}

	keyPress('z', () => {
		attack(player.pos.add(player.dir.scale(50)))   //scale50
	})

	
	



//enemy1
	const ENEMY1_SPEED = 150

	action('enemy1', (e1) =>{
		e1.move(0,e1.dir * ENEMY1_SPEED)
		e1.timer -= dt()
		if (e1.timer <= 0){
			e1.dir = -e1.dir
			e1.timer = rand(4)
		}
	})

	collides('enemy1', 'walls', (e1) =>{
		e1.dir = -(e1.dir)
	})

	collides('slash1', 'enemy1', (s1,e1) =>{
		camShake(4)
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e1)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})


//enemy2
	const ENEMY2_SPEED = 200
	action('enemy2', (e2) =>{
		e2.move(e2.dir * ENEMY2_SPEED,0)
		e2.timer -= dt()
		if (e2.timer <= 0){
			e2.dir = -e2.dir
			// e2.changeSprite('enemy2_right')
			e2.timer = rand(4)
		}
	})

	collides('enemy2', 'walls', (e2) =>{
		e2.dir = -(e2.dir)
	})

	collides('slash1', 'enemy2', (s1,e2) =>{
		camShake(4)
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e2)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})





//wall
	player.overlaps('danger',() =>{
		go('lose', { score: scoreLabel })
	})

	

})

scene("lose", ({score}) =>{
	add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
})


start("mygame",{ level:0, score:0})