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
  var curHp;

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
  var viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);

  // constrain objects to these bounds
  world.add(Physics.behavior('edge-collision-detection', {
      aabb: viewportBounds,
      restitution: 0.99,
      cof: 0.99
  }));
  world.add(Physics.behavior('body-collision-detection'));
  world.add(Physics.behavior('sweep-prune'));

  /* Left Platform */
  var leftPlatform = new Image();
  leftPlatform.src = "";
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
  var target = new Image();
  target.src = "";
  world.add(
    Physics.body('target', {
      x:RIGHT_X,
      y:HEIGHT,
      view: target
    })
  );

  /* Trainer */
  var trainer = new Image();
  trainer.src = "";
  world.add(
    Physics.body('target', {
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
  parent.postMessage("anything", "*");

  // This on message will update the various images based on upgrades, etc.
  $(window).on("message onmessage", function(e) {
    var data = e.originalEvent.data;

    if (data.type == "stage") {
      rightPlatform.src = data.rightPlatformUrl;
      leftPlatform.src = data.leftPlatformUrl;
      target.src = data.targetUrl;
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
        console.log(veloX + " " + veloY);
        //console.log(theta*57.2);
        console.log(Math.pow(Math.pow(veloX, 2) + Math.pow(veloY, 2), 0.5));
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
    for (var i = 0, l = collisions.length; i < l; ++i) {
      col = collisions[i];
      if (col.bodyA.gameType === 'pokeball' || col.bodyB.gameType === 'pokeball') {
        if (col.bodyA.hit) {
          col.bodyA.hit();
        } else if (col.bodyB.hit) {
          col.bodyB.hit();
        }
        return;
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