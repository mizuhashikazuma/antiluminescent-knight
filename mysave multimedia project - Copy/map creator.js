kaboom({
	global:true,
	fullscreen:true,
	scale:1,
	debug:true,
	clearColor: [0,0,0,1]
	// background: [ 0, 0, 255, ],

})



loadSprite('wallr1', 'image/floortile2.jpg')




scene("mygame",  ({ level, score }) =>{

	

	// const maps = [
	//     [
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
	//         '@@@@@@@@@@@@@@@@@@@@@@@@',
 //        ],
        
	// ]

	const maps = [
	    [
	        '@@@@@@@@@@@@@',
	        '@@@@@@@@@@@@@',
	        '@@@@@@@@@@@@@',
	        '@@@@@@@@@@@@@',
	        
        ],
        
	]

	const levelCfg = {
		width: 650,   //36
		height: 650,  //36
		
		'@': [sprite('wallr1'), scale(3), solid(), 'walls'],
		
		
	}
	addLevel(maps[level], levelCfg,)

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



	

})

scene("lose", ({score}) =>{
	add([text(score, 32), origin('center'), pos(width()/2, height()/2)])
})


start("mygame",{ level:0, score:0})