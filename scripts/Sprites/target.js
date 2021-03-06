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
    // extend the circle body
	Physics.body('target', 'circle', function( parent ){
	    // private helpers
	    // ...
	 //   var targetImg = new Image();
	//    targetImg.src = "img/trainer/Trainer_Lass.png";
	    return {
	        init: function( options ){
                parent.init.call(this, options);
                this.treatment = "static";
                this.gameType = "target";
             //   this.view = targetImg;
            }
	    };
	});
});