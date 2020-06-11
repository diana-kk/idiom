var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var hoi = Paper.image('img/hoi2.png', 0, 0, 44, 43).toDefs();
var bookicon = Paper.image('img/bookicon.png', 0, 0, 32, 32).toDefs();
var sampleimg = Paper.image('img/sampleda.jpg', 0, 0, 320, 500).toDefs();
var arrow = Paper.image('img/arrow.png', 0, 0, 25, 12).toDefs();
var deleteimg = Paper.image('img/deleteimg.png', 0, 0, 23, 23).toDefs();
var da21 = Paper.image('img/da21.png', 0, 0, 310, 285).toDefs();
var da22 = Paper.image('img/da22.png', 0, 0, 310, 285).toDefs();
var da23 = Paper.image('img/da23.png', 0, 0, 310, 285).toDefs();
var da24 = Paper.image('img/da24.png', 0, 0, 310, 285).toDefs();
var da25 = Paper.image('img/da25.png', 0, 0, 310, 285).toDefs();
var da26 = Paper.image('img/da26.png', 0, 0, 310, 285).toDefs();
var da27 = Paper.image('img/da27.png', 0, 0, 310, 285).toDefs();
var da28 = Paper.image('img/da28.png', 0, 0, 310, 285).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단
var topArea = Paper.g();


home.use().transform('t12, 10').appendTo(topArea).click(handlerHome).attr({
    'cursor' : 'pointer'
});

function handlerHome() {
  location.replace('GAME.html');
}

hoi.use().transform('t72, 34').appendTo(topArea);
var title = topArea.text(126, 67, ['다등급', '생활한자']).attr({
  'font-size': 18,
  'font-weight': 'bold',
  'fill': '#76CBD7'
});
title.selectAll('tspan')[1].attr({
  x: 178,
  'fill': 'black'
});

bookicon.use().transform('t248, 43').appendTo(topArea).click(sample).attr({
    'cursor' : 'pointer'
});

function sample() {
  var group = Paper.g();
  sampleimg.use().transform('t20, 90').appendTo(group);
  deleteimg.use().transform('t300, 100').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

arrow.use().transform('t272, 32').appendTo(topArea);

topArea.text(300, 43, '맛보기').attr({
  'font-size': 14,
  'fill': '#647EA8',
  'rotate': -10
});

var set01B = topArea.path('M40,110 L95,110 A18,18 0 0,1 115,120 L115,150 L20,150 L20,120 A18,18 0 0,1 40,110').attr({
  'fill': '#FADCB9',
  'opacity': '0.5'
});
var set01T = topArea.text(50, 138, '1~10').attr({
  'font-size': 20,
  'fill': 'gray'
});
var set01 = topArea.g(set01B, set01T).click(handlerCard1).attr({
  'cursor': 'pointer'
});

function handlerCard1() {
  location.replace('card03_01.html');
}

var set02B = topArea.path('M145,110 L200,110 A18,18 0 0,1 220,120 L220,150 L130,150 L130,120 A18,18 0 0,1 145,110').attr({
  'fill': '#FADCB9',
  'opacity': '0.5'
});
var set02T = topArea.text(152, 138, '11~20').attr({
  'font-size': 20,
  'fill': 'gray'
});
var set02 = topArea.g(set02B, set02T).click(handlerCard2).attr({
  'cursor': 'pointer'
});

function handlerCard2() {
  location.replace('card03_02.html');
}

var set03B = topArea.path('M250,110 L305,110 A18,18 0 0,1 325,120 L325,150 L235,150 L235,120 A18,18 0 0,1 250,110').attr({
  'fill': '#FADCB9'
});
var set03T = topArea.text(255, 138, '21~28').attr({
  'font-size': 20,
  'font-weight': 'bold'
});
var set03 = topArea.g(set03B, set03T).click(handlerCard3).attr({
  'cursor': 'pointer'
});

function handlerCard3() {
  location.reload();
}

topArea.line(15, 150, 350, 150).attr({
  'stroke': 'gray',
  'stroke-width': '1pt'
});

// 하단
var bottomArea = Paper.g();

for (var i = 0; i < 4; i++) {
  bottomArea.rect(15, (i * 100) + 170, 150, 60, 5).attr({
    'fill': 'teal',
    'opacity': '0.15'
  });

  bottomArea.rect(195, (i * 100) + 170, 150, 60, 5).attr({
    'fill': '#E7EAEE'
  });
}

var hanjaChoices = Paper.g();

hanjaChoices.text(90, 213, data[50].mean).click(handler01).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 313, data[51].mean).click(handler02).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 413, data[52].mean).click(handler03).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 512, data[53].mean).click(handler04).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 213, data[54].mean).click(handler05).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 313, data[55].mean).click(handler06).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 413, data[56].mean).click(handler07).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 512, data[57].mean).click(handler08).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});


// 핸들러 함수
function handler01() {
  var group = Paper.g();
  da21.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler02() {
  var group = Paper.g();
  da22.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler03() {
  var group = Paper.g();
  da23.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler04() {
  var group = Paper.g();
  da24.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler05() {
  var group = Paper.g();
  da25.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler06() {
  var group = Paper.g();
  da26.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler07() {
  var group = Paper.g();
  da27.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler08() {
  var group = Paper.g();
  da28.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}
