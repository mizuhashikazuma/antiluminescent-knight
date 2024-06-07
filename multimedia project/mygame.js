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
loadSprite('enemy3', 'image/enemy3.png')
loadSprite('enemy4', 'image/enemy4.png')
loadSprite('enemy5', 'image/enemy5.png')


loadSprite('bg1', 'image/ground8.jpg')
loadSprite('bg2', 'image/ground4.png')
loadSprite('bg3', 'image/ground12.png')
loadSprite('bg4', 'image/ground15.jpg')


loadSprite('victorybg', 'image/victory.jpg')
loadSprite('introbg', 'image/intro1.jpg')
loadSprite('title', 'image/title1.png')
loadSprite('logo', 'image/logo1.png')

loadSprite('loading', 'image/skele.png')

loadSprite('wall', 'image/Castle_Wall2.png')
loadSprite('wall1', 'image/mosswall1.png')
// loadSprite('wall2', 'image/mosswall2.png')
loadSprite('lavawall', 'image/lavawall.png')
loadSprite('wall4', 'image/mosswall4.png')
// loadSprite('wall5', 'image/mosswall5.png')
// loadSprite('wall6', 'image/mosswall6.png')
loadSprite('wall7', 'image/mosswall7.png')
loadSprite('wallr1', 'image/redwall1.png')
// loadSprite('wallr2', 'image/redwall2.png')
// loadSprite('wallr3', 'image/redwall3.png')

loadSprite('tree1', 'image/tree1.png')
loadSprite('tree2', 'image/tree2.png')
loadSprite('tree3', 'image/tree3.png')
loadSprite('tree4', 'image/tree4.png')
loadSprite('deadtree', 'image/deadtree.png')
loadSprite('stone1', 'image/stone1.png')
loadSprite('flower_bed1', 'image/flower_bed1.png')
loadSprite('lava_stone', 'image/lava_stone.png')
loadSprite('water_block', 'image/water_block.png')
loadSprite('grass_block', 'image/grass_block.png')
loadSprite('lava_block', 'image/lava_block.png')
loadSprite('road1', 'image/road1.png')
loadSprite('bridge', 'image/bridge.png')
loadSprite('stairs', 'image/stairs.png')
loadSprite('torch', 'image/torch.png')


loadSprite('myhouse', 'image/myhouse.png')
loadSprite('house1', 'image/house1.png')
loadSprite('house2', 'image/house2.png')
loadSprite('toilet', 'image/toilet.png')
loadSprite('perigi', 'image/perigi.png')
loadSprite('library', 'image/library.png')

