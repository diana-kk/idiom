var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 30, 30).toDefs();
var hoi = Paper.image('img/hoi2.png', 0, 0, 44, 43).toDefs();
var bookicon = Paper.image('img/bookicon.png', 0, 0, 32, 32).toDefs();
var sampleimg = Paper.image('img/sample.jpg', 0, 0, 320, 500).toDefs();
var arrow = Paper.image('img/arrow.png', 0, 0, 25, 12).toDefs();
var deleteimg = Paper.image('img/deleteimg.png', 0, 0, 23, 23).toDefs();
var ga01 = Paper.image('img/ga01.png', 0, 0, 310, 285).toDefs();
var ga02 = Paper.image('img/ga02.png', 0, 0, 310, 285).toDefs();
var ga03 = Paper.image('img/ga03.png', 0, 0, 310, 285).toDefs();
var ga04 = Paper.image('img/ga04.png', 0, 0, 310, 285).toDefs();
var ga05 = Paper.image('img/ga05.png', 0, 0, 310, 285).toDefs();
var ga06 = Paper.image('img/ga06.png', 0, 0, 310, 285).toDefs();
var ga07 = Paper.image('img/ga07.png', 0, 0, 310, 285).toDefs();
var ga08 = Paper.image('img/ga08.png', 0, 0, 310, 285).toDefs();
var ga09 = Paper.image('img/ga09.png', 0, 0, 310, 285).toDefs();
var ga10 = Paper.image('img/ga10.png', 0, 0, 310, 285).toDefs();

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

hoi.use().transform('t72, 35').appendTo(topArea);

var title = topArea.text(126, 67, ['가등급', '생활한자']).attr({
  'font-size': 18,
  'font-weight': 'bold',
  'fill': 'orange'
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

// 하단
var bottomArea = Paper.g();

for (var i = 0; i < 5; i++) {
  bottomArea.rect(15, (i * 95) + 130, 150, 60, 5).attr({
    'fill': 'teal',
    'opacity': '0.15'
  });

  bottomArea.rect(195, (i * 95) + 130, 150, 60, 5).attr({
    'fill': '#E7EAEE'
  });
}

var hanjaChoices = Paper.g();

hanjaChoices.text(90, 173, data[0].mean).click(handler01).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 267, data[1].mean).click(handler02).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 362, data[2].mean).click(handler03).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 457, data[3].mean).click(handler04).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(90, 552, data[4].mean).click(handler05).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 173, data[5].mean).click(handler06).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 267, data[6].mean).click(handler07).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 362, data[7].mean).click(handler08).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 457, data[8].mean).click(handler09).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});

hanjaChoices.text(270, 552, data[9].mean).click(handler10).attr({
  'font-size': 32,
  'text-anchor': 'middle',
  'cursor': 'pointer'
});


// 핸들러 함수
function handler01() {
  var group = Paper.g();
  ga01.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler02() {
  var group = Paper.g();
  ga02.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler03() {
  var group = Paper.g();
  ga03.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler04() {
  var group = Paper.g();
  ga04.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler05() {
  var group = Paper.g();
  ga05.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler06() {
  var group = Paper.g();
  ga06.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler07() {
  var group = Paper.g();
  ga07.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler08() {
  var group = Paper.g();
  ga08.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler09() {
  var group = Paper.g();
  ga09.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}

function handler10() {
  var group = Paper.g();
  ga10.use().transform('t25, 180').appendTo(group);
  deleteimg.use().transform('t271, 205').click(handlerreload).appendTo(group).attr({
    'cursor': 'pointer'
  });

  function handlerreload() {
    group.remove();
  }
}
