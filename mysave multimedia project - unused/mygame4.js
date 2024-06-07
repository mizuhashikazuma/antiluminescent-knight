kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	clearColor: [0,0,0,1]
	// background: [ 0, 0, 255, ],

})

const MOVE_SPEED = 500;

loadSprite('samurai_1_right', 'image/samurai_1_right.png')
loadSprite('samurai_1_left', 'image/samurai_1_left.png')
loadSprite('slash1', 'image/slash1.png')
loadSprite('enemy1', 'image/enemy1.gif')
// loadSprite('soundhit', 'sound/soundhit.mp3')
loadSprite('grss', 'image/grass.jpg')
loadSprite('bg', 'image/mossfloor.jpg')
loadSprite('wall', 'image/Castle_Wall2.png', width(5), height(5))
loadSprite('escape-door', 'image/gate1.png')

scene("mygame",  ({ level, score }) =>{

	layer(['bg', 'obj', 'ui'], 'bg')
	add([sprite('bg'), scale(2), layer('bg')])

	const maps = [
	    [
	        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	        'a                               a',
	        'a           b           b       a',
	        'a                               a',
	        'a          b                    a',
	        'a               b               a',
	        'a                     b         a',
	        'a                b              g',
	        'a       b                       ',
	        'a                               a',
	        'a                               a',
	        'a                               a',
	        'a           b             b     a',
	        'a                               a',
	        'a                               a',
	        'a   b                           a',
	        'a                               a',
	        'a                               a',
	        'a      b                        a',
	        'a                               a',
	        'a               b         b     a',
	        'a                    b          a',
	        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        ],
        [

	        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	        'a                     b         a',
	        'a                               a',
	        'a  aaaaaaaaaaaaaaaaaaaaaaaaaaa  a',
	        'a  a           a                a',
	        'a  a     a     a                a',
	        'a  a     a     a                a',
	        'a  a     a     a               g',
	        'a  a     a     a       b         ',
	        'a        a                      a',
	        'a        a                      a',
	        'a        a                      a',
	        'a        a                      a',
	        'a                               a',
	        'a        aaaaa                  a',
	        'a        aaaaa        b         a',
	        'a        aaaaa                  a',
	        'a     b  aaaa                   a',
	        'a        aaaa         b         a',
	        'a        aaaa                   a',
	        'a        a                      a',
	        'a        a                      a',
	        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        ],
	]

	const levelCfg = {
		width: 31,
		height: 31,
		'a': [sprite('wall'), scale(1), solid(), 'wall'],
		'b': [sprite('enemy1'), scale(1), 'enemy1', 'danger', {dir: -1, timer: 0}, solid(), ],
		'g': [sprite('escape-door'), 'next-level', scale(0.25)],
	}
	addLevel(maps[level], levelCfg)

	const scoreLabel = add([
		pos(1370, 10),
		text('0'),
		layer('ui'),
		scale(2),

		{
			value: score,
		}
	])

	add([text('Level ' + parseInt(level+1)), pos(1300, 80), scale(2)])



	const player = add([
		sprite('samurai_1_right'),
		pos(50,300),
		scale(6),
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
		player.dir = vec2(-1,0)
	})
	
	keyDown('down', () => {
		player.move(0, MOVE_SPEED)
		player.dir = vec2(0,-1)
	})
	
	keyDown('up', () => {
		player.move(0, -MOVE_SPEED)
		player.dir = vec2(0,-1)
	})



	function attack(player){
		const obj = add([sprite('slash1'), pos(player), 'slash1', scale(0.0625)])
		wait(0.25, () =>{
			destroy(obj)
		})
	}

	keyPress('space', () => {
		attack(player.pos.add(player.dir.scale(50)))
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
	




	const ENEMY1_SPEED = 150

	action('enemy1', (e1) =>{
		e1.move(0,e1.dir * ENEMY1_SPEED)
		e1.timer -= dt()
		if (e1.timer <= 0){
			e1.dir = -e1.dir
			e1.timer = rand(4)
		}
	})

	collides('enemy1', 'wall', (e1) =>{
		e1.dir = -(e1.dir)
	})

	player.overlaps('danger',() =>{
		go('lose', { score: scoreLabel })
	})

	

})

scene("lose", ({score}) =>{
	add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
})


start("mygame",{ level:0, score:0})