loadSprite('escape-door', 'image/gate1.png')
loadSprite('escape-door2', 'image/gate2.png')
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
loadSound('joker', 'sound/Joker.mp3')

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
	debug.inspect = false

	layer(['bg', 'obj', 'ui'], 'bg')

 	const maps = [
	    
        [   
	        '%%%%%vvvnnnnnnnnnnn%%f  ',
	        '%%@sss*  *n^ z  @%nv    ',
	        '%@sssss?  n^     %n     ',
	        '%ssvvvss  n      *nnnndn',
	        '%sv+ @vs  nn  d nnn$ *dn',
	        '%sv   vs      d ^^* dddn',
	        '^ssvvvss   *  d*    dvvn',
	        'n^^sss   >    d  *  dvvn',
	        'n    *      $ d     d vv',               /////  LEVEL 1  /////
	        '@dddddddddddddddddddd* v',
	        'nnndnnndnnndnnnn @@*dddv',
	        'nn               @@***dv',
	        'n^-   -   -   $  @@%%*d%',
	        '^^               @@%%*d%',
	        'n^              ?@@%%*d%',
	        'n^    *       @@@@@%%*d%',
	        'nnn%%nnnnnn@@@@@@%%%%%x%',
        ],
        [   
	        '^^^^^vvvvvvvvvvvvvvvvv@v',
	        '^^@     <  ^%%%% %vvvvdv',
	        '^@  ^^^^^^* ^^%%%vvvvvdv',
	        '^   < ^^^^^ ^* %%* %v d%',
	        '^ ^^^ ^ddddd^   % %% *d%',
	        '^  $^ ^*^^^d^dvb^ %*ddd%',
	        '^^  @^^ ^^^dddv ^  ddvv%',
	        '@^@b@ ^>^^^vvvv   %* vv%',
	        '@$ *^ *^ dd$$$$v %%@  v%',                /////  LEVEL 2  /////
	        '@   ^ <  ^dd   $%%@ss *%',
	        '@ ^^^^^^^^^d++   ?sssss@',
	        '@ ^^^   < ^dd%  ssssssss',
	        '@   v vvv %%d$b$ssssssss',
	        '@^v  bvvvb%% $ *@sssssss',
	        '^^^v *vvv    $ @@@*sssss',
	        '@^^^^v vvv*%%@*   <    g',
	        '@^^%%%%%%%%%@@@@@@@@@@@@',
        ],
        [   
	        'vvvssssaaaaaaaaaaaaaaaaa',
	        'vvdssss||aaaaaaaaaaaaaaa',
	        'vv dsssssaaaaaaaaaahaaaa',
	        'v * dssss||||||||||~||||',
	        'v   dssssssssssssss~ssss',
	        '^ %  dsssssssssssss~ssss',
	        '^ ^%  @%%%@% *   @@ >@ $',
	        '^  <    %%   %  $*$    $',
	        '^   +  b%* b %%  $$ <  $',                 /////  LEVEL 3  /////
	        '^  + +  %   %%%  $   $ $',
	        '@     ^  %  %%%  $$  * $',
	        'ss *   ^  % %%   $$b  $$',
	        'sss@ ^  ^ % %% B $   $$$',
	        'ssss  ^ ^ < %   **  $$$$',
	        'sss*@^dd^^  % @ **$$$$$$',
	        '@dddddd^^^^ v     $$$$$$',
	        '@@@@@vvvvvvvvvvvv$$$$$$$',
        ],
        [   
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
	        'a     a   #      a     a',
	        'a a a a aa aaaaa a awa a',
	        'a a aaaaaa   a aha aa  a',
	        'a a      aaa a aaa aaaaa',
	        'aaaaaaaa a   a a    #  a',
	        'a      a a a a waaaa a a',
	        'akaaaa   c   a     a aka',
	        'a     awaaaaaaaaaa a a a',                  /////  LEVEL 4  /////
	        'aaaaabaa  #   aa   a a a',
	        'a     a  aaaa  a a aaa a',
	        'a aaaaa aw  aa a a a a a',
	        'a   #   a   wa   a a aba',
	        'akaaaaaa  a aaa    a a a',
	        'a aawaa  aa    aaaaa a a',
	        'a    c  aaa aa     #   a',
	        'aaaaaaaaaaaaaaaaaaaaaaaa',
        ],
        [   
	        'llllllleeeeeeeeeeeeeeeee',
	        'l  yllllllllllleett #  e',
	        'l l ll    # yleeettt e e',
	        'lkl  c e    lleuetttke e',
	        'l ll eee ee  le et e e h',
	        'l llk  ekele  e et e eee',
	        'l  l l e   ee   ee e e e',
	        'lyl  l eee   eeeee e e e',
	        'll yl #   ee  e c  e   e',
	        't  l  lll   e   e ee e e',                  /////  LEVEL 5  /////
	        'tt  l  llll  eee  leeeke',
	        'ttt  l   l # yel lle   e',
	        'tttty ll  l   e   ye eee',
	        'ttttt   lk l llll  e   e',
	        'ttttttt l   l   eeeeee e',
	        'ttttttttttt   l    #   e',
	        'tttttttttttttleeeeeeeeee',
        ],
        [   
	        'eeeeeeeuuuuuuuuuuuuuuuuu',
	        'e   #         u    #   u',
	        'e eeee eeeeuuuuuuu uuu u',
	        'e e       e  #  u  u   u',
	        'e eeeeeee e u u   uu   h',
	        'e e       eeu uuuuuuuuuu',
	        'eee eeeeeee e     #  uwu',
	        'e     C     eeuuuuuu uuu',                  
	        'ekeeeeeeeeeee      u uuu',                    /////  LEVEL 6  /////
	        'e e       #   uuuu u   u',                  
	        'e e eeeeeeeeeee    uuu u',
	        'e e       e     uw u   u',
	        'ekeeeeeee e eeeeuuuu uuu',
	        'e  #     ke      # u   u',
	        'e eeeeeee eeeekeuuuuuu u',
	        'e  # e      e   #      u',
	        'tttttttttttteeeeeeuuuuuu',
        ],
        [
	        'uuuuueeeeeeeeeeeeeeeeeee',
	        'u   ul   eeeeeeeeeeeeeee',
	        'u u ul l eeeeeheeeel||||',
	        'u u u  lll   l # ll tttt',
	        'u uku l #   l     # tttt',
	        'u u u   lllll#   |||tttt',
	        'u u ul ll #  ll kttttttt',
	        'uuu ul  l ll   l  lltttt',
	        '||  ull lklll  l   llltt',                     /////  LEVEL 7  /////
	        'ttl ul  l l  l  l   llll',
	        'tt  u kll l # l ll  # ll',
	        'tt #   ll l lll lllll ll',
	        'tt  ll l  l     l  #  ||',
	        'tt| ll     lllll     |tt',
	        'ttt    |||   #   ||||ttt',
	        'ttt||||ttt|||||||ttttttt',
	        'tttttttttttttttttttttttt',
        ],
        [   
	        'ttttttllllqqqqvvvvssssss',
	        'tttttlll  q= q  vvvsssss',
	        'tttlll   qq  qq   $$$sss',
	        'ttlll   rqq~~qqr * $$$ss',
	        'ttll y  urq~~qru ?  $$ss',
	        'ttll   y rr~~rr    *$$ss',
	        'tt|llll  uu  uu* ^^^^|ss',
	        'ttt||ll     *   %^^||sss',                  
	        'ttttt||lll    %%%||sssss',                     /////  LEVEL 8  /////
	        'ttttttt||ll  %%||sssssss',                  
	        'ttttttttt||  ||sssssssss',
	        'ttttttttttty sssssssssss',
	        'ttttttttttt  sssssssssss',
	        'ttttttttttt *sssssssssss',
	        'ttttttttttt  sssssssssss',
	        'ttttttttttt  sssssssssss',
	        'ttttttttttt  sssssssssss',
        ],
	]


	const backgrounds = [
        ['1'],
        ['1'],
        ['1'],
        ['2'],
        ['3'],
        ['3'],
        ['4'],
        ['1'],
    ]


	const levelCfg = {
		width: 43,   //31
		height: 43,  //31

		'a': [sprite('wall'), scale(1), solid(), 'walls'],
		'q': [sprite('wall1'), scale(1), solid(), 'walls'],
		'w': [sprite('torch'), scale(1), solid(), 'walls'],
		'e': [sprite('lavawall'), scale(1), solid(), 'walls'],
		'r': [sprite('wall4'), scale(1), solid(), 'walls'],
		'u': [sprite('wall7'), scale(1), solid(), 'walls'],
		'j': [sprite('wallr1'), scale(1), solid(), 'walls'],
		'~': [sprite('stairs'), scale(1)],
		'^': [sprite('tree1'), scale(1), solid(), 'walls'],
		'v': [sprite('tree2'), scale(1), solid(), 'walls'],
		'$': [sprite('tree3'), scale(1), solid(), 'walls'],
		'%': [sprite('tree4'), scale(1), solid(), 'walls'],
		'l': [sprite('deadtree'), scale(1), solid(), 'walls'],
		'@': [sprite('stone1'), scale(1), solid(), 'walls'],
		'z': [sprite('myhouse'), scale(1.05), solid(), 'walls'],
		'+': [sprite('house1'), scale(0.35), solid(), 'walls'],
		'-': [sprite('house2'), scale(1.05), solid(), 'walls'],
		'f': [sprite('library'), scale(1.2), solid(), 'walls'],
		'?': [sprite('toilet'), scale(0.4), solid(), 'walls'],
		'>': [sprite('perigi'), scale(0.5), solid(), 'walls'],
		'*': [sprite('flower_bed1'), scale(1)],
		'y': [sprite('lava_stone'), scale(1)],
		'b': [sprite('enemy1'), scale(0.8), 'enemy1', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'c': [sprite('enemy2'), scale(1), 'enemy2', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'<': [sprite('enemy3'), scale(1), 'enemy3', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'k': [sprite('enemy4'), scale(1), 'enemy4', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'#': [sprite('enemy5'), scale(1), 'enemy5', 'danger', {dir: -1, timer: 0}, solid(), area(vec2(1,40),vec2(40,1))],
		'g': [sprite('escape-door'), 'next-level', scale(1),],
		'x': [sprite('escape-door2'), 'next-level', scale(1),],
		'h': [sprite('dungean_door'), 'next-level', scale(1),],
		'=': [sprite('sword'), 'end', scale(1.2),],
		'n': [sprite('grass_block'), scale(1), solid(), 'walls'],
		's': [sprite('water_block'), scale(1), solid(), 'walls'],
		't': [sprite('lava_block'), scale(1), solid(), 'walls'],
		'd': [sprite('road1'), scale(1),],
		'|': [sprite('bridge'), scale(1), solid(), 'walls'],


		'1': () => [sprite('bg1'), scale(1.033),],
		'2': () => [sprite('bg2'), scale(0.95),],
		'3': () => [sprite('bg3'), scale(0.92),],
		'4': () => [sprite('bg4'), scale(1.033),],

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


//////////////////////////////////////////////////////////////////////////////////////////////////////////music///////////////////////////////////////////////////////////////////////

    music = play("silence", {duration: 0.001})

    const song = [];
    song[1]= "themesong";
    song[2]= "themesong";
    song[3]= "themesong";
    song[4]= "theme6";
    song[5]= "theme10";
    song[6]= "theme4";
    song[7]= "theme6";
    song[8]= "themesong";

    let i = 0


	if (i=parseInt(level+1))
    {
    	music = play(song[i])
    	music.play()
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////spawn///////////////////////////////////////////////////////////////////////
   
    const spawn = [];
    spawn[1]= pos(519, 126);
    spawn[2]= pos(950, 40);
    spawn[3]= pos(43, 645);
    spawn[4]= pos(473, 645);
    spawn[5]= pos(678, 172);
    spawn[6]= pos(43, 200);
    spawn[7]= pos(43, 200);
    spawn[8]= pos(475, 688);

    // const spawn = [
    //     ["themesong"],
    //     ["theme5"],
    //     ["theme3"], 
    // ]

    let s = 0
	if (s=parseInt(level+1))
    {
    	// player = add([sprite('samurai_1_right'), spawn[s], layer('ui') ])

    	player = add([
    		sprite('samurai_1_right'),
    		spawn[s],
    		solid(),

    		scale(0.75),
    		{
    			dir: vec2(1,0),
    		}
    	])

    	player.action(()=> {player.resolve()})


    }

////////////////////////////////////////////////////////////////////

	
	
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
	const ENEMY1_SPEED = 60

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
	const ENEMY2_SPEED = 90
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


//enemy3
	const ENEMY3_SPEED = 80
	action('enemy3', (e3) =>{
		e3.move(e3.dir * ENEMY3_SPEED,0)
		e3.timer -= dt()
		if (e3.timer <= 0){
			e3.dir = -e3.dir
			e3.timer = rand(3)
		}
	})


	collides('enemy3', 'walls', (e3,w) =>{
		e3.dir = -(e3.dir)
	})

	collides('slash1', 'enemy3', (s1,e3) =>{
		camShake(4)
		play('sounddestroy2', {volume:3})
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e3)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})



//enemy4
	const ENEMY4_SPEED = 80

	action('enemy4', (e4) =>{
		e4.move(0,e4.dir * ENEMY4_SPEED)
		e4.timer -= dt()
		if (e4.timer <= 0){
			e4.dir = -e4.dir
			e4.timer = rand(5)
		}
	})

	collides('enemy4', 'walls', (e4,w) =>{
		e4.dir = -(e4.dir)
	})

	collides('slash1', 'enemy4', (s1,e4) =>{
		camShake(4)
		play('sounddestroy', {volume:0.75})
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e4)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})


//enemy5
	const ENEMY5_SPEED = 110
	action('enemy5', (e5) =>{
		e5.move(e5.dir * ENEMY5_SPEED,0)
		e5.timer -= dt()
		// e2.collides('walls',()=>{e2.dir = -(e2.dir)})
		if (e5.timer <= 0){
			e5.dir = -e5.dir
			// e2.changeSprite('enemy2_right')
			e5.timer = rand(4)
		}
	})


	collides('enemy5', 'walls', (e5,w) =>{
		e5.dir = -(e5.dir)
	})

	collides('slash1', 'enemy5', (s1,e5) =>{
		camShake(4)
		play('sounddestroy2', {volume:3})
		wait(0.5, () =>{
			destroy(s1)
		})
		destroy(e5)
		scoreLabel.value++
		scoreLabel.text = scoreLabel.value
	})




///////////////////////////////////



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

	const joker = play("joker", {loop:true, volume: 2})
    joker.play()

	const losebg = add([sprite('lose'), scale(0.7),pos(200,10)])
	wait(3, () =>{
		add([text('Press ENTER to restart'), pos(640,650), scale(1.5)])
		keyPress('enter', () => go("mygame",{ level:0, score:0}))

		add([text('Press ESC to quit'), pos(668,665), scale(1.5)])
		keyPress('escape', () => {
			joker.pause()
			go("intro")
			})
	})
})

scene("win", ({score}) =>{
	// layer(['bg', 'obj', 'ui'], 'bg')

	const victorysong = play("victorysong", {loop:true, volume: 0.5})
    victorysong.play()
    const victorybg = add([sprite('victorybg'), scale(0.9),])
	// add([text(score, 32), origin('center'), pos(width()/2, height()/2), color(0,0,0)])
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

start("loading")
// start("intro")
// start("mygame",{ level:8-1, score:0})