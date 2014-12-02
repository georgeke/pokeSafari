/* TODO: add payloard to be send to canvas everytime stuff updates. Add updateUpgrades function to more places where things are updated
          figure out way to convert routes.txt file to stag object
*/

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
  updateUpgrades();
  updateStage();
});

// Sends save information to iframe on Upgrades for it to update accordingly
function updateUpgrades() {
  var win = document.getElementById("canvas-iframe").contentWindow;
  // TODO: change to full domain path of canvas.html when shipped
  var payload = {
    type: "upgrade",
    trainerUrl: roots.trainer + cur.trainer + ".png",
    pokeballUrl: roots.pokeball + cur.pokeball + ".png",
    strength: getStrengthVal(cur.strength)
  }

  win.postMessage(payload, "*");
}

// Sends save information to iframe on current stage
function updateStage() {
  var win = document.getElementById("canvas-iframe").contentWindow;
  // TODO: change to full domain path of canvas.html when shipped
  var payload = {
    type: "stage",
    rightPlatformUrl: roots.stage + "grass_platform.png",
    leftPlatformUrl: roots.stage + "grass_platform.png",
    targetUrl: roots.pokemon + "78.png",
    backgroundUrl: roots.stage + "grass_background.png"
  }

  win.postMessage(payload, "*");
}

function initializeUpgrade(type) {
  var cap = type.charAt(0).toUpperCase() + type.slice(1);
  cur[type] = save[type + "Lvl"];

  $("#header" + cap).html(cap + " [" + cur[type] + "]");
  $("#name" + cap).html(map[type][cur[type]])
  $("#icon" + cap).attr("src", roots[type] + cur[type] + ".png");
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
    updateUpgrades()
    // Changing strings and icons based on level
    $("#header" + cap).html(cap + " [" + cur[type] + "]");
    $("#name" + cap).html(map[type][cur[type]])
    $("#icon" + cap).attr("src", roots[type] + cur[type] + ".png");
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
    updateUpgrades()
    // Changing strings and icons based on level
    $("#header" + cap).html(cap + " [" + cur[type] + "]");
    $("#name" + cap).html(map[type][cur[type]])
    $("#icon" + cap).attr("src", roots[type] + cur[type] + ".png");
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
    updateUpgrades()
    save[type + "Lvl"]++;
    // Update current money;
    save.pInWallet -= eval("get" + cap + "Cost(" + cur[type] + ")");
    // Call right arrow to move to next unlock
    rightArrow(type);
    // Update display
    $("#wallet").html("$" + save.pInWallet);
    $("#cost" + cap).html("Next: $" + eval("get" + cap + "Cost(" + (cur[type]+1) + ")"));
  }
}

function getPokeballCost(lvl) {
  // TODO: return cost of pokeball based on level
  return Math.pow(2, lvl)*500;
}

function getStrengthCost(lvl) {
  // TODO: return cost of strength based on level
  return Math.pow(2, lvl)*700;
}

function getTrainerCost(lvl) {
  // TODO: return cost of trainer based on level
  return Math.pow(2, lvl)*2000;
}

// Getters for value based on level (e.g. lv 5 pokeball means 500 dmg/hit, etc.)
function getPokeballVal(lvl) {
  return lvl*500;
}

function getStrengthVal(lvl) {
  if (lvl <= 3) {
    return lvl*0.1 + 0.1
  } else if (lvl >= 6 && lvl <= 8) {
    return lvl*0.1*0.91;
  } else if (lvl > 8) {
    return lvl*0.1*1.2;
  }
  return lvl*0.1;
}

function getTrainerVal(lvl) {
  return lvl*500;
}