/* TODO: add payloard to be send to canvas everytime stuff updates. Add updateIFrame function to more places where things are updated

// Stores current upgrade value
var cur = {
  pokeball: 1,
  strength: 1,
  trainer: 1
}

// Does initial setup of game
$(document).ready(function() {
  /* *
   * Tab setup
   */
  $('.tabs .tab-links a').on('click', function(e)  {
      var currentAttrValue = $(this).attr('href');

      // Show/Hide Tabs
      $('.tabs ' + currentAttrValue).show().siblings().hide();

      // Change/remove current tab to active
      $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

  /* *
   * Updating from save content
   */
  $("#wallet").html("$" + save.pInWallet);
  // Setting values for each upgrade
  initializeUpgrade("pokeball");
  initializeUpgrade("strength");
  initializeUpgrade("trainer");
});

// Listener for iframe messaging that it's loaded
$(window).on("message onmessage", function(e) {
  updateIFrame();
});

// Sends save information to iframe for it to update accordingly
function updateIFrame() {
  var win = document.getElementById("canvas-iframe").contentWindow;
  // TODO: change to full domain path of canvas.html when shipped
  win.postMessage("test", "*");
}

function initializeUpgrade(type) {
  var cap = type.charAt(0).toUpperCase() + type.slice(1);
  cur[type] = save[type + "Lvl"];

  $("#header" + cap).html(cap + " [" + cur[type] + "]");
  $("#name" + cap).html(map[type][cur[type]].name)
  $("#icon" + cap).attr("src", map[type][cur[type]].img);
  $("#cost" + cap).html("Next: $" + eval("get" + cap + "Cost(" + cur[type] + ")"));
  $("#right" + cap).mouseenter(function(type) {
      $("#right" + cap).attr("src", roots.misc + "unlock.png");
    });
  $("#right" + cap).mouseleave(function(type) {
      $("#right" + cap).attr("src", roots.misc + "lock.png");
    });

  // Hide left arrow
  if (cur[type] == 1) {
    $("#left" + cap).attr("src", roots.misc + "leftArrowHidden.png");
  }
}

function leftArrow(type) {
  // Name of type capitalized (e.g. pokeball -> Pokeball)
  var cap = type.charAt(0).toUpperCase() + type.slice(1);
  if (cur[type] != 1) {
    cur[type]--;
    // Changing strings and icons based on level
    $("#header" + cap).html(cap + " [" + cur[type] + "]");
    $("#name" + cap).html(map[type][cur[type]].name)
    $("#icon" + cap).attr("src", map[type][cur[type]].img);
    // Change right arrow back to arrow instead of lock
    $("#right" + cap).attr("src", roots.misc + "rightArrow.png");
    // Remove mouse bindings for lock "animation"
    $("#right" + cap).unbind('mouseenter mouseleave');
  }
  if (cur[type] == 1) {
    // Hide left arrow if at first level
    $("#left" + cap).attr("src", roots.misc + "leftArrowHidden.png");
  }
}

function rightArrow(type) {
  var cap = type.charAt(0).toUpperCase() + type.slice(1);
  // Checking if buying next upgrade; max level is 10
  var upgrade = (cur[type] == save[type + "Lvl"] && cur[type] < 10);

  if (cur[type] != save[type + "Lvl"]) {
    cur[type]++;
    $("#header" + cap).html(cap + " [" + cur[type] + "]");
    $("#name" + cap).html(map[type][cur[type]].name)
    $("#icon" + cap).attr("src", map[type][cur[type]].img);
    $("#right" + cap).attr("src", roots.misc + "rightArrow.png");
    $("#right" + cap).unbind('mouseenter mouseleave');
    // Show left arrow
    $("#left" + cap).attr("src", roots.misc + "leftArrow.png");
  }
  if (cur[type] == save[type + "Lvl"]) {
    $("#right" + cap).attr("src", roots.misc + "lock.png");
    // Binding image change for lock animation when mouse hovers
    $("#right" + cap).mouseenter(function(type) {
        $("#right" + cap).attr("src", roots.misc + "unlock.png");
      });
    $("#right" + cap).mouseleave(function(type) {
        $("#right" + cap).attr("src", roots.misc + "lock.png");
      });
  }
  if (upgrade) {
    save[type + "Lvl"]++;
    save.pInWallet -= eval("get" + cap + "Cost(" + cur[type] + ")");
    rightArrow(type);
    $("#wallet").html("$" + save.pInWallet);
  }
}

function getPokeballCost(lvl) {
  // TODO: return cost of pokeball based on level
  return 500;
}

function getStrengthCost(lvl) {
  // TODO: return cost of strength based on level
  return 700;
}

function getTrainerCost(lvl) {
  // TODO: return cost of trainer based on level
  return 2000;
}

// Getters for value based on level (e.g. lv 5 pokeball means 500 dmg/hit, etc.)
function getPokeballVal(lvl) {
}

function getStrengthVal(lvl) {
}

function getTrainerVal(lvl) {
}