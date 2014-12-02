require.config({
    baseUrl: './',
    // ...
    packages: [
        {
          name: 'physicsjs',
          location: 'scripts/physicsjs-0.6.0',
          main: 'physicsjs-full-0.6.0.min'
        }
    ],
    //...
});

require([
    'scripts/physicsjs-0.6.0/physicsjs-full-0.6.0',
    'scripts/Sprites/target',
    'scripts/Sprites/pokeball',
    'scripts/Sprites/pokemon',
    'scripts/Sprites/trainer',
    'scripts/physicsjs-0.6.0/bodies/circle', // will mix into the PhysicsJS library
    'scripts/physicsjs-0.6.0/renderers/canvas',
    'scripts/physicsjs-0.6.0/behaviors/body-collision-detection',
    'scripts/physicsjs-0.6.0/behaviors/body-impulse-response',
    'scripts/physicsjs-0.6.0/behaviors/newtonian',
    'scripts/physicsjs-0.6.0/behaviors/sweep-prune'

], function( Physics ){
Physics(function(world){
  var viewWidth = 1000;
  var viewHeight = 375;
  var HEIGHT = 250;
  var LEFT_X = 150;
  var RIGHT_X = 850;
  var curHp = 100;

  var renderer = Physics.renderer('canvas', {
    el: 'viewport',
    width: viewWidth,
    height: viewHeight,
    meta: false, // don't display meta data
    styles: {
        // set colors for the circle bodies
        'circle' : {
            strokeStyle: '#351024',
            lineWidth: 1,
            fillStyle: '#d33682',
            angleIndicator: '#351024'
        }
    }
  });

  // add the renderer
  world.add( renderer );
  // render on each step
  world.on('step', function(){
    world.render();
  });

  // bounds of the window
  var viewportBounds = Physics.aabb(100, 100, viewWidth, viewHeight);

  // constrain objects to these bounds
  // world.add(Physics.behavior('edge-collision-detection', {
  //     aabb: viewportBounds,
  //     restitution: 0.99,
  //     cof: 0.99
  // }));
  world.add(Physics.behavior('sweep-prune'));

  /* Left Platform */
  var leftPlatform = new Image();
  leftPlatform.src = "img/stage/grass_platform.png";
  world.add(
    Physics.body('target', {
      x:LEFT_X,
      y:HEIGHT+30,
      radius:0,
      view: leftPlatform
    })
  );

  /* Right Platform */
  var rightPlatform = new Image();
  rightPlatform.src = "";
  world.add(
    Physics.body('target', {
      x:RIGHT_X,
      y:HEIGHT+30,
      radius:0,
      view: rightPlatform
    })
  );

  /* Pokemon */
  var pokemon = new Image();
  pokemon.src = "";
  world.add(
    Physics.body('pokemon', {
      x:RIGHT_X,
      y:HEIGHT,
      view: pokemon
    })
  );

  /* Trainer */
  var trainer = new Image();
  trainer.src = "";
  world.add(
    Physics.body('trainer', {
      x:LEFT_X,
      y:HEIGHT,
      radius:0,
      view: trainer
    })
  );

  /* Pokeball */
  var shotBalls = 1;
  var pokeball = new Image();
  pokeball.src = "";

  // Alerting index that the iframe is loaded
  // TODO: change to index.html full path
  var payload = {
    type: "message",
    content: "loaded"
  }
  parent.postMessage(payload, "*");

  // This on message will update the various images based on upgrades, etc.
  $(window).on("message onmessage", function(e) {
    var data = e.originalEvent.data;

    if (data.type == "stage") {
      rightPlatform.src = data.rightPlatformUrl;
      leftPlatform.src = data.leftPlatformUrl;
      pokemon.src = data.targetUrl;
      document.body.style.backgroundImage="url('" + data.backgroundUrl + "')";
    } else if (data.type == "upgrade") {
      trainer.src = data.trainerUrl;
      pokeball.src = data.pokeballUrl;
      document.onmousedown = function(event) {
        // Calculating x and y components
        var power = data.strength;
        var theta = Math.atan((event.y-HEIGHT)/(LEFT_X - event.x));
        var hypotenuse = power;
        var veloX = hypotenuse*Math.cos(theta);
        var veloY = -hypotenuse*Math.sin(theta);
        //console.log(veloX + " " + veloY);
        //console.log(theta*57.2);
        //console.log(Math.pow(Math.pow(veloX, 2) + Math.pow(veloY, 2), 0.5));
        //console.log(event.x/1200 + " " + (event.y-250)/1200);

        world.add(
          Physics.body('pokeball', {
            x: LEFT_X+21, // x-coordinate
            y: HEIGHT, // y-coordinate
            vx: veloX, // velocity in x-direction
            vy: veloY, // velocity in y-direction
            radius: 20,
            view: pokeball
          })
        );
      }
    } // end if
  });

  world.on('collisions:detected', function( data ){
    var collisions = data.collisions,col;
    debugger;
    for (var i = 0, l = collisions.length; i < l; ++i) {
      col = collisions[i];
      // Note: Body A and B are the bodies that hit together.
      // Pokeball hit detection
      if (col.bodyA.gameType === 'pokeball' || col.bodyB.gameType === 'pokeball') {
        if (col.bodyA.hit) {
          col.bodyA.hit();
        } else if (col.bodyB.hit) {
          col.bodyB.hit();
        }
      }
      // Pokemon getting hit
      if (col.bodyB.gameType === 'pokemon') {
        // Pokeball hit target
        curHp -= 25;
        if (curHp <= 0) {
          // Notify game that pokemon has been caught
          payload = {
            type: "capture",
            pokemonId: 4,
            "shiny?": 43432
          }
          parent.postMessage(payload, "*");
          curHp = 100;
        }
      }
    }
  });

  world.add(Physics.behavior('body-collision-detection'));
  // ensure objects bounce when edge collision is detected
  world.add( Physics.behavior('body-impulse-response') );

  // add some gravity
  world.add( Physics.behavior('constant-acceleration') );

  // subscribe to ticker to advance the simulation
  Physics.util.ticker.on(function(time, dt) {
      world.step(time);
  });

  // start the ticker
  Physics.util.ticker.start();
});

});