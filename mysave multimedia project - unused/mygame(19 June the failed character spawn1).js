kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	clearColor: [0,0,0,1]
	// background: [ 0, 0, 255, ],
    // Warrior of Chaos
    // Scavenger Of Wasteland
    // Antiluminescent Knight
    // Envoy of the End
    // Embodiment of Knight Valhalla
})

const MOVE_SPEED = 200;

loadSprite('samurai_1_right', 'image/warrior_right.png')
loadSprite('samurai_1_left', 'image/warrior_left.png')
loadSprite('samurai_1_up', 'image/warrior_up.png')
loadSprite('samurai_1_down', 'image/warrior_down.png')
loadSprite('slash1', 'image/slash1.png')
loadSprite('enemy1', 'image/enemy1.png')
loadSprite('enemy2', 'image/enemy2.png')
loadSprite('enemy2_right', 'image/enemy2_right.png')

loadSprite('bg1', 'image/ground7.png')
loadSprite('bg2', 'image/ground6.png')
loadSprite('bg3', 'image/ground5.png')


loadSprite('victorybg', 'image/victory.jpg')
loadSprite('introbg', 'image/intro1.jpg')
loadSprite('title', 'image/title1.png')
loadSprite('logo', 'image/logo1.png')

// loadSprite('loading', 'image/spiral1.png')
loadSprite('loading', 'image/skele.png')

// loadSprite('loading', 'gif/loading1.gif')

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
loadSprite('dungean_door', 'image/dungean_door.png')
loadSprite('sword', 'image/sword.png')

loadSprite('victorylogo', 'image/victorylogo.png')
loadSprite('lose', 'image/lose3.jpg')

loadSound('sound_dead', 'sound/sound_dead.mp3')
loadSound('soundhit', 'sound/soundhit.mp3')
loadSound('sounddestroy', 'sound/destroy.mp3')
loadSound('sounddestroy2', 'sound/destroy2.mp3')
loadSound('introsong', 'sound/Hunt  Rise Up Dead Man lyrics.mp3')
loadSound('victorysong', 'sound/Blue Dragon music  Thumbs Up.mp3')

loadSound('silence', 'sound/silence.mp3')
loadSound('themesong', 'sound/themesong.mp3')
loadSound('theme1', 'sound/Civilization V music  AfricaMiddle East  Gawazi.mp3')
loadSound('theme2', 'sound/Civilization V music  AfricaMiddle East  Ghizemli.mp3')
loadSound('theme3', 'sound/Civilization V music  AfricaMiddle East  Salute to the Sun.mp3')
loadSound('theme4', 'sound/Dragon Quest IV DS Music  Frightening Dungeons.mp3')
loadSound('theme5', 'sound/Dragon Quest IX  A Temple With No Master.mp3')
loadSound('theme6', 'sound/Dragon Quest V DS Music   Monsters in the Dungeon.mp3')
loadSound('theme7', 'sound/Dragon Quest VI DS  Last Dungeon.mp3')
loadSound('theme8', 'sound/Dragon Warrior III NES Music  Cave Theme.mp3')
loadSound('theme9', 'sound/Dragon Warrior IV NES Music  Cave Theme.mp3')
loadSound('theme10', 'sound/Dune Official Soundtrack  Ripples in the Sand  Hans Zimmer  WaterTower.mp3')


scene("loading", () =>{


	wait(3, () =>{
		add([text('Press ENTER to continue'), pos(10,10), scale(2)])
		keyPress('enter', () => {go("intro")})
	})

	const mark = add([
		sprite("loading"),
		pos(width() / 2, height() / 2),
		scale(0.5),
		rotate(0),
		origin("center"),
	]);

	mark.action(() => {
		// mark.scale = Math.sin(time()) * 1.1;
		mark.angle += dt();
	});

})

scene("intro", ()=>{

	const introbg = add([sprite('introbg'), scale(1),])

	const logo = add([
		sprite('logo'),
		pos(655,263),
		scale(0.9),
	])

	const title = add([
		sprite('title'),
		pos(360,50),
		scale(0.7),
	])

	wait(3, () =>{
		add([text('Press ENTER to start'), pos(620,650), scale(2)])
		keyPress('enter', () => {
			introsong.pause()
			go("mygame",{ level:0, score:0})
		})
	})

	

	const introsong = play('introsong', {loop: true, volume: 3});
	introsong.play()

})


