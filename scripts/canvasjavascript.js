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
  var target = Physics.body('target', {
    x:800,
    y:250,
  //  radius:20,
    view: new Image()
  });
  target.view.src = "img/pokemon/bulbasaur.png";
  world.add(target);
  var trainer = new Image();
  trainer.src = "img/trainer/gyms/2-GymLeaderMisty.png";
  world.add(
    Physics.body('target', {
      x:30,
      y:250,
      radius:0,
      view: trainer
    })
  );

  // add a circle
  var shotBalls = 1;
  var pokeball = new Image();
  pokeball.src = "img/pokeball/10-MasterBall.png";
  document.onmousedown = function(event) {
      world.add(
        Physics.body('pokeball', {
          x: 100, // x-coordinate
          y: 250, // y-coordinate
          vx: event.x/800.0, // velocity in x-direction
          vy: (event.y-250)/800.0, // velocity in y-direction
          radius: 20,
          view: pokeball
        })
      );
  }


  world.on('collisions:detected', function( data ){
    var collisions = data.collisions,col;
    for (var i = 0, l = collisions.length; i < l; ++i)
    {
      col = collisions[i];
      if (col.bodyA.gameType === 'pokeball' || col.bodyB.gameType === 'pokeball')
      {
        if (col.bodyA.hit) {
          col.bodyA.hit();
        } else if (col.bodyB.hit) {
          col.bodyB.hit();
        }

        return;
      }
    }
});

  /*world.subscribe('collisions:detected', function (data) {
    var collisions = data.collisions,col;
    for (var i = 0, l = collisions.length; i < l; ++i)
    {
      col = collisions[i];
      if (col.bodyA.gameType === 'pokeball' || col.bodyB.gameType === 'pokeball')
      {
        if (col.bodyA.hit) {
          col.bodyA.hit();
        } else if (col.bodyB.hit) {
          col.bodyB.hit();
        }
        return;
      }
    }
  });*/

  world.add(Physics.behavior('body-collision-detection'));
  // ensure objects bounce when edge collision is detected
  world.add( Physics.behavior('body-impulse-response') );

  // add some gravity
  world.add( Physics.behavior('constant-acceleration') );

  // subscribe to ticker to advance the simulation
  Physics.util.ticker.on(function( time, dt ){

      world.step( time );
  });

  // start the ticker
  Physics.util.ticker.start();

});

});