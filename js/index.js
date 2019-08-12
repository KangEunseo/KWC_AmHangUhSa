function clickbutton(){
    var btn = document.getElementsByClassName('menu-button')[0]
}

function char1(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char1_face.jpg";
  }
}

function char2(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char2_face.jpg";
  }

  alert("출시되지 않은 캐릭터입니다.");
}

function char3(){
  var v = document.getElementsByClassName('char');

  for(var i=0;i<v.length;i++){
    v[i].src = "image/char3_face.jpg";
  }

  alert("출시되지 않은 캐릭터입니다.");
}