scene("mygame",  ({ level, score }) =>{
	debug.inspect = true

	layer(['bg', 'obj', 'ui'], 'bg')

 	const maps = [
	    
        [   
	        'vvvvvvvvvvvvvvvvvvvvvvvv',
	        'v     c                v',
	        'v            O     b   v',
	        'v  %%%%%%%%%%%%%%%%^^  v',
	        'v  %%%%%%%%%%%%%%@@    v',
	        'v  v$$    ^     a      v',
	        'v  v$        b a    @  v',
	        'v  v     ^     a       g',
	        'v  v     ^     a   b   v',
	        'v        %%%%^     b   v',
	        'v        %%%^^         v',
	        'v        %%^^ @        v',
	        'v$$$  =  vv^^^     c   v',
	        'v       vvv^^          v',
	        'v   @@   v        @    v',
	        'v        $$$$          v',
	        'vvvvvvvvvvvvvvvvvvvvvvvv',
        ],
        [   
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
	        'a c                  c a',
	        'a aaaa aaaaaaaaaaa aaa a',
	        'a a       a  c  a  a   a',
	        'a aaaaaaa a a a   aa   h',
	        'a a       aaa aaaaaaaaaa',
	        'aaaa aaaaaa a     c  aaa',
	        'a           aaaaaaaa  aa',
	        'a aaaaaaaaaaa       a aa',
	        'a a   O       aaaaa a  a',
	        'a a aaaaaaaaaaa   a aa a',
	        'a a       a     a    a a',
	        'abaaaaaaa a aaaaaaaaaa a',
	        'a  c     ba      c a  ba',
	        'a aaaaaaa aaaa aaaaa a a',
	        'a  c a      a   c    a a',
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
        ],
        [
	        '^^^^^^^^^^^^^^^^^^^^^^^^',
	        '^     c           @@@  ^',
	        '^^^^^^^^^^^^^^^^   b   ^',
	        '^                      ^',
	        '^       ^^^^^^^^^      ^',
	        '^     @@@ ^  b  a      ^',
	        '^  ^^^^^^      a@@@ @  ^',
	        '^       ^      a       ^',
	        '^   @@@  ^     a   b   ^',
	        '^                  b   ^',
	        '^     ^^^^^^       ^^^^^',
	        '^    c        @ @      ^',
	        '^     ^^^^^^  @    c   ^',
	        '^@@@        ^^@   @ @  ^',
	        '^   @@@       @ = @    ^',
	        '^     @@@     @        ^',
	        '^^^^^^^^^^^^^^^^^^^^^^^^',
        ],
	]


	const backgrounds = [
        ['?'],
        ['+'],
        ['x'],
    ]

 //    player = add([
	// 	sprite('samurai_1_right'),
	// ])


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
		'b': [sprite('enemy1'), scale(0.8), 'enemy1', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'c': [sprite('enemy2'), scale(1), 'enemy2', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'g': [sprite('escape-door'), 'next-level', scale(1),],
		'h': [sprite('dungean_door'), 'next-level', scale(1),],
		'=': [sprite('sword'), 'end', scale(1),],
		'o': [sprite('samurai_1_right'),],


		'?': () => [sprite('bg1'), scale(0.957),],  //music.play("theme5", {volume: 0.5})    //play(music[1])
		'+': () => [sprite('bg2'), scale(2), layer('bg'),],  //music.play([2])
		'x': () => [sprite('bg3'), scale(2), layer('bg'),],  //play(music[2])

	}

	addLevel(backgrounds[level], levelCfg)
	addLevel(maps[level], levelCfg)
	// addLevel(music[level], levelCfg)

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


    music = play("silence", {duration: 0.001})

    const song = [];
    song[1]= "themesong";
    song[2]= "theme1";
    song[3]= "theme6";

    let i = 0

	if (i=parseInt(level+1))
    {
    	music = play(song[i])
    	music.play()
    }

    // player = add(levelCfg.toString('o'))

    // {go("intro")}


    // player = levelCfg.toString('o',[])


    player = add([
		sprite('samurai_1_right'),
	])
	
	player.action(()=> {
		player.resolve()
	})
	
	player.overlaps('next-level', () => {
		music.pause()

		// stopAudio(music)

		go("mygame", {
			level: (level+1),
			score: scoreLabel.value,
			// backgounds: (level+1),
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

	function attack(player){
		const obj = add([sprite('slash1'), pos(player), 'slash1', scale(0.85), area(vec2(1,43),vec2(43,1))])  //scale(0.75)
		wait(0.125, () =>{
			destroy(obj)
		})
	}

	keyPress('space', () => {
		attack(player.pos.add(player.dir.scale(40)) )  //scale50
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
	// player.collides('danger',() =>{
	// 	play('sound_dead', {volume:2})
	// 	music.pause()
	// 	go('lose', { score: scoreLabel.value })
	// })

	player.collides('danger',() =>{

		camShake(15)
		destroy(player)

		play('sound_dead', {volume:2})
		music.pause()
		wait(1.5, () =>{
			go('lose', { score: scoreLabel.value })
		})
		
	})


	// player.collides('danger',() =>{
	// 	play('sound_dead', {volume:2})
	// 	player.hurt(1)
	// 	camShake(10)
	// 	if (player.health= 0){
	// 		music.pause()
	// 		destroy(player)
	// 		wait(1.5, () =>{
	// 			go('lose', { score: scoreLabel.value })
	// 		})
	// 	}
		
	// })

	player.collides('end', () => {
		music.pause()
		go('win', { score: scoreLabel.value })
	})
	

})

scene("lose", ({score}) =>{

	const losebg = add([sprite('lose'), scale(0.7),pos(200,10)])
	wait(3, () =>{
		add([text('Press ENTER to restart'), pos(640,650), scale(1.5)])
		keyPress('enter', () => go("mygame",{ level:0, score:0}))

		add([text('Press ESC to quit'), pos(668,665), scale(1.5)])
		keyPress('escape', () => go("intro"))
	})
})

scene("win", ({score}) =>{
	// layer(['bg', 'obj', 'ui'], 'bg')

	const victorysong = play("victorysong", {loop:true, volume: 0.5})
    victorysong.play()
    const victorybg = add([sprite('victorybg'), scale(0.9),])
	add([text(score, 32), origin('center'), pos(width()/2, height()/2), color(0,0,0)])
	// add([text('YOU ARE VICTORIOUS'), pos(400,150), scale(4), color(0,0,0)])

	const victorylogo = add([
		sprite('victorylogo'),
		pos(400,150),
		scale(0.9),
	])

	add([text('Press ENTER to exit'), pos(620,500), scale(2)])

	keyPress('enter', () => {
		victorysong.pause()
		go("intro")
	})
})


// start("mygame",{ level:0, score:0})

// start("loading")
// start("intro")
start("mygame",{ level:0, score:0})