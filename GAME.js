var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

// 이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 220, 36).toDefs();
var start = Paper.image('img/start.png', 0, 0, 170, 170).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t70, 40').appendTo(topArea);

var title = topArea.text(180, 175, ['四 字 成 語', 'ㅊ ㅅ ㄱ ㅇ']).attr({
  'font-size': 55,
  'text-anchor': 'middle'
});
title.selectAll('tspan')[1].attr({
  x: 180,
  y: 235
});

start.use().transform('t100, 270').appendTo(topArea).attr({
  'cursor': 'pointer'
});
//
var orangeB = topArea.rect(30, 500, 80, 50).attr({
  'fill': '#FF9F08',
  'rx': 8,
  'ry': 8
});
var orangeBT = topArea.text(50, 532, '1단계').attr({
  'font-size': 20
});
var orange = topArea.g(orangeB, orangeBT).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('GAME01.html');
}

var greenB = topArea.rect(140, 500, 80, 50).attr({
  'fill': '#8FCD9D',
  'rx': 8,
  'ry': 8
});
var greenBT = topArea.text(159, 532, '2단계').attr({
  'font-size': 20
});
var green = topArea.g(greenB, greenBT).click(handler02).attr({
  'cursor': 'pointer'
});

function handler02() {
  location.replace('GAME02.html');
}

var redB = topArea.rect(250, 500, 80, 50).attr({
  'fill': '#87C9D4',
  'rx': 8,
  'ry': 8
});
var redBT = topArea.text(268, 532, '3단계').attr({
  'font-size': 20
});
var red = topArea.g(redB, redBT).click(handler03).attr({
  'cursor': 'pointer'
});

function handler03() {
  location.replace('GAME03.html');
}

// function handler() {
//   location.replace('GAME01.html');
// }
