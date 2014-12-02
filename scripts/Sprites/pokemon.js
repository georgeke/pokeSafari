define(
[
    'scripts/require',
    'scripts/physicsjs-0.6.0/physicsjs-full-0.6.0',,
    'scripts/physicsjs-0.6.0/bodies/circle',
    'scripts/physicsjs-0.6.0/bodies/convex-polygon'
],
function(
    require,
    Physics
){
  Physics.body('pokemon', 'circle', function( parent ){
    return {
      init: function( options ){
          parent.init.call(this, options);
          this.treatment = "static";
          this.gameType = "pokemon";
        }
    };
  });
});