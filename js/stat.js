var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_FONT_SIZE = 16;
var CLOUD_FONT_COLOR = '#000000';
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MY_NAME = 'Вы';
var BAR_MY_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  return Math.max.apply(null, times);
};

var getRandomBlueColor = function () {
  return 'hsl(240,100%,' + Math.floor(Math.random() * 100) + '%)';
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = CLOUD_FONT_COLOR;
  ctx.textBaseline = 'hanging';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + CLOUD_FONT_SIZE + GAP);

  var actualBarHeight;
  var actualX = CLOUD_X;
  var actualY = CLOUD_Y + ((GAP + CLOUD_FONT_SIZE) * 2) + GAP + CLOUD_FONT_SIZE + BAR_HEIGHT;


  for (var i = 0; i < names.length; i++) {
    actualX += BAR_GAP;

    actualBarHeight = (times[i] * BAR_HEIGHT / maxTime);

    if (names[i] === BAR_MY_NAME) {
      ctx.fillStyle = BAR_MY_COLOR;
    } else {
      ctx.fillStyle = getRandomBlueColor();
    }

    ctx.fillRect(actualX, actualY - BAR_HEIGHT + (BAR_HEIGHT - actualBarHeight), BAR_WIDTH, actualBarHeight);

    ctx.fillText(names[i], actualX, actualY + GAP);
    ctx.fillText(Math.floor(times[i]), actualX, actualY - BAR_HEIGHT + (BAR_HEIGHT - actualBarHeight) - CLOUD_FONT_SIZE);
    ctx.fillStyle = CLOUD_FONT_COLOR;
    actualX += BAR_WIDTH;
  }
